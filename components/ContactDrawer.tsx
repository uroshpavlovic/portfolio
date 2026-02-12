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
        <div className="flex justify-between items-start p-4 h-25 md:py-5 md:px-12.25 md:h-35 lg:py-6 lg:px-24.5 lg:h-[181.5px]">
          <Image
            src="/logo_overlay.svg"
            alt="Menu"
            width={96}
            height={102}
            className="w-13.5 h-14.25 p-1.25 md:w-18 md:h-19.25 lg:w-24 lg:h-25.5"
          />

          <button
            onClick={onClose}
            className="cursor-pointer"
            aria-label="Close menu"
          >
            <Image
              src="/menu_trigger_1.svg"
              alt="Close"
              width={123}
              height={85}
              className="w-17.5 h-12 md:w-23 md:h-16 lg:w-30.75 lg:h-21.25  p-0.75"
            />
          </button>
        </div>

        <div className="px-4 md:px-12.25 lg:px-24.5 max-w-137.5">
          <p className="leading-[1.8]">
            Uroš Pavlović is tra la la la la la tra la la la laa
            tra la la la la laa tra la la la laa tra la la la la laa
            tra la la la laa tra la la la la laa tra la la la laa
            tra la la la la laa tra la la la laa tra la la la la laa
            tra la la la laa tra la la la laa tra la la la la laa.
          </p>

          <p className="mt-6">Say Hello:</p>
          <p>
            <a href="mailto:hello@urospavlovic.com">hello@urospavlovic.com</a>
          </p>

          <p className="mt-6">
            <a href="https://www.instagram.com/urospavlovic_/" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
