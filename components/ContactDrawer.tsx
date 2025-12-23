"use client";

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
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.5rem",
            lineHeight: 1,
          }}
          aria-label="Close contact drawer"
        >
          &times;
        </button>

        <div style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "24px" }}>
            Contact
          </h2>

          <div style={{ lineHeight: 1.8 }}>
            <p>Uroš Pavlović</p>
            <p>Graphic Illustrator</p>
            <p style={{ marginTop: "16px" }}>
              <a href="mailto:email@example.com">email@example.com</a>
            </p>
            <p>
              <a href="tel:+381000000000">+381 00 000 0000</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
