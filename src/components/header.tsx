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
      <nav className="container flex items-center justify-between py-2 lg:py-3">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            quality={75}
            className="size-8 min-w-9 lg:h-[60px] lg:w-[66px]"
          />
        </Link>

        <ul className="hidden gap-x-[60px] lg:flex">
          {HEADERS.map((header) => (
            <li key={header.link}>
              <HeaderLink
                href={header.link}
                className={`font-normar text-base transition-colors`}>
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
              className="text-xs font-normal uppercase">
              Try Guardians Now
            </Button>
          </Link>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
