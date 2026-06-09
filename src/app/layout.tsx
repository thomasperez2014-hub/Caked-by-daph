import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Caked by Daphh | Custom Cakes & Desserts",
  description:
    "Beautiful custom cakes, cupcakes, and desserts handcrafted by Daphh for birthdays, weddings, baby showers, and life's sweetest celebrations.",
  keywords: "custom cakes, wedding cakes, birthday cakes, baby shower cakes, cupcakes, desserts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
