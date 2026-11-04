import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "ORBYT — Build. Secure. Evolve.",
  description:
    "Discover practical software products, digital security services and custom technology solutions with ORBYT.",
  metadataBase: new URL("https://example.com"),
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "ORBYT — Build. Secure. Evolve.",
    description: "Software products, security and development for modern businesses.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
