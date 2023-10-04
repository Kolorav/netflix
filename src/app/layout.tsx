import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Header from "@/utils/Header/header";

const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Your very own cinema hall !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
