# Repository Guidelines

## Project Structure & Module Organization
- Application code lives under `app/`. Route handlers reside in `app/routes` (special files prefixed with `_` for middleware, renderer, or error pages). `app/islands` holds interactive React components, while `app/client.ts` bootstraps the browser bundle.
- `app/middlewares` centralizes cross-cutting Hono middleware. Keep new middleware there and register it via `app/server.ts`.
- Static assets go in `public/`; Vite copies them into `dist/` at build time. Avoid editing `dist/` directly.

## Build, Test, and Development Commands
- `npm run dev` launches the Vite + Honox dev server with hot reload against the local D1 binding.
- `npm run build` generates the client bundle (`--mode client`) and Worker build artifacts.
- `npm run preview` proxies through `wrangler pages dev` for a Pages-like environment; use when validating edge behaviour.
- `npm run deploy` builds and deploys via Wrangler to the configured Cloudflare project.
- Database helpers from the README: e.g. `npx wrangler d1 migrations apply archive` (local) and `npx wrangler d1 execute archive --remote --file=./schema.sql`.

## Coding Style & Naming Conventions
- TypeScript is strict; stick to explicit types at boundaries and prefer async/await in route handlers.
- Use two-space indentation and single quotes in TSX except for JSX attributes. Export default React components from files named in lowercase (e.g. `home.tsx`) to align with Honox routing.
- TailwindCSS is provided through `app/style.css`; keep utility-first styling in markup instead of global overrides.

## Testing Guidelines
- No automated runner exists yet; add route-level tests with Hono testing utilities or Vitest, placing files under `app/routes/__tests__` and naming them `*.test.ts`.
- For manual checks, run `npm run preview` and hit the route with curl or the browser; validate database flows with `wrangler d1 execute ...` against the staging dataset.
- Aim to cover API responses and island interactivity before requesting review.

## Commit & Pull Request Guidelines
- Follow Conventional Commits (`feat:`, `fix:`) as seen in `git log`; scope optional but recommended (`feat(api):`).
- Squash logical work into focused commits with passing builds. Update README or D1 migrations alongside code changes.
- Pull requests should outline the change, test evidence (commands run), and reference related issues. Include UI screenshots when touching `app/routes/*.tsx`.
