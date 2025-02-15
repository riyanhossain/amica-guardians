import { FOOTERS, SOCIALS } from "@/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-10 bg-charcoal">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <h3 className="text-xl md:text-3xl uppercase">Guardians</h3>

          <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-16">
            {FOOTERS.map((footer) => (
              <li key={footer.name}>
                <Link href={footer.link}>{footer.name}</Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-4">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <Link href={social.link} target="_blank" rel="noreferrer">
                  <Image
                    src={`/icons/${social.name}.svg`}
                    alt={social.name}
                    quality={75}
                    className="size-6 min-w-6 lg:size-10"
                    width={40}
                    height={40}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full h-5 md:h-[40px]"></div>
        <div className="h-px bg-tiffany-blue w-full"></div>
        <div className="w-full h-[20px] md:h-[40px]"></div>

        <div className="flex justify-center">
          <Link href="/privacy-policy" className="text-center">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
