import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Luxury Apartments in Mangalagiri & Amaravati - R.G Constructions",
  },
  description:
    "Discover luxury apartments in Mangalagiri & Amaravati by RG Constructions, offering modern designs, premium amenities, and comfortable living spaces.",
  keywords: [
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
    "best luxury flats in amaravati",
  ],
};

export default function EuphoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
