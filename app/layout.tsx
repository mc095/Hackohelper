// layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "../components/Background"; // Import the Background component
import Navbar from "../components/NavBar"; // Import the Navbar component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by BBSC SVEC",
  keywords: "Next.js, React, Tailwind CSS, Your Keywords",
  authors: [{ name: "Hackohelper", url: "https://yourwebsite.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
      >
        <Background>
          <Navbar /> {/* Add Navbar here */}
          {children}
        </Background>
      </body>
    </html>
  );
}
