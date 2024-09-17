import { Logo } from "@/icons/logo";
import "./globals.css";

import { DM_Sans } from "next/font/google";

import { Header } from "./_components/header";

const dmSans = DM_Sans({
  display: "swap",
  weight: ["400", "600", "700", "800"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="relative">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
