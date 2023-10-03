import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/utils/Header/header"), {
  ssr: false,
  loading: () => <div style={{ height: "60px", width: "100%" }}></div>,
});

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
