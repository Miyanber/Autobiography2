# Autobiography2

個人サイト（自己紹介・ブログ・制作物）。Next.js (App Router) + microCMS で構築しています。

## 技術スタック

- [Next.js](https://nextjs.org) / React 19 / TypeScript
- Tailwind CSS v4
- [microCMS](https://microcms.io)（ブログ記事の取得）
- react-markdown (+ KaTeX, remark/rehype プラグイン)
- パッケージマネージャ: pnpm

## セットアップ

```bash
pnpm install
cp .env.example .env.local   # 値を設定する
pnpm dev
```

[http://localhost:3000](http://localhost:3000) を開いて確認できます。

### 環境変数

| 変数名 | 説明 |
| --- | --- |
| `MICROCMS_SERVICE_DOMAIN` | microCMS のサービスドメイン |
| `MICROCMS_API_KEY` | microCMS の API キー |

## スクリプト

| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド |
| `pnpm start` | 本番サーバー起動 |
| `pnpm lint` | ESLint 実行 |

## 画像の WebP 一括変換（Windows / PowerShell）

```powershell
# インストール
scoop install libwebp

# .webp の生成
Get-ChildItem *.png | ForEach-Object { cwebp -q 80 $_.Name -o "$($_.BaseName).webp" }

# 生成と同時に元ファイル(.png)を削除
Get-ChildItem *.png | ForEach-Object { cwebp -q 80 $_.Name -o "$($_.BaseName).webp"; Remove-Item $_.Name }
```

## ライセンス

ソースコードは [MIT License](./LICENSE) です。
ただし `articles/`、`data/`、画像類（`app/img/`、`public/`）は MIT の対象外で、著作権は著作者（または各権利者）に帰属します。無断での転載・再利用はご遠慮ください。
