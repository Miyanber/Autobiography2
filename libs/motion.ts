import { HTMLMotionProps } from "framer-motion";

export const fadeIn: { [key: string]: HTMLMotionProps<'div'> } = {
  // 基本の「下からスッと出てくる」設定
  up: {
    // 1. 初期状態（画面外にあるとき）: 透明で、ちょっと下に下がっている
    initial: { opacity: 0, y: 30 },
    // 2. 画面に入ってきたとき（表示されるとき）: 不透明になり、元の位置に戻る
    whileInView: { opacity: 1, y: 0 },
    // 3. 挙動のオプション設定
    viewport: { once: true, amount: 0.2 }, // 一度表示されたら、スクロールで戻っても消さない
    transition: { duration: 0.6, ease: "easeOut" },
  },
  // 横からスライドさせたいとき用
  left: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  // ふわっとフェードイン（位置移動なし）
  simple: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
