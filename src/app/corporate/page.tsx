import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate | Investor Relations",
  description: "Corporate credentials, ESG reports, and commercial joint venture opportunities for RG Constructions.",
};

export default function CorporatePage() {
  return (
    <main className="flex-1 w-full min-h-screen bg-rg-slate text-rg-bone pt-32 px-6 lg:px-24">
      <Link href="/" className="inline-flex items-center gap-2 text-rg-bone/70 hover:text-rg-gold mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-5xl lg:text-7xl font-display uppercase font-bold tracking-tight mb-8">Corporate Relations</h1>
      <p className="font-sans text-xl max-w-2xl text-rg-bone/80">
        Committed to environmental, social, and governance (ESG) standards across our portfolio.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <div className="p-12 border border-rg-bone/20 bg-white/5">
          <h2 className="text-3xl font-display mb-4 text-rg-gold">Investor Data</h2>
          <p className="font-sans text-rg-bone/70 mb-8">Access our annual reports and financial stability metrics.</p>
          <button className="px-8 py-4 bg-rg-gold text-white font-bold tracking-widest uppercase text-sm hover:bg-white hover:text-rg-slate transition-colors">
            Download Report
          </button>
        </div>
        
        <div className="p-12 border border-rg-bone/20 bg-white/5">
          <h2 className="text-3xl font-display mb-4 text-rg-gold">ESG Initiatives</h2>
          <p className="font-sans text-rg-bone/70 mb-8">Our biophilic design principles and sustainability goals for 2030.</p>
          <button className="px-8 py-4 border border-rg-gold text-rg-gold font-bold tracking-widest uppercase text-sm hover:bg-rg-gold hover:text-white transition-colors">
            View ESG Policy
          </button>
        </div>
      </div>
    </main>
  );
}
