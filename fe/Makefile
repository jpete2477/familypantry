SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c
.ONESHELL:
.DELETE_ON_ERROR:
.DEFAULT_GOAL := help
MAKEFLAGS += --warn-undefined-variables --no-builtin-rules

PORT ?= 5173
PNPM_INSTALL_FLAGS ?=

.PHONY: help
help: ## Show this help message
	@grep -hE '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
			| sort \
			| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: install ## Run frontend build
	pnpm run build

.PHONY: check
check: lint typecheck test ## Run frontend lint/typecheck/test

.PHONY: clean
clean: ## Remove dist folder
	rm -rf dist

.PHONY: clean-all
clean-all: clean ## Purge node_modules
	rm -rf node_modules

.PHONY: dev
dev: install ## Run frontend in development mode. Override port by passing PORT=????
	pnpm run dev --port $(PORT)

.PHONY: doctor
doctor: ## Verify required tools are installed
	@command -v pnpm >/dev/null || { echo "pnpm not found"; exit 1; }
	@echo "All tools present"

.PHONY: install
install: node_modules ## Install dependencies

node_modules: package.json pnpm-lock.yaml
	pnpm install $(PNPM_INSTALL_FLAGS)
	@touch node_modules

.PHONY: lint
lint: install ## Run frontend lint
	pnpm run lint

.PHONY: test
test: install ## Run frontend tests
	pnpm run test

.PHONY: typecheck
typecheck: install ## Run frontend typechecker
	pnpm run typecheck
