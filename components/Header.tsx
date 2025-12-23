"use client";

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
        alignItems: "center",
        padding: "24px",
        position: "sticky",
        top: 0,
        background: "var(--background)",
        zIndex: 30,
      }}>
        <Link href="/" style={{ fontWeight: 600, fontSize: "1.125rem" }}>
          {/* Logo placeholder - replace with SVG later */}
          Uroš Pavlović
        </Link>

        <button
          onClick={() => setIsDrawerOpen(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1rem",
            fontFamily: "inherit",
          }}
        >
          Contact
        </button>
      </header>

      <ContactDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
