import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rgconstructions.in"),
  title: {
    default: "RG Constructions | Premium Real Estate & Commercial Development",
    template: "%s | RG Constructions",
  },
  description:
    "Leading developers of high-end residential, commercial, and master-planned communities across India. Over four decades of trusted engineering and execution.",
  keywords: ["luxury real estate", "commercial property", "RG Constructions", "premium development India", "townships", "property investment"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rgconstructions.in",
    siteName: "RG Constructions",
    title: "RG Constructions | Premium Real Estate Development",
    description: "Leading developers of high-end residential and commercial communities across India.",
    images: [
      {
        url: "/assets/project_image_2.jpeg",
        width: 1200,
        height: 630,
        alt: "RG Constructions Euphoria Development",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-rg-light text-rg-slate selection:bg-rg-gold selection:text-white">
        <SmoothScrollProvider>
          {/* Navigation injected here */}
          <Navigation />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
