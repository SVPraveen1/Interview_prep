import type { Metadata } from "next";
import {Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
const monasans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Interview Practice App",
  description: "An Ai powered interview practice application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monasans.className} antialiased pattern`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
