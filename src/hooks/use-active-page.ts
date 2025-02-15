"use client";

import { usePathname } from "next/navigation";

export const useActivePage = (link: string) => {
  const pathname = usePathname();
  return pathname === link;
};
