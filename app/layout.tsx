import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Concordia Esports Association",
  description: "Official website of the Concordia Esports Association (CESA)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-concordia-gold flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="container mx-auto px-4 py-8 pt-24 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
