// utils/text.ts

/**
 * HTML文字列からタグを除去し、指定された文字数で切り詰める関数
 * @param htmlStr - 元のHTML文字列
 * @param maxLength - 切り出す最大文字数（デフォルト100文字）
 * @returns プレーンテキスト化され、必要に応じて「...」が付与された文字列
 */
export function extractExcerpt(htmlStr: string | undefined, maxLength: number = 100): string {
  if (!htmlStr) return '';

  // 1. HTMLタグを消去し、改行や余計なスペースを1つの半角スペースにまとめる
  const plainText = htmlStr
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // 2. 指定文字数を超えていたら切り詰めて「...」を足す
  if (plainText.length > maxLength) {
    return `${plainText.substring(0, maxLength)}...`;
  }

  return plainText;
}