import NavBar from "@/components/ui/NavBar";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deva Portfolio",
  description: "Personal Portfolio",
  keywords: [
    "deva",
    "portfolio",
    "nextjs",
    "devanand",
    "devaportfolio",
    "github",
    "deva-portfolio",
    "react",
    "software",
    "saas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "antialiased")}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
