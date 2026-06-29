import Link from 'next/link';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

// 1. リンク（Link）として使う場合の型
type LinkProps = {
  href: string; // 必須にする
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<typeof Link>, 'href'>;

// 2. 通常のボタンとして使う場合の型
type ButtonProps = {
  href?: never; // 絶対に受け付けない
  children: ReactNode;
} & ComponentPropsWithoutRef<'button'>;

type CustomButtonProps = LinkProps | ButtonProps;

export default function CustomButton({ children, ...props }: CustomButtonProps) {
  let className =
    "inline-flex items-center justify-center border border-black px-10 py-3 my-8 mx-auto text-black font-title text-[1.1rem] transition duration-500 hover:bg-black hover:text-white";

  if (props.className) {
    className += ' ' + props.className
  }

  // props.href が存在し、かつ undefined でないことを確実に保証する
  if (props.href !== undefined) {
    // 型ガードのために一度別変数に切り出す
    const { href, ...linkProps } = props as LinkProps;
    return (
      <Link href={href} className={className} {...linkProps}>
        {children}
      </Link>
    );
  }

  // hrefがない場合（buttonとしてレンダリング）
  const buttonProps = props as ButtonProps;
  return (
    <button className={className} {...buttonProps}>
      {children}
    </button>
  );
}