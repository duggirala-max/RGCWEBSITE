"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  CheckCircle2,
  MapPin,
  Car,
  PhoneCall,
  Zap,
  Leaf,
  Shield,
  Sun,
  Activity,
  Trees,
} from "lucide-react";

export default function EuphoriaProjectPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const amenities = [
    { name: "Multipurpose Hall", icon: <Activity className="w-6 h-6 text-rg-gold" /> },
    { name: "Gym", icon: <Activity className="w-6 h-6 text-rg-gold" /> },
    { name: "Table Tennis", icon: <Activity className="w-6 h-6 text-rg-gold" /> },
    { name: "Ample Car Parking", icon: <Car className="w-6 h-6 text-rg-gold" /> },
    { name: "Intercom Facility", icon: <PhoneCall className="w-6 h-6 text-rg-gold" /> },
    { name: "Power Backup", icon: <Zap className="w-6 h-6 text-rg-gold" /> },
    { name: "Invertor/Generator", icon: <Zap className="w-6 h-6 text-rg-gold" /> },
    { name: "Exquisite Landscaping", icon: <Trees className="w-6 h-6 text-rg-gold" /> },
    { name: "Round the Clock Security", icon: <Shield className="w-6 h-6 text-rg-gold" /> },
    { name: "Solar Power Backup", icon: <Sun className="w-6 h-6 text-rg-gold" /> },
  ];

  const specifications = [
    { category: "Main Door", description: "Teak wood frame & designed shutters with melamine Polish. Aesthetically designed with good quality hardware." },
    { category: "Internal Doors", description: "Teak/Engineered wood door frame and good quality flush shutter." },
    { category: "Windows", description: "UPVC or Aluminum openable / Sliding windows with glass & safety grills." },
    { category: "Flooring", description: "Vitrified Tiles (24x24 or 800x1600 mm) by Johnson/RAK/Somany in living areas. Anti-skid ceramic tiles in balconies & toilets." },
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
    "Very Close to Universities Like VIT, SRM, KLU and ANU.",
  ];

  return (
    <main className="w-full min-h-screen bg-rg-light pb-24">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/project_image_2.jpeg"
            alt="Euphoria Project Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-display font-bold text-white mb-6 tracking-wide"
          >
            EUPHORIA
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-xl md:text-3xl text-rg-gold font-sans uppercase tracking-widest mb-10"
          >
            Where Luxury Meets Lifestyle
          </motion.p>
            <a
              href="https://wa.me/919488149966"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rg-gold text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-rg-slate transition-colors"
            >
              Contact Us
            </a>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* 2. About Section */}
        <section className="py-24 border-b border-rg-slate/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">About The Project</span>
              <h2 className="text-4xl lg:text-5xl font-display text-rg-slate mb-6">Boutique Living Experience</h2>
              <p className="text-lg text-rg-slate/70 font-sans leading-relaxed mb-6">
                Established by <strong>RG Constructions</strong>, Euphoria is a prestigious new development consisting of <strong>116 luxury flats</strong>. We strive to provide our customers from different backgrounds an experience of luxury that will no longer be a dream.
              </p>
              <p className="text-lg text-rg-slate/70 font-sans leading-relaxed">
                Located perfectly at Kondapaneni Township, Near Tenali Flyover, Off National Highways, Mangalagiri, Euphoria seamlessly balances tranquility with excellent urban connectivity.
              </p>
            </div>
            <div className="relative h-96 w-full">
              <Image
                src="/assets/project_image_2.jpeg"
                alt="Euphoria Project View"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
            </div>
          </motion.div>
        </section>

        {/* 3. Configurations / Floor Plans */}
        <section className="py-24 border-b border-rg-slate/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Floor Plans</span>
            <h2 className="text-4xl lg:text-5xl font-display text-rg-slate">Stunning Configurations</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 3 BHK Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-rg-slate/10 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl font-display text-rg-slate">3 BHK</h3>
                    <p className="text-rg-slate/60 font-sans uppercase tracking-widest text-sm mt-1">Nearing Possession</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-display text-rg-gold">1939</p>
                    <p className="text-rg-slate/60 font-sans text-sm">Sq.ft</p>
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
                <p className="text-rg-slate/80 font-sans">Available in East & West Facing configurations.</p>
                <a 
                  href="https://wa.me/919488149966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full mt-8 bg-rg-slate text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-rg-gold transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>

            {/* 2 BHK Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-white border border-rg-slate/10 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8 lg:p-12">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-3xl font-display text-rg-slate">2 BHK</h3>
                    <p className="text-rg-slate/60 font-sans uppercase tracking-widest text-sm mt-1">Nearing Possession</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-display text-rg-gold">1368</p>
                    <p className="text-rg-slate/60 font-sans text-sm">Sq.ft</p>
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
                <p className="text-rg-slate/80 font-sans">Available in East & West Facing configurations.</p>
                <a 
                  href="https://wa.me/919488149966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full mt-8 bg-rg-slate text-white py-4 uppercase tracking-widest text-sm font-bold hover:bg-rg-gold transition-colors"
                >
                  Enquire Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Amenities */}
        <section className="py-24 border-b border-rg-slate/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Premium Lifestyle</span>
            <h2 className="text-4xl lg:text-5xl font-display text-rg-slate">World Class Amenities</h2>
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
                <h4 className="font-bold text-rg-slate font-sans text-sm">{amenity.name}</h4>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Specifications */}
        <section className="py-24 border-b border-rg-slate/10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Project Details</span>
            <h2 className="text-4xl lg:text-5xl font-display text-rg-slate">Specifications</h2>
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
                  <p className="text-rg-slate/70 font-sans text-sm leading-relaxed">{spec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. Location Highlights */}
        <section className="py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-3 gap-16"
          >
            <div className="lg:col-span-1">
              <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Advantages</span>
              <h2 className="text-4xl lg:text-5xl font-display text-rg-slate mb-6">Location Highlights</h2>
              <p className="text-rg-slate/70 font-sans mb-8">
                Nestled in the emerging Kondapaneni Township, Euphoria is strategically located offering quick access to major hubs, hospitals, and educational institutions.
              </p>
              <div className="bg-white p-6 border border-rg-slate/10 border-l-4 border-l-rg-gold">
                <p className="font-bold text-rg-slate font-sans">Mangalagiri, Near Tenali Flyover</p>
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
                  <p className="text-rg-slate/80 font-sans text-sm leading-relaxed">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}
