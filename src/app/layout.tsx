import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@styles/reset.css";
import "@app/globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rocart",
  description: "Buy Your Favorite Items Fast, Safe, and Easy with RoCart!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
