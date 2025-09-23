import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialBar from "@/components/SocialBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Full Stack Developer Portfolio",
};
import { Analytics } from '@vercel/analytics/next';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
className={`bg-gray-50 text-gray-900 flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <SocialBar/>
          <Footer />
      </body>
    </html>
  );
}
