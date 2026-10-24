<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project overview

個人サイト (Next.js App Router + TypeScript + Tailwind CSS v4)。ブログ記事は microCMS から取得する。

- パッケージマネージャは **pnpm**（`pnpm dev` / `pnpm build` / `pnpm lint`）
- 主なディレクトリ: `app/`（ルーティング）, `components/`, `libs/`, `utils/`, `types/`, `data/`, `articles/`, `public/`
- 環境変数は `.env.local`（`.env.example` 参照）。**シークレットは絶対にコミットしない**
- 画像は WebP を使う（変換手順は README 参照）
- このリポジトリは Public。個人情報・API キー・第三者の著作物を追加しないこと
