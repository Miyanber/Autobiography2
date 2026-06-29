// トップページのセクション
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  bg?: string;        // 背景色を個別に変えたいとき用（オプショナル）
  className?: string; // さらに個別の調整クラスを入れたいとき用（オプショナル）
  px?: string;        // 内側のpx
};

export function Section({ children, bg = "bg-white", className = "", px = "px-8 sm:px-12" }: SectionProps) {
  return (
    <section className={`w-full ${bg} py-12 ${className}`}>
      <div className={`max-w-250 mx-auto ${px}`}>
        {children}
      </div>
    </section>
  );
}