import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/mobile-menu";
import { HEADERS } from "@/config";
import HeaderLink from "@/components/header-link";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-charcoal">
      <nav className="container py-2 lg:py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            quality={75}
            className="size-8 min-w-9 lg:w-[66px] lg:h-[60px]"
          />
        </Link>

        <ul className="hidden lg:flex gap-x-[60px]">
          {HEADERS.map((header) => (
            <li key={header.link}>
              <HeaderLink
                href={header.link}
                className={`text-base font-normar   transition-colors`}
              >
                {header.name}
              </HeaderLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href="/dashboard">
            <Button
              variant="primary"
              size="xl"
              className="uppercase text-xs font-normal"
            >
              Try Guardians Now
            </Button>
          </Link>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
