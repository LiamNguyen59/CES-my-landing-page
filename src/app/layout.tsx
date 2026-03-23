import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-headline",
  subsets: ["vietnamese"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["vietnamese"],
});

const manropeLabel = Manrope({
  variable: "--font-label",
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Vanguard Wealth | Chuyên Gia Tư Vấn Tài Chính Cao Cấp",
  description: "Vanguard Wealth Partner & Strategist - Kiến tạo thịnh vượng bền vững qua ba thập kỷ kinh nghiệm tại thị trường chứng khoán Việt Nam và Châu Á",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${manrope.variable} ${manropeLabel.variable} antialiased selection:bg-primary-container selection:text-on-primary-container font-body`}
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
