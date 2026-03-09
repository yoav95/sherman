import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `שרמן נדל"ן | דף הבית`,
  description: `שרמן נדל"ן, נדל"ן בכל חלקי הארץ. נדל"ן בצפון הארץ, נכסים להשכרה ומכירה, נכסים בקריית שמונה`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DH4MM0QSMH"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DH4MM0QSMH');
          `}
        </Script>

      </head>

      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}