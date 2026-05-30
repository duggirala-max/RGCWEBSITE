"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import CountUp from "react-countup";
import { motion, Variants } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="w-full min-h-screen bg-rg-light">
      {/* Hero Swiper Section */}
      <section className="relative h-screen w-full">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/assets/project_image_2.jpeg"
                alt="Euphoria Project"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase mb-4"
                  >
                    Future <span className="text-rg-gold">Ready</span>
                  </motion.h1>
                  <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-lg md:text-2xl font-sans mb-8 max-w-2xl mx-auto"
                  >
                    We build ambient living spaces for families.
                  </motion.p>
                  <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                    <Link
                      href="/about"
                      className="inline-block bg-white text-rg-slate px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-rg-gold hover:text-white transition-colors"
                    >
                      Discover RG Constructions
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Intro & Statistics Section */}
      <section className="py-24 px-6 lg:px-24 bg-rg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="mb-20 text-center lg:text-left"
          >
            <h2 className="text-3xl lg:text-5xl font-display text-rg-slate mb-6">
              At RG Constructions, we are on a continuous quest to find a better way to build neighborhoods that truly enhance the quality of life.
            </h2>
            <p className="text-lg text-rg-slate/70 max-w-3xl font-sans">
              Our unending passion towards innovation, aesthetics, and lifestyle quotient helps us in creating new benchmarks in design for our clients.
            </p>
          </motion.div>

          {/* Odometer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-rg-slate/20 pt-16">
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl font-display text-rg-gold mb-2 flex items-baseline justify-center lg:justify-start">
                <CountUp end={40} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-4xl">+</span>
              </div>
              <h3 className="text-xl font-bold text-rg-slate mb-2">Years of Experience</h3>
              <p className="text-rg-slate/70">Driven with passion</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl font-display text-rg-gold mb-2 flex items-baseline justify-center lg:justify-start">
                <CountUp end={120} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-4xl">+</span>
              </div>
              <h3 className="text-xl font-bold text-rg-slate mb-2">Lac Square Feet</h3>
              <p className="text-rg-slate/70">Delivery Track Record</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl font-display text-rg-gold mb-2 flex items-baseline justify-center lg:justify-start">
                <CountUp end={60} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-4xl">+</span>
              </div>
              <h3 className="text-xl font-bold text-rg-slate mb-2">Lac Square Feet</h3>
              <p className="text-rg-slate/70">Projects under construction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Our Expertise</span>
            <h2 className="text-4xl lg:text-5xl font-display text-rg-slate">Quality & Passion</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-display text-rg-gold mb-4">Quality Construction</h3>
              <p className="text-rg-slate/80 font-sans leading-relaxed text-justify">
                We focus on delivering high-quality, sustainable construction with an emphasis on precision and durability. We use top-tier materials and cutting-edge technology to ensure every project stands the test of time.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-display text-rg-gold mb-4">Innovative Design</h3>
              <p className="text-rg-slate/80 font-sans leading-relaxed text-justify">
                We pride ourselves on creating innovative architectural designs that blend functionality with modern aesthetics. Our residential and commercial spaces are carefully planned to offer both comfort and style.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-display text-rg-gold mb-4">Luxury Gated Communities</h3>
              <p className="text-rg-slate/80 font-sans leading-relaxed text-justify">
                We specialize in crafting exclusive gated communities that offer residents a secure and family-friendly environment. Designed with world-class amenities, our communities promote safety, convenience, and a harmonious lifestyle.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl font-display text-rg-gold mb-4">Timely Project Delivery</h3>
              <p className="text-rg-slate/80 font-sans leading-relaxed text-justify">
                We understand the importance of delivering projects on time. With a proven track record, we have established ourselves as a reliable construction company, ensuring client expectations are consistently met.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
