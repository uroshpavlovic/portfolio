"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ContactDrawer from "./ContactDrawer";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "24px",
        position: "sticky",
        top: 0,
        background: "var(--background)",
        zIndex: 30,
        height: "181.5px",
      }}>
        <Link href="/">
          <Image src="/logo.svg" alt="Uroš Pavlović" width={107} height={113}  />
        </Link>

        <button
          onClick={() => setIsDrawerOpen(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <Image src="/menu_trigger_0.svg" alt="Contact" width={123} height={85} />
        </button>
      </header>

      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
