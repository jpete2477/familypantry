# The Family Pantry

Marketing website MVP for **The Family Pantry**, a premium family food brand (Est. 2026). The
site is a warm, invitation-focused introduction to the brand — not a shopping cart — built around
the credo **Gather • Prepare • Share**. It's a static-content marketing site today; product
purchasing, accounts, and a real backend are explicitly out of scope for this phase. See
[`site.prd`](site.prd) for the full product spec.

**Live:** https://fe-two-red.vercel.app

## Pages

Home, Products (listing), 4 individual product detail pages, About, and Contact — all behind a
shared header/footer with a persistent "Join the Family" call to action. Every page has unique SEO
metadata and is built to be keyboard-navigable and screen-reader friendly (skip link, semantic
landmarks, labeled form fields, visible focus states).

## Tech Stack

- **`fe/`** — React 19 + TypeScript + Vite + React Router, CSS Modules with a CSS
  custom-property theme (see `fe/src/index.css` — this is the whole "re-theme the site" surface).
- **`api/`** — FastAPI (Python, via `uv`). Deliberately minimal: a health check and a
  `/api/contact` endpoint that logs submissions. No database, no auth — backend logic is deferred
  per the PRD.
- **Docker Compose** orchestrates both services for local dev.

## Project Structure

```
familypantry/
├── fe/                # React frontend
├── api/                # FastAPI backend
├── docker-compose.yaml # local dev orchestration (fe + api)
├── Makefile            # root dev commands, delegates to fe/ and api/ Makefiles
└── site.prd             # product requirements doc
```

## Getting Started

### Prerequisites

- Docker with the `compose` plugin (recommended path), **or**
- Node.js 22+ with `pnpm`, and Python 3.12+ with [`uv`](https://docs.astral.sh/uv/) to run each
  service natively

### Run everything with Docker Compose (recommended)

```bash
make dev
```

- Frontend: http://localhost:5173
- API: http://localhost:8010 (health check at `/health`)

Ports default to 5173/8010; override with `FAMILYPANTRY_FE_PORT` / `FAMILYPANTRY_API_PORT` if
those are taken locally.

### Run natively (without Docker)

```bash
make install    # installs both fe and api dependencies
make fe-dev      # frontend dev server (Vite, http://localhost:5173)
make api-dev     # backend dev server (uvicorn --reload, http://localhost:8000)
```

### Environment variables

Copy the sample env files and adjust as needed:

```bash
cp api/.env.sample api/.env
cp fe/.env.sample fe/.env
```

| File | Variable | Purpose |
|---|---|---|
| `api/.env` | `CORS_ORIGIN` | Origin the API accepts requests from (the frontend's dev URL) |
| `api/.env` | `PORT` | Port uvicorn listens on |
| `fe/.env` | `VITE_API_BASE_URL` | Base URL the frontend calls for the Contact form |

## Common Commands

Run from the repo root — most targets delegate to `fe/` and `api/` (use `make help-more` to see
every underlying `fe-*` / `api-*` target):

| Command | What it does |
|---|---|
| `make dev` | Full stack via Docker Compose, hot reload |
| `make install` | Install frontend + backend dependencies |
| `make lint` | Lint both services |
| `make test` | Run both test suites |
| `make check` | Lint + typecheck + test, both services |
| `make build` | Production build for both services |
| `make clean` | Remove build artifacts and caches |
| `make doctor` | Check required local tooling is installed |

Individual services also work directly, e.g. `make fe-test`, `make api-lint`, or `cd fe && pnpm run dev`.

## Deployment

The frontend is deployed to Vercel as a static build:

```bash
cd fe && npx vercel deploy --prod
```

`fe/vercel.json` rewrites all paths to `index.html` so React Router's client-side routes don't
404 on direct load. The backend is **not** currently deployed anywhere — there's no database or
auth to stand up yet, so the Contact form's fetch to `/api/contact` simply fails silently in
production and still shows the success message (see `ContactForm.tsx`).

## Testing & Linting

- **Frontend** (`fe/`): `pnpm run lint` (oxlint), `pnpm run typecheck` (tsc), `pnpm run test`
  (vitest)
- **Backend** (`api/`): `uv run ruff check .`, `uv run pytest`
