FROM python:3.12-slim AS dev

COPY --from=ghcr.io/astral-sh/uv:0.5 /uv /bin/uv

WORKDIR /usr/src/api

COPY pyproject.toml ./
RUN uv sync

COPY app/ /usr/src/api/app/
COPY entrypoint.dev.sh /usr/src/api/

EXPOSE 8000
CMD ["sh", "entrypoint.dev.sh"]


FROM python:3.12-slim

COPY --from=ghcr.io/astral-sh/uv:0.5 /uv /bin/uv

WORKDIR /usr/src/api

COPY pyproject.toml ./
RUN uv sync --no-dev

COPY app/ /usr/src/api/app/

EXPOSE 8000
CMD [".venv/bin/uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
