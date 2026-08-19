import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Euphoria by R.G Constructions | Luxury Apartments in Mangalagiri & Amaravati",
  description: "Euphoria by R.G Constructions offers premium 2 and 3 BHK luxury apartments located in Kondapaneni Township, Mangalagiri. Situated near the Amaravati capital region.",
};

export default function EuphoriaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
