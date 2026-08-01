SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c
.ONESHELL:
.DELETE_ON_ERROR:
.DEFAULT_GOAL := help
MAKEFLAGS += --warn-undefined-variables --no-builtin-rules

API_DIR   := api
FE_DIR    := fe
CONTAINER ?= docker

.PHONY: help
help: ## Show this help message
	@grep -hE '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
			| sort \
			| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

.PHONY: help-more
help-more: ## Show help + help available for api and fe subdirectories
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) api/Makefile fe/Makefile \
			| sort \
			| awk '{ idx = index($$0, "## "); desc = substr($$0, idx+3); prefix = substr($$0, 1, idx-1); sub(/: *$$/, "", prefix); n = split(prefix, parts, ":"); dir = parts[1]; target = (n>=2) ? parts[2] : ""; sub(/(^|\/)Makefile$$/, "", dir); name = (dir=="") ? target : dir"-"target; printf "  \033[36m%-18s\033[0m %s\n", name, desc; }'

.PHONY: api-%
api-%:
	@$(MAKE) -C $(API_DIR) $*

.PHONY: fe-%
fe-%:
	@$(MAKE) -C $(FE_DIR) $*

.PHONY: build
build: api-build fe-build ## Run api build (docker) and frontend build

.PHONY: check
check: api-check fe-check ## Run lint/typecheck/test for both api and fe

.PHONY: clean
clean: api-clean fe-clean ## Clean build files and caches

.PHONY: dev
dev: ## Run the full dev stack (api + frontend) via Docker Compose with hot reload
	$(CONTAINER) compose up --build

.PHONY: doctor
doctor: api-doctor fe-doctor ## Check for missing dependencies

.PHONY: install
install: api-install fe-install ## Install python and javascript dependencies

.PHONY: lint
lint: api-lint fe-lint ## Run linters

.PHONY: test
test: api-test fe-test ## Run all tests
