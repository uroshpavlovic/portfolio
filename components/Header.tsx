"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactDrawer from "./ContactDrawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-start sticky top-0 bg-transparent z-30 p-4 h-25 md:py-5 md:px-12.25 md:h-35 lg:py-6 lg:px-24.5 lg:h-[181.5px]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Uroš Pavlović"
            width={107}
            height={113}
            className="w-15 h-15.75 md:w-20 md:h-21.25 lg:w-26.75 lg:h-28.25"
          />
        </Link>

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="cursor-pointer"
        >
          <Image
            src="/menu_trigger_0.svg"
            alt="Contact"
            width={123}
            height={85}
            className="w-17.5 h-12 md:w-23 md:h-16 lg:w-30.75 lg:h-21.25"
          />
        </button>
      </header>

      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
