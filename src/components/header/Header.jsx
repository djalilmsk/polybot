import { ModeToggle } from "../mode-toggle";
import NavLinks, { NAV_LINKS } from "./NavLinks";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Header() {
  const navbar = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: navbar.current,
        start: "top+=100 top+=100",
        end: "bottom+=100",
        scrub: true,
        // markers: true,
        toggleActions: "play resume resume reverse",
      },
    });

    tl.to(navbar.current, {
      paddingTop: 20,
      paddingBottom: 20,
      borderBottom: 1,
      duration: 1,
    });
  }, []);


  return (
    <div
      ref={navbar}
      className="bg-background fixed z-10 w-full px-5 sm:px-10 py-8 xl:w-6xl 2xl:pt-10"
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl">POLYBOT</div>
        <NavLinks
          listClasses="flex gap-7 max-lg:hidden"
          oneLinkClasses="font-medium"
        />

        <div className="flex justify-between gap-2">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild className="lg:hidden">
              <Button
                className="[&_svg:not([class*='size-'])]:size-5"
                size="icon"
                variant="outline"
              >
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {NAV_LINKS.map(({ to, label }) => (
                <a key={label} href={to}>
                  <DropdownMenuItem>{label}</DropdownMenuItem>
                </a>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default Header;
