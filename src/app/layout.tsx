import { Logo } from "@/icons/logo";
import "./globals.css";

import { DM_Sans } from "next/font/google";
import { Icon } from "@/icons/icon";

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
    <html lang="en" className={dmSans.className}>
      <body>
        <header className="flex justify-between items-center p-8">
          <a href="/" className="relative">
            <Logo className="h-20 w-auto" />
            <Icon className="h-auto w-6 left-[123px] absolute opacity-100 -top-[1px] translate-y-0" />
          </a>
        </header>
      </body>
    </html>
  );
}
