export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      padding: "24px",
      textAlign: "center",
      fontSize: "0.875rem",
      color: "#666",
    }}>
      All content copyright Uroš Pavlović {year} ©
    </footer>
  );
}
