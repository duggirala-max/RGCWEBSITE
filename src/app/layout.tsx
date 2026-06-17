import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";

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
    default: "R.G Constructions | Premium Real Estate & Commercial Development",
    template: "%s | R.G Constructions",
  },
  description:
    "Leading developers of high-end residential, commercial, and master-planned communities across India. Over four decades of trusted engineering and execution.",
  keywords: ["luxury real estate", "commercial property", "R.G Constructions", "RG Constructions", "premium development India", "townships", "property investment"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rgconstructions.in",
    siteName: "R.G Constructions",
    title: "R.G Constructions | Premium Real Estate Development",
    description: "Leading developers of high-end residential and commercial communities across India.",
    images: [
      {
        url: "/assets/project_image_2.jpeg",
        width: 1200,
        height: 630,
        alt: "R.G Constructions Euphoria Development",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "R.G Constructions",
              "alternateName": "RG Constructions",
              "url": "https://rgconstructions.in"
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-rg-light text-rg-slate selection:bg-rg-gold selection:text-white">
        <SmoothScrollProvider>
          {/* Navigation injected here */}
          <Navigation />
          {children}
          <WhatsAppButton />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
