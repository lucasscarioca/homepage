# Lucas Carioca Homepage

Minimal personal homepage/portfolio built with Astro, Tailwind CSS v4, and the Cloudflare adapter.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`          | Install dependencies                             |
| `pnpm dev`              | Start local Astro dev server                     |
| `pnpm build`            | Build production output                          |
| `pnpm preview`          | Build and run Wrangler locally                   |
| `pnpm astro check`      | Run Astro diagnostics                            |
| `pnpm deploy`           | Build and deploy to Cloudflare                   |

## Notes

- Tailwind is configured through `@tailwindcss/vite`.
- The homepage content lives in `src/pages/index.astro`.
- Global theme tokens and base styles live in `src/styles/global.css`.
