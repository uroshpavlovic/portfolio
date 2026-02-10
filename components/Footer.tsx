import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      marginTop: "50px",
      padding: "40px 115px",
      background: "var(--surface)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "var(--font-size-sm)",
      color: "var(--text-muted)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <p>All content copyright Uroš Pavlović {year} ©</p>
        <Image src="/signature.svg" alt="Uroš Pavlović signature" width={150} height={50} />
      </div>

      <div>
        <a href="https://www.instagram.com/urospavlovic_/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}
