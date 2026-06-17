"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ExternalLink } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 mr-2"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-rg-slate/80 backdrop-blur-xs"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg overflow-hidden bg-white shadow-2xl border border-rg-gold/20 p-8 md:p-10 text-rg-slate"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-rg-slate/50 hover:text-rg-gold transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="mb-6">
              <h2 className="text-xl font-display uppercase tracking-widest text-rg-slate">
                Contact Details
              </h2>
              <div className="h-[2px] w-16 bg-rg-gold mt-2"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-rg-light text-rg-gold border border-rg-gold/15">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-xs uppercase tracking-wider text-rg-gold font-sans">
                    Office Address
                  </h3>
                  <p className="text-base text-rg-slate leading-relaxed font-sans">
                    Road No. 6, Kondapaneni Township,<br />
                    Vijayawada – Guntur Expressway NH5,<br />
                    Mangalagiri – 522503
                  </p>
                  <p className="text-xs text-rg-slate/60 leading-relaxed font-sans pt-1">
                    <span className="font-semibold text-rg-slate/85">Landmark:</span> Near Mangalagiri – Tenali Flyover | Next to BP Petrol Bunk
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=R.G.+CONSTRUCTIONS%2C+Kondapaneni+Township%2C+Vijayawada+%E2%80%93+Guntur+Expressway+NH5%2C+Mangalagiri+%E2%80%93+522503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3.5 border border-rg-gold text-rg-gold hover:bg-rg-gold hover:text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer"
                >
                  Get Directions
                  <ExternalLink className="h-3.5 w-3.5 ml-2" />
                </a>

                <a
                  href="https://wa.me/919488149966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3.5 bg-[#25D366] text-white hover:bg-[#20ba5a] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
