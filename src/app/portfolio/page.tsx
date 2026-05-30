import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore our premium residential and commercial developments.",
};

export default function PortfolioPage() {
  return (
    <main className="flex-1 w-full min-h-screen bg-rg-bone text-rg-slate pt-32 px-6 lg:px-24">
      <Link href="/" className="inline-flex items-center gap-2 text-rg-slate/70 hover:text-rg-gold mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-5xl lg:text-7xl font-display uppercase font-bold tracking-tight mb-8">Property Portfolio</h1>
      <p className="font-sans text-xl max-w-2xl text-rg-slate/80">
        Our curated collection of high-end residential, commercial, and master-planned communities.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* Placeholder for projects */}
        <div className="h-96 bg-rg-slate/5 border border-rg-slate/20 flex flex-col justify-end p-8 hover:bg-white transition-colors duration-500">
          <span className="text-sm font-bold tracking-widest uppercase text-rg-gold mb-2">Residential</span>
          <h3 className="text-2xl font-display">Euphoria Heights</h3>
        </div>
        <div className="h-96 bg-rg-slate/5 border border-rg-slate/20 flex flex-col justify-end p-8 hover:bg-white transition-colors duration-500">
          <span className="text-sm font-bold tracking-widest uppercase text-rg-gold mb-2">Commercial</span>
          <h3 className="text-2xl font-display">Noor Al Reef</h3>
        </div>
      </div>
    </main>
  );
}
