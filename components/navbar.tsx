"use client";

import Link from "next/link";
import { navMenus } from "@/lib/data";
import { usePathname } from "next/navigation";
import { HiOutlineBars2 } from "react-icons/hi2";

import ThemeToggle from "./themetoggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="max-w-[1000px] w-full">
      <nav className="flex justify-between w-full bg-transparent rounded py-4 sm:py-2">
        <Link
          href="/"
          className="text-[#6e6b90] text-2xl tracking-[-0.075em] font-[700]"
        >
          Charles Acosta
        </Link>

        <div className="flex gap-0 items-center text-sm font-[500] sm:hidden">
          {navMenus.map((e) => (
            <Link
              key={e.id}
              href={e.path}
              className={`${
                pathname.toString() === e.path && "bg-base1 text-white"
              } px-4 py-2 rounded-full`}
            >
              {e.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <HiOutlineBars2 className="text-[2rem]" />
            </SheetTrigger>
            <SheetContent className="bg-body-light dark:bg-body-dark dark:text-body-light">
              <SheetHeader>
                <SheetTitle className="text-[1.5rem]">Links</SheetTitle>
                <SheetDescription className="flex flex-col gap-2">
                  {navMenus.map((e) => {
                    return (
                      <SheetClose key={e.id} asChild>
                        <Link
                          href={e.path}
                          className="px-4 py-2 duration-200 dark:hover:bg-black hover:bg-gray-300 rounded"
                          >
                          <span className="mr-2">{e.icon}</span>
                          <span>{e.name}</span>
                        </Link>
                      </SheetClose>
                    );
                  })}
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;