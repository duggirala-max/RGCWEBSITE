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

  const testimonials = [
    { text: "RG Constructions delivered our home exactly as promised. The attention to detail in the finishes and the thoughtful layout make everyday living a joy.", name: "Venkata Rao", title: "Buyer at Euphoria" },
    { text: "From the transparent booking process to the final handover, the entire experience was highly professional. The amenities provided are exactly what our family needed.", name: "Padmavathi K.", title: "Buyer" },
    { text: "The structural quality and the design of the community spaces are impressive. It feels like a secure, well-planned environment for my children to grow up in.", name: "Srinivasulu Reddy", title: "Buyer" },
    { text: "We were looking for a property that offered both privacy and connectivity. Euphoria perfectly matched our requirements. The sales team was transparent about every detail.", name: "Ramesh Babu", title: "Buyer" },
    { text: "Investing with RG Constructions was a smooth process. They strictly adhered to the timeline, and the material quality exceeded our expectations.", name: "Lakshmi Narayana", title: "Buyer" },
    { text: "The floor plans are excellent, ensuring great ventilation and natural light. It is rare to find such uncompromising quality in this specific location.", name: "Swapna V.", title: "Buyer" },
    { text: "Their legal and documentation process was very clear. I appreciated the lack of hidden charges and the straightforward communication from day one.", name: "Krishna Mohan", title: "Buyer" },
    { text: "A reliable developer with a proven track record. The neighborhood feels exclusive and the security features give us complete peace of mind.", name: "Anitha P.", title: "Buyer" }
  ];

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
          className="w-full h-full absolute inset-0"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/assets/project_image_2.jpeg"
                alt="Euphoria Project"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase mb-4"
                  >
                    Enduring <span className="text-rg-gold">Structures.</span>
                  </motion.h1>
                  <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto"
                  >
                    Developing India's most sought-after properties.
                  </motion.p>
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
            <h2 className="text-3xl lg:text-5xl text-rg-slate mb-6">
              For over forty years, RG Constructions has shaped the skyline. We view every development as a generational asset.
            </h2>
            <p className="text-lg text-rg-slate/70 max-w-3xl">
              From site acquisition to the final finish, our process relies on exact engineering and strict material standards.
            </p>
          </motion.div>

          {/* Odometer Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-rg-slate/20 pt-16">
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl text-rg-gold mb-2 flex items-baseline justify-center lg:justify-start">
                <CountUp end={40} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-4xl">+</span>
              </div>
              <h3 className="text-xl font-bold text-rg-slate mb-2">Years of Experience</h3>
              <p className="text-rg-slate/70">Operating with precision</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl text-rg-gold mb-2 flex items-baseline justify-center lg:justify-start">
                <CountUp end={120} duration={3} enableScrollSpy scrollSpyOnce />
                <span className="text-4xl">+</span>
              </div>
              <h3 className="text-xl font-bold text-rg-slate mb-2">Lac Square Feet</h3>
              <p className="text-rg-slate/70">Delivery Track Record</p>
            </div>

            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl text-rg-gold mb-2 flex items-baseline justify-center lg:justify-start">
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
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Our Approach</span>
            <h2 className="text-4xl lg:text-5xl text-rg-slate">The Art of Execution</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl text-rg-gold mb-4">Engineering</h3>
              <p className="text-rg-slate/80 leading-relaxed text-justify">
                Our developments are defined by rigorous engineering and superior materials. We partner with master architects to deliver structures of enduring value.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl text-rg-gold mb-4">Architecture</h3>
              <p className="text-rg-slate/80 leading-relaxed text-justify">
                We design with intention. Clean lines, abundant natural light, and thoughtful layouts create spaces that feel both expansive and intimately personal.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl text-rg-gold mb-4">Master Planning</h3>
              <p className="text-rg-slate/80 leading-relaxed text-justify">
                We build private communities that offer sanctuary from the city. Featuring expansive green spaces and bespoke amenities, they provide a secure, elevated living experience.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-2xl text-rg-gold mb-4">Execution</h3>
              <p className="text-rg-slate/80 leading-relaxed text-justify">
                Real estate is built on trust. With over 12 million square feet delivered, our reputation is rooted in transparency and honoring our commitments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-24 bg-rg-light">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Our Portfolio</span>
            <h2 className="text-4xl lg:text-5xl text-rg-slate">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/projects" className="group block">
              <div className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src="/assets/project_image_2.jpeg"
                    alt="Euphoria Project"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold tracking-widest uppercase text-rg-slate">
                    Nearing Possession
                  </div>
                </div>
                <div className="p-8 border border-t-0 border-rg-slate/10">
                  <h3 className="text-2xl text-rg-slate mb-2 group-hover:text-rg-gold transition-colors">Euphoria</h3>
                  <p className="text-rg-slate/70 mb-4">Kondapaneni Township, Mangalagiri</p>
                  <div className="flex items-center justify-between text-sm font-bold text-rg-slate uppercase tracking-widest">
                    <span>Explore Project</span>
                    <span className="text-rg-gold">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="text-rg-gold tracking-widest uppercase text-sm font-bold mb-4 block">Client Perspectives</span>
            <h2 className="text-4xl lg:text-5xl text-rg-slate">Trusted by Buyers</h2>
          </div>

          <div className="w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="w-full pb-16"
            >
              {testimonials.map((testimonial, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="h-full bg-rg-light p-8 flex flex-col justify-between border border-rg-slate/10">
                    <p className="text-rg-slate/80 leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h4 className="font-bold text-rg-slate">{testimonial.name}</h4>
                      <p className="text-rg-gold text-sm uppercase tracking-widest mt-1">{testimonial.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

    </main>
  );
}
