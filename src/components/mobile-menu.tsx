import { Button } from "@/components/ui/button";
import { HEADERS } from "@/config";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import HeaderLink from "./header-link";

export function MobileMenu() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="primary" size="icon">
            <Menu size={24} />
          </Button>
        </SheetTrigger>
        <SheetContent className="text-charcoal">
          <SheetTitle>Guardians</SheetTitle>
          <ul className="space-y-2">
            {HEADERS.map((header) => (
              <li key={header.link}>
                <HeaderLink
                  href={header.link}
                  className="text-base font-normal w-full"
                >
                  <Button variant="link" size="default" className="w-full">
                    {header.name}
                  </Button>
                </HeaderLink>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
