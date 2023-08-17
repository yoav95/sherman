import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `שרמן נדל"ן | דף הבית`,
  description: `שרמן נדל"ן -נלד"ן בכל חלקי הארץ`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
