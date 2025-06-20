import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Parvatiya Ornaments | Premium Gold & Diamond Jewellery Store in Dehradun",
  description: "Parvatiya Ornaments is a trusted jewellery store in Dehradun offering handcrafted gold, diamond, and bridal jewellery with timeless elegance and premium quality.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
