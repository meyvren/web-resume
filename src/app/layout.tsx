import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://resume.mkfox.tech"),
  title: "Michael K. | Full-Stack Next.js Developer",
  description: "Full-stack Next.js developer building secure SaaS dashboards, internal tools, and business automation.",
  openGraph: {
    title: "Michael K. | Full-Stack Next.js Developer",
    description: "Secure SaaS dashboards, internal tools, and business automation built with Next.js.",
    type: "website",
    url: "https://resume.mkfox.tech/",
    siteName: "Michael K. Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Michael K. | Full-Stack Next.js Developer",
    description: "Secure SaaS dashboards, internal tools, and business automation built with Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#050505] text-white`}
      >
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
