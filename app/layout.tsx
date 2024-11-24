import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Footer from "@/components/footer/footer";
// import AdSense from "@/components/Adsense";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// const pId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID ?? "";

export const metadata: Metadata = {
  title: "Trackify - Track your parcels",
  description: "Trackify is a simple parcel tracking app that helps you track your parcels from different courier services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon-new.ico" />
        <meta name="google-adsense-account" content="ca-pub-1659754718895137" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1659754718895137"
          crossOrigin="anonymous"
          data-ad-client="ca-pub-1659754718895137"
          strategy="afterInteractive"
        ></Script>

        {/* Custom AdSense component for Ad Slot */}
        {/* <AdSense pId={pId} /> */}

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
