import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Uroš Pavlović - Graphic Illustrator",
  description: "Portfolio of Uroš Pavlović, graphic illustrator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </head>
        <body className={inter.className}>
          <Header />
          <main className="min-h-[calc(100vh-140px)] px-4 md:px-6 lg:px-28.75">{children}</main>
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
