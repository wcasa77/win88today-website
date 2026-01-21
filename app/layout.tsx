import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Win88 Today - Your Gateway to Premium Gaming",
  description: "Play your way with Win88 Today. Choose instant self-serve gaming or premium VIP services. Multiple game providers, crypto payments, and 24/7 availability.",
  keywords: "online gaming, casino, slots, crypto gaming, USDT, telegram gaming, win88",
  openGraph: {
    title: "Win88 Today - Your Gateway to Premium Gaming",
    description: "Play your way with Win88 Today. Choose instant self-serve gaming or premium VIP services.",
    url: "https://win88.today",
    siteName: "Win88 Today",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Win88 Today",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Win88 Today - Your Gateway to Premium Gaming",
    description: "Play your way with Win88 Today. Choose instant self-serve gaming or premium VIP services.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
