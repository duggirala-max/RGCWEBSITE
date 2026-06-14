"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  Car,
  PhoneCall,
  Zap,
  Shield,
  Sun,
  Trees,
  Users,
  Dumbbell,
  Trophy,
  Battery,
  X
} from "lucide-react";

export default function EuphoriaProjectPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBhk, setSelectedBhk] = useState<"2" | "3">("2");
  const [selectedFacing, setSelectedFacing] = useState<"East" | "West">("East");
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "configuration", "amenities", "specifications", "location"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const amenities = [
    { name: "Multipurpose Hall", icon: <Users className="w-6 h-6 text-rg-gold" /> },
    { name: "Gym", icon: <Dumbbell className="w-6 h-6 text-rg-gold" /> },
    { name: "Table Tennis", icon: <Trophy className="w-6 h-6 text-rg-gold" /> },
    { name: "Ample Car Parking", icon: <Car className="w-6 h-6 text-rg-gold" /> },
    { name: "Intercom Facility", icon: <PhoneCall className="w-6 h-6 text-rg-gold" /> },
    { name: "Power Backup", icon: <Zap className="w-6 h-6 text-rg-gold" /> },
    { name: "Invertor/Generator", icon: <Battery className="w-6 h-6 text-rg-gold" /> },
    { name: "Exquisite Landscaping", icon: <Trees className="w-6 h-6 text-rg-gold" /> },
    { name: "Round the Clock Security", icon: <Shield className="w-6 h-6 text-rg-gold" /> },
    { name: "Solar Power Backup", icon: <Sun className="w-6 h-6 text-rg-gold" /> },
  ];

  const specifications = [
    { category: "Main Door", description: "Teak wood frame & designed shutters with melamine Polish. Aesthetically designed with good quality hardware." },
    { category: "Internal Doors", description: "Teak/Engineered wood door frame and good quality flush shutter." },
    { category: "Windows", description: "UPVC or Aluminum openable / Sliding windows with glass & safety grills." },
    { category: "Flooring", description: "Vitrified Tiles ( 2 x 2 or 2 x 4 ) by Johnson/RAK/Somany in living areas. Anti-skid ceramic tiles in balconies & toilets." },
    { category: "Corridors", description: "Granite / Marble flooring with SS hand Railing." },
    { category: "Kitchen", description: "Polished Granite Slab with Stainless Steel Sink. Provision for water purifier." },
    { category: "Sanitary Ware", description: "EWC's & Wash basin by Cera / Hindware / Parryware or Equivalent." },
    { category: "Painting", description: "External walls 2mm finish. Asian paints, Nerolac, Nexon or Equivalent." },
  ];

  const locationHighlights = [
    "10 minutes from AP CAPITAL-AMARAVATI.",
    "5 minutes away from Hospitals (AIIMS, NRI) and 10 minutes from Manipal.",
    "5 minutes to AP Police Head Quarters.",
    "1 minute (500 m) to NH16 Guntur Vijayawada Expressway.",
    "20 minutes (14 Km) to Vijayawada Bus Stand and Rail Station.",
    "Very Close to Universities Like VIT, SRM, AMRITA, KLU and ANU.",
  ];

  const openFloorPlan = (bhk: "2" | "3") => {
    setSelectedBhk(bhk);
    setSelectedFacing("East");
    setModalOpen(true);
  };

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "configuration", label: "Configuration" },
    { id: "amenities", label: "Highlights" },
    { id: "specifications", label: "Specs" },
    { id: "location", label: "Location" },
  ];

  return (
    <main className="w-full min-h-screen bg-rg-light pb-24">
      {/* Floating Enquire Button (Desktop) */}
      <a 
        href="https://wa.me/919488149966"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-1/3 right-0 z-50 bg-rg-gold text-white py-4 px-2 hover:bg-rg-slate transition-colors shadow-lg hidden md:block"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        <span className="font-bold tracking-widest uppercase text-sm">Download Brochure</span>
      </a>

      {/* Mobile Fixed Bottom Contact Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-rg-gold shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
        <a 
          href="https://wa.me/919488149966"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-white py-5 font-bold tracking-widest uppercase text-sm"
        >
          Download Brochure
        </a>
      </div>

      {/* 1. Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/project_image_2.jpeg"
            alt="Euphoria Project Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-white uppercase mb-4 leading-tight tracking-wide drop-shadow-2xl"
          >
            Euphoria
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-sm md:text-xl text-rg-gold font-medium uppercase tracking-[0.3em] mb-10 drop-shadow-md"
          >
            Mangalagiri, Gateway to Amaravati
          </motion.p>
        </div>
      </section>

      {/* Sticky Sub-Navigation */}
      <div className="sticky top-[72px] lg:top-[88px] z-40 w-full bg-white border-b border-rg-slate/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ul className="flex items-center lg:justify-center gap-8 py-4 overflow-x-auto whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button 
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                    activeSection === link.id ? "text-rg-gold" : "text-rg-slate/60 hover:text-rg-slate"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12">
        {/* 2. About Section */}
        <section id="overview" className="py-24 border-b border-rg-slate/10 scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Overview</span>
              <h2 className="text-4xl lg:text-5xl text-rg-slate mb-6">A Private Reserve.</h2>
              <p className="text-lg text-rg-slate/70 leading-relaxed mb-6">
                Euphoria is a collection of <strong>116 private residences</strong> in Kondapaneni Township. Designed strictly for privacy and space, it provides a quiet retreat within the city limits.
              </p>
              <p className="text-lg text-rg-slate/70 leading-relaxed">
                Situated just off the NH16 Expressway, Euphoria provides immediate access to the capital district while maintaining strict perimeter privacy.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/assets/project_image_2.jpeg"
                alt="Euphoria Project View"
                fill
                className="object-cover object-center rounded-sm shadow-xl"
              />
            </div>
          </motion.div>
        </section>

        {/* 3. Configurations / Floor Plans */}
        <section id="configuration" className="py-24 border-b border-rg-slate/10 scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Floor Plans</span>
            <h2 className="text-4xl lg:text-5xl text-rg-slate">Configurations</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 3 BHK Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-rg-slate/10 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-8 lg:p-12 flex-1">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl text-rg-slate">3 BHK</h3>
                    <p className="text-rg-slate/60 uppercase tracking-widest text-sm mt-1">Premium Residences</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl text-rg-gold">1939</p>
                    <p className="text-rg-slate/60 text-sm">Sq.ft</p>
                  </div>
                </div>
                <div className="flex gap-6 border-y border-rg-slate/10 py-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-rg-slate">3</span>
                    <span className="text-sm text-rg-slate/60 uppercase tracking-widest">Rooms</span>
                  </div>
                  <div className="flex flex-col border-l border-rg-slate/10 pl-6">
                    <span className="text-2xl font-bold text-rg-slate">3</span>
                    <span className="text-sm text-rg-slate/60 uppercase tracking-widest">Baths</span>
                  </div>
                </div>
                <p className="text-rg-slate/80">Available in East & West Facing configurations.</p>
              </div>
              <button 
                onClick={() => openFloorPlan("3")}
                className="w-full bg-rg-slate text-white py-6 uppercase tracking-widest text-sm font-bold hover:bg-rg-gold transition-colors mt-auto"
              >
                View Floor Plan
              </button>
            </motion.div>

            {/* 2 BHK Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-rg-slate/10 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="p-8 lg:p-12 flex-1">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl text-rg-slate">2 BHK</h3>
                    <p className="text-rg-slate/60 uppercase tracking-widest text-sm mt-1">Premium Residences</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl text-rg-gold">1368</p>
                    <p className="text-rg-slate/60 text-sm">Sq.ft</p>
                  </div>
                </div>
                <div className="flex gap-6 border-y border-rg-slate/10 py-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-rg-slate">2</span>
                    <span className="text-sm text-rg-slate/60 uppercase tracking-widest">Rooms</span>
                  </div>
                  <div className="flex flex-col border-l border-rg-slate/10 pl-6">
                    <span className="text-2xl font-bold text-rg-slate">2</span>
                    <span className="text-sm text-rg-slate/60 uppercase tracking-widest">Baths</span>
                  </div>
                </div>
                <p className="text-rg-slate/80">Available in East & West Facing configurations.</p>
              </div>
              <button 
                onClick={() => openFloorPlan("2")}
                className="w-full bg-rg-slate text-white py-6 uppercase tracking-widest text-sm font-bold hover:bg-rg-gold transition-colors mt-auto"
              >
                View Floor Plan
              </button>
            </motion.div>
          </div>
        </section>

        {/* 4. Amenities */}
        <section id="amenities" className="py-24 border-b border-rg-slate/10 scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Highlights</span>
            <h2 className="text-4xl lg:text-5xl text-rg-slate">Designed for Leisure</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {amenities.map((amenity, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: idx * 0.1 } },
                }}
                className="bg-white p-6 border border-rg-slate/10 flex flex-col items-center text-center gap-4 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-rg-light flex items-center justify-center">
                  {amenity.icon}
                </div>
                <h4 className="font-bold text-rg-slate text-sm">{amenity.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Specifications */}
        <section id="specifications" className="py-24 border-b border-rg-slate/10 scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Project Details</span>
            <h2 className="text-4xl lg:text-5xl text-rg-slate">Specifications</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {specifications.map((spec, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-rg-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-rg-slate text-lg mb-2">{spec.category}</h4>
                  <p className="text-rg-slate/70 text-sm leading-relaxed">{spec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Location Highlights */}
        <section id="location" className="py-24 scroll-mt-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-3 gap-16"
          >
            <div className="lg:col-span-1">
              <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Advantages</span>
              <h2 className="text-4xl lg:text-5xl text-rg-slate mb-6">Location Highlights</h2>
              <p className="text-rg-slate/70 mb-8">
                Nestled in the emerging Kondapaneni Township, Euphoria is strategically located offering quick access to major hubs, hospitals, and educational institutions.
              </p>
              <div className="bg-white p-6 border border-rg-slate/10 border-l-4 border-l-rg-gold">
                <p className="font-bold text-rg-slate">Mangalagiri, Near Tenali Flyover</p>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {locationHighlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { delay: idx * 0.1 } },
                  }}
                  className="flex items-start gap-4 p-6 bg-white border border-rg-slate/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <MapPin className="w-6 h-6 text-rg-gold flex-shrink-0" />
                  <p className="text-rg-slate/80 text-sm leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* Floor Plan Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-rg-slate w-full max-w-5xl max-h-[90vh] flex flex-col rounded-sm overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <h3 className="text-2xl text-white font-bold">{selectedBhk} BHK Floor Plan</h3>
                <button onClick={() => setModalOpen(false)} className="text-white/70 hover:text-white transition-colors">
                  <X className="w-8 h-8" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="flex-1 overflow-auto p-6 bg-black">
                {/* Toggles */}
                <div className="flex justify-center gap-4 mb-8">
                  <button 
                    onClick={() => setSelectedFacing("East")}
                    className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${selectedFacing === "East" ? "bg-rg-gold text-white" : "border border-white/20 text-white/70 hover:text-white"}`}
                  >
                    East Facing
                  </button>
                  <button 
                    onClick={() => setSelectedFacing("West")}
                    className={`px-8 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${selectedFacing === "West" ? "bg-rg-gold text-white" : "border border-white/20 text-white/70 hover:text-white"}`}
                  >
                    West Facing
                  </button>
                </div>

                {/* Floor Plan Image Viewer */}
                <div className="relative w-full aspect-square md:aspect-video bg-white/5 rounded-sm border border-white/10 flex items-center justify-center p-4">
                  <Image 
                    src={`/${selectedFacing} Facing floor plan ${selectedBhk}BHK.jpg`} 
                    alt={`${selectedFacing} Facing ${selectedBhk} BHK Floor Plan`}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
