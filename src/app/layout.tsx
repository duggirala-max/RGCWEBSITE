import type { Metadata } from "next";
import Script from "next/script";
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
    "Leading developers of high-end residential, commercial, and master-planned communities across India. Discover Euphoria near Mangalagiri and Amaravati with 4+ decades of trusted engineering.",
  keywords: [
    "luxury real estate",
    "commercial property",
    "R.G Constructions",
    "RG Constructions",
    "premium development India",
    "townships",
    "property investment",
    "Euphoria Amaravati",
    "Euphoria Mangalagiri",
    "Euphoria R.G Constructions",
    "luxury apartments Mangalagiri",
    "flats in Amaravati",
    "2 & 3 bhk apartments in amaravati",
    "2 bhk apartments in amaravati",
    "3 bhk apartments in amaravati",
    "2 bhk flats in amaravati",
    "3 bhk flats in amaravati",
    "luxury 2 bhk flats in amaravati",
    "luxury 3 bhk flats in amaravati",
    "luxury 2 bhk apartments in amaravati",
    "luxury 3 bhk apartments in amaravati",
    "premium luxury apartments in amaravati",
    "best luxury apartments in amaravati",
    "high rise apartments in amaravati",
    "best residential apartments in amaravati",
    "gated communities in amaravati",
    "premium 2 & 3 bhk apartments in amaravati",
    "best luxury flats in amaravati"
  ],
  verification: {
    google: "zwWQoi8Qh_MfmTXJqvV410BcaJcPcUPqbAlJEq7oxuY",
  },
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
        {/* Website Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "R.G Constructions",
              alternateName: "RG Constructions",
              url: "https://rgconstructions.in",
            }),
          }}
        />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N7W3H2WM');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-rg-light text-rg-slate selection:bg-rg-gold selection:text-white">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7W3H2WM"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>
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
