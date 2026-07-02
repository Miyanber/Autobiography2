import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// クラス結合用のヘルパー関数（未導入なら用意しておくと便利です）
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}