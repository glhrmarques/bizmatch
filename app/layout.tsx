import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const ptSerif = PT_Serif({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pt-serif", display: "swap" });

export const metadata: Metadata = {
  title: "Bizmatch",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${ptSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
