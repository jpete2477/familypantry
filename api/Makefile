SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c
.ONESHELL:
.DELETE_ON_ERROR:
.DEFAULT_GOAL := help
MAKEFLAGS += --warn-undefined-variables --no-builtin-rules

PORT ?= 8000

.PHONY: help
help: ## Show this help message
	@grep -hE '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
			| sort \
			| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: install ## Build the api docker image
	docker build -t familypantry-api:latest .

.PHONY: check
check: lint test ## Run linters and tests

.PHONY: clean
clean: ## Remove build artifacts and caches
	rm -rf .pytest_cache .ruff_cache
	find . -type d -name __pycache__ -prune -exec rm -rf {} +

.PHONY: dev
dev: install ## Run api in development mode. Override port by passing PORT=????
	uv run uvicorn app.main:app --reload --port $(PORT)

.PHONY: doctor
doctor: ## Verify required tools are installed
	@command -v uv >/dev/null || { echo "uv not found"; exit 1; }
	@echo "All tools present"

.PHONY: install
install: .venv ## Install dependencies

.venv: pyproject.toml
	uv sync
	@touch .venv

.PHONY: lint
lint: install ## Check lint rule compliance
	uv run ruff check .

.PHONY: lint-fix
lint-fix: install ## Auto-fix lint issues
	uv run ruff check --fix .
	uv run ruff format .

.PHONY: test
test: install ## Run tests
	uv run pytest
