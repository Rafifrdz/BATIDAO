import * as React from "react";
import { cn } from "@/lib/utils";

/** Tombol pil template: teks meluncur diagonal saat hover. */
export function Button({
  id,
  title,
  rightIcon,
  leftIcon,
  containerClass,
  href,
}: {
  id?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  href?: string;
}) {
  const inner = (
    <>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <span className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </span>
        <span className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </span>
      </span>
      {rightIcon}
    </>
  );

  const cls = cn(
    "group relative z-10 inline-flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
    containerClass,
  );

  if (href) {
    const external = /^https?:\/\//i.test(href);
    return (
      <a
        id={id}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={cls}
      >
        {inner}
      </a>
    );
  }

  return (
    <button id={id} type="button" className={cls}>
      {inner}
    </button>
  );
}
