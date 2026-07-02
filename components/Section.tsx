import { cn } from "@/libs/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

// sectionタグが本来持つ属性（idやaria-labelなど）をすべて継承
type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  bg?: string;
  px?: string;
};

export function Section({
  children,
  bg = "bg-white",
  px = "px-8 sm:px-12",
  className,
  ...props // id や他の属性をここにまとめる
}: SectionProps) {
  return (
    <section 
      className={cn("w-full py-12", bg, className)} 
      {...props}
    >
      <div className={cn("max-w-250 mx-auto", px)}>
        {children}
      </div>
    </section>
  );
}