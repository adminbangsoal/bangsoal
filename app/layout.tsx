import type { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Bangsoal",
  description: "Bangsoal - Platform belajar online",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={quicksand.variable}>
      <body className="antialiased font-quicksand">
        {children}
      </body>
    </html>
  );
}
