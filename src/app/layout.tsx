import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aerobooker | Flight & Hotel Booking Platform - Coming Soon",
  description: "Aerobooker - Your trusted partner for flight bookings and hotel reservations. We're launching soon with the best travel deals.",
  keywords: "Aerobooker, flight booking, hotel reservation, travel, air travel, vacation packages",
  openGraph: {
    title: "Aerobooker | Flight & Hotel Booking Platform",
    description: "Aerobooker - Your trusted partner for flight bookings and hotel reservations. Coming soon!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
