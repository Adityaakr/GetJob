import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Job Board",
  description: "Find your next dream job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        {children}
        <footer className="container py-8 text-gray-500">
          Job Board &copy; 2024 - All right reserved
        </footer>
      </body>
    </html>
  );
}
