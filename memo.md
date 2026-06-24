### Imageのインポート忘れ

### SSG とか考えるのは後で

### WebP変換（一括コマンド）

```powershell
# インストール
scoop install libwebp

# .webpの生成
Get-ChildItem *.png | ForEach-Object { cwebp -q 80 $_.Name -o "$($_.BaseName).webp" }
# 元ファイル(.png)の削除
Get-ChildItem *.png | ForEach-Object { cwebp -q 80 $_.Name -o "$($_.BaseName).webp"; Remove-Item $_.Name }
```