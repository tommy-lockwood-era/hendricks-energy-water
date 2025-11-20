// Site template
"use client";

import "@/styles/globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";
import { Winky_Rough } from "next/font/google";
import localFont from 'next/font/local';
import NextTopLoader from "nextjs-toploader";
import ToasterContext from "../context/ToastContext";

const winkyRough = Winky_Rough({
  subsets: ["latin"],
  weight: ['400','700'],
  display: 'auto'
});

const zalandoSans = localFont({
  src: [{
    path: '../../styles/fonts/ZalandoSans-Regular.ttf',
    weight: '400',
    style: 'normal'
  }]
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="dark"
        >
          <ToasterContext />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
