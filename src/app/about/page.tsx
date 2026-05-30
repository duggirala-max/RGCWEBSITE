"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function AboutPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="w-full min-h-screen bg-rg-light pt-32 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-20 text-center lg:text-left"
        >
          <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Who we are</span>
          <h1 className="text-5xl lg:text-7xl font-display text-rg-slate mb-8">
            Decades of Construction <br/>Excellence
          </h1>
        </motion.div>

        {/* Legacy Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 lg:order-1"
          >
            <p className="text-rg-slate/80 font-sans leading-relaxed text-justify mb-6">
              Founded over four decades ago, RG Constructions was born out of a passion to create spaces that elevate urban living. With a deep commitment to design excellence and engineering precision, we have grown into a name synonymous with quality and trust in the real estate landscape. 
            </p>
            <p className="text-rg-slate/80 font-sans leading-relaxed text-justify">
              As one of the premium builders for gated community projects, our developments stand as a testimony to thoughtful planning, contemporary aesthetics, and uncompromising quality. Over the years, RG Constructions has shaped some of the city's most iconic neighborhoods and continues to set benchmarks in luxury residential and commercial development.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-1 lg:order-2 relative h-[500px] w-full"
          >
            <Image
              src="/assets/project_image_6.jpeg"
              alt="Legacy and Foundation"
              fill
              className="object-cover rounded-sm shadow-xl"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Leadership */}
        <section className="border-t border-rg-slate/20 pt-20 mb-32">
          <div className="mb-16">
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Leadership</span>
            <h2 className="text-4xl lg:text-5xl font-display text-rg-slate">Board of Directors</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-display text-rg-slate mb-2">Visionary Leadership</h3>
                <p className="text-rg-gold uppercase text-sm font-bold tracking-widest mb-6">Managing Directors</p>
                <p className="text-rg-slate/70 font-sans">
                  Our board brings together decades of deep industry expertise, driving the vision that keeps RG Constructions at the forefront of the real estate market.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
}
