"use client";

import Image from "next/image";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  return (
    <>
      <div
        className={`drawer-overlay ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "24px",
          height: "181.5px",
        }}>
          <Image src="/logo_overlay.svg" alt="Menu" width={96} height={102} style={{ padding: "5px" }} />

          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Close menu"
          >
            <Image src="/menu_trigger_1.svg" alt="Close" width={123} height={85} />
          </button>
        </div>

        <div style={{ padding: "0 24px", maxWidth: "550px" }}>
          <p style={{ lineHeight: 1.8 }}>
            Uroš Pavlović is tra la la la la la tra la la la laa
            tra la la la la laa tra la la la laa tra la la la la laa
            tra la la la laa tra la la la la laa tra la la la laa
            tra la la la la laa tra la la la laa tra la la la la laa
            tra la la la laa tra la la la laa tra la la la la laa.
          </p>

          <p style={{ marginTop: "24px" }}>Say Hello:</p>
          <p>
            <a href="mailto:hello@urospavlovic.com">hello@urospavlovic.com</a>
          </p>
        </div>
      </div>
    </>
  );
}
