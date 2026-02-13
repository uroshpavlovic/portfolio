import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12.5 bg-(--surface) text-xs md:text-sm text-(--text-muted) py-6 px-4 md:py-8 md:px-12.25 lg:py-10 lg:px-24.5">
      {/* Mobile: 2-column grid */}
      <div className="grid grid-cols-[70%_30%] grid-rows-2 md:hidden">
        <a
          href="https://www.instagram.com/urospavlovic_/"
          target="_blank"
          rel="noopener noreferrer"
          className="self-end font-bold"
        >
          Instagram
        </a>

        <Image
          src="/signature.svg"
          alt="Uroš Pavlović signature"
          width={150}
          height={50}
          className="relative top-3.25 row-span-2 justify-self-end self-start w-25 h-8.25"
        />

        <p className="self-start">
          All content copyright Uroš Pavlović {year} ©
        </p>
      </div>

      {/* Desktop/Tablet landscape: flex row */}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <p>All content copyright Uroš Pavlović {year} ©</p>
          <Image
            src="/signature.svg"
            alt="Uroš Pavlović signature"
            width={150}
            height={50}
            className="relative top-3.25 w-30 h-10 lg:w-37.5 lg:h-12.5"
          />
        </div>

        <a
          href="https://www.instagram.com/urospavlovic_/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
}
