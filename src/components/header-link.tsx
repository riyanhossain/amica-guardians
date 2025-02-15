"use client";

import { useActivePage } from "@/hooks/use-active-page";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function HeaderLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const isActive = useActivePage(href);
  return (
    <Link
      href={href}
      className={`${cn(className)} ${
        isActive ? "text-tiffany-blue" : "text-white hover:text-tiffany-blue"
      }`}
    >
      {children}
    </Link>
  );
}
