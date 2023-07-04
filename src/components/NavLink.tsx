"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: string;
  href: string;
  icon?: ReactNode;
}

export default function NavLink({ children, href, icon }: NavLinkProps) {
  const activeHref = usePathname();

  return (
    <Link
      data-active={activeHref === href}
      className="px-4 py-1.5 border-l border-zinc-50/5 text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-2 data-[active=true]:border-cyan-400"
      href={href}
    >
      {icon}
      {children}
    </Link>
  );
}
