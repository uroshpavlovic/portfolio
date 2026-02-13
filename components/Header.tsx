"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactDrawer from "./ContactDrawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-start sticky top-0 bg-transparent z-30 p-4 h-23.75 md:py-5 md:px-12.25 md:h-31.25 lg:py-6 lg:px-24.5 lg:h-40.25 pointer-events-none">
        <Link href="/" className="pointer-events-auto">
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
          className="cursor-pointer pointer-events-auto"
        >
          <Image
            src="/menu_trigger_0.svg"
            alt="Contact"
            width={123}
            height={85}
            className="w-15 h-10.25 md:w-19.5 md:h-13.5 lg:w-26.25 lg:h-18"
          />
        </button>
      </header>

      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
