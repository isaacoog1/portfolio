import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oluwakorede Oguntuyo Isaac | Frontend Engineer",
  description:
    "Founding Frontend Engineer specializing in React, Next.js, and TypeScript. Building pixel-perfect, scalable interfaces for startups and enterprise clients in Lagos, Nigeria.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Lagos Nigeria",
    "Web Developer",
  ],
  authors: [{ name: "Oguntuyo Oluwakorede Isaac" }],
  openGraph: {
    title: "Oguntuyo Oluwakorede Isaac | Frontend Engineer",
    description:
      "Founding Frontend Engineer - Building pixel-perfect interfaces for startups and enterprise clients",
    type: "website",
    locale: "en_US",
    url: "https://isaacog.vercel.app",
    images: ["/images/me-2.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oguntuyo Oluwakorede Isaac | Frontend Engineer",
    description:
      "Founding Frontend Engineer specializing in React, Next.js, and TypeScript",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        <Navbar />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
