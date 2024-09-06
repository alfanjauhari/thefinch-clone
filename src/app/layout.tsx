import { Logo } from "@/icons/logo";
import "./globals.css";

import { DM_Sans } from "next/font/google";
import { Icon } from "@/icons/icon";
import { cn } from "@/libs/utils";

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
      <body>
        <header className="flex justify-between items-center px-8 pt-5">
          <a href="/" className="relative">
            <Logo className="h-[70px] w-auto" />
            <Icon className="h-auto w-[30px] text-base left-[173px] absolute opacity-100 top-0 translate-y-0" />
          </a>
          <nav>
            <ul className="flex items-center gap-4">
              <li className="font-bold text-gray-500">Services</li>
              <li className="font-bold text-gray-500">Solutions</li>
            </ul>
          </nav>
        </header>
      </body>
    </html>
  );
}
