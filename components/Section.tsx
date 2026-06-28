// トップページのセクション
import { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  bg?: string;        // 背景色を個別に変えたいとき用（オプショナル）
  className?: string; // さらに個別の調整クラスを入れたいとき用（オプショナル）
};

export function Section({ children, bg = "bg-white", className = "" }: SectionProps) {
  return (
    <section className={`w-full ${bg} py-12 ${className}`}>
      <div className="max-w-225 mx-auto px-6">
        {children}
      </div>
    </section>
  );
}