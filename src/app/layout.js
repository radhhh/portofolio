import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Radhya Cahya Kusuma",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-[12px] sm:text-[14px] lg:text-[16px]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
