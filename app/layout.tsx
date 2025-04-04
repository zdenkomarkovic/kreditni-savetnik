import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  title: "Kreditni Savetnik – Stručna Pomoć pri Odabiru Kredita",
  description:
    " Pronađite najbolji kredit uz pomoć iskusnog kreditnog savetnika. Pružamo savete i analize za stambene, keš i refinansirajuće kredite.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "kreditni savetnik",
    "krediti",
    "kreditna analiza",
    "keš krediti",
    "stambeni krediti",
    "refinansiranje",
    "najbolji kredit",
    "saveti za kredite",
    "kreditne usluge",
    "kreditni broker",
  ],
  alternates: {
    canonical: "https://www.kreditnisavetniksrbija.rs/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-muted-foreground bg-muted`}
      >
        <Header />
        {children}
        <ButtonToTop />
        <Footer />
      </body>
    </html>
  );
}
