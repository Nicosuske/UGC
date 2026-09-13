import type { Metadata } from "next";
import { Anton, Figtree } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nico — UGC Creator",
  description:
    "26 Jahre · UGC-Creator · Mecklenburgische Seenplatte. Content, der verkauft, ohne wie Werbung zu klingen.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${anton.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  );
}
