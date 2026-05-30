"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ProjectsPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const amenities = [
    "Multipurpose Hall",
    "Gym",
    "Table Tennis",
    "Ample Car Parking",
    "Intercom Facility",
    "Power Backup",
    "Exquisite Landscaping",
    "Round the Clock Security",
    "Solar Power Backup",
  ];

  return (
    <main className="w-full min-h-screen bg-rg-light pt-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto mb-32">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-16 text-center lg:text-left"
        >
          <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Our Projects</span>
          <h1 className="text-5xl lg:text-7xl font-display text-rg-slate mb-4">
            Euphoria
          </h1>
          <p className="text-xl text-rg-slate/70 font-sans max-w-2xl">
            Where Luxury Meets Lifestyle.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative w-full h-[60vh] mb-16"
        >
          <Image
            src="/assets/project_image_2.jpeg"
            alt="Euphoria Project"
            fill
            className="object-cover rounded-sm shadow-xl"
          />
        </motion.div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1 lg:col-span-2"
          >
            <h2 className="text-3xl font-display text-rg-slate mb-6">About The Project</h2>
            <p className="text-rg-slate/80 font-sans leading-relaxed text-justify mb-8">
              Euphoria is our flagship residential community located at Kondapaneni Township, near the Tenali Flyover, off the National Highways in Mangalagiri. Designed with meticulous attention to detail, it features premium amenities and unparalleled connectivity to major landmarks.
            </p>

            <h3 className="text-2xl font-display text-rg-slate mb-4 mt-12">Location Highlights</h3>
            <ul className="space-y-4 font-sans text-rg-slate/80 mb-12">
              <li className="flex items-start gap-3">
                <span className="text-rg-gold mt-1">•</span>
                10 minutes from AP Capital - Amaravati.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rg-gold mt-1">•</span>
                5 minutes away from Hospitals (AIIMS, NRI) and 10 minutes from Manipal.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rg-gold mt-1">•</span>
                1 minute (500m) to NH16 Guntur Vijayawada Expressway.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-rg-gold mt-1">•</span>
                20 minutes to Vijayawada Bus Stand and Railway Station.
              </li>
            </ul>

            <h3 className="text-2xl font-display text-rg-slate mb-4 mt-12">Floor Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 border border-rg-slate/10">
                <h4 className="font-bold text-rg-slate text-xl mb-2">3 BHK</h4>
                <p className="text-rg-gold font-bold mb-4">1939 Sq.ft</p>
                <p className="text-sm text-rg-slate/70">Available in East & West Facing configurations.</p>
              </div>
              <div className="bg-white p-6 border border-rg-slate/10">
                <h4 className="font-bold text-rg-slate text-xl mb-2">2 BHK</h4>
                <p className="text-rg-gold font-bold mb-4">1368 Sq.ft</p>
                <p className="text-sm text-rg-slate/70">Available in East & West Facing configurations.</p>
              </div>
            </div>
          </motion.div>

          {/* Amenities Sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="col-span-1"
          >
            <div className="bg-white p-8 shadow-sm border border-rg-slate/5 sticky top-32">
              <h3 className="text-2xl font-display text-rg-slate mb-8">Amenities</h3>
              <ul className="space-y-4">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-3 font-sans text-rg-slate/80">
                    <CheckCircle2 className="w-5 h-5 text-rg-gold flex-shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/919488149966"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-12 bg-[#25D366] text-white px-6 py-4 flex items-center justify-center gap-3 uppercase tracking-widest text-sm font-bold hover:bg-[#1DA851] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                +91 94881 49966
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </main>
  );
}
