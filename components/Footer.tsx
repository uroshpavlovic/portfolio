import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12.5 bg-(--surface) text-sm text-(--text-muted) flex flex-col items-start gap-4 py-6 px-4 md:flex-row md:items-center md:justify-between md:gap-0 md:py-8 md:px-6 lg:py-10 lg:px-28.75">
      <div className="flex items-center gap-3">
        <p>All content copyright Uroš Pavlović {year} ©</p>
        <Image
          src="/signature.svg"
          alt="Uroš Pavlović signature"
          width={150}
          height={50}
          className="w-25 h-8.25 md:w-30 md:h-10 lg:w-37.5 lg:h-12.5"
        />
      </div>

      <div>
        <a href="https://www.instagram.com/urospavlovic_/" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  );
}
