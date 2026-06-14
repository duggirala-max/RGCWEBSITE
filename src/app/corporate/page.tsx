import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate | Investor Relations",
  description: "Corporate credentials, ESG reports, and commercial joint venture opportunities for RG Constructions.",
};

export default function CorporatePage() {
  return (
    <main className="flex-1 w-full min-h-screen pt-32 px-6 lg:px-24 pb-24">
      <Link href="/" className="inline-flex items-center gap-2 text-rg-slate/70 hover:text-rg-gold mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-5xl lg:text-7xl uppercase font-bold tracking-tight mb-8">Corporate Overview</h1>
      <p className="text-xl max-w-2xl text-rg-slate/80">
        Operating with transparency. We prioritize sustainable practices and rigid financial oversight across every development phase.
      </p>
      
      <div className="mt-16 max-w-3xl">
        <div className="p-12 border border-rg-slate/20 bg-white">
          <h2 className="text-3xl mb-4 text-rg-gold">Environmental Standards</h2>
          <p className="text-rg-slate/70 mb-8 leading-relaxed">
            Our operations currently offset 14,000 tonnes of CO2 annually. We recycle 60% of construction water across all active sites and mandate the use of low-VOC materials in 100% of our residential finishes. We are actively transitioning our heavy machinery fleet to hybrid-electric by 2028.
          </p>
          <button className="px-8 py-4 border border-rg-gold text-rg-gold font-bold tracking-widest uppercase text-sm hover:bg-rg-gold hover:text-white transition-colors">
            View ESG Policy
          </button>
        </div>
      </div>
    </main>
  );
}
