"use client";

import { Hero } from "@/components/Hero";
import { Menù } from "@/components/Menù";
import { ImageCarousel } from "@/components/ImageCarousel";
import { Navbar } from "@/components/Navbar";
import { WhoWeAre } from "@/components/WhoWeAre";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Footer } from "@/components/Footer";
import { OpeningHours } from "@/components/OpeningHours";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0]);

  return (
    <>
      <main>
        <Navbar />
        {/* Contenitore per l'effetto di scorrimento, alto 2 volte lo schermo */}
        <div ref={containerRef} className="relative h-[200vh] w-full">
          {/* L'Hero è posizionato in modo relativo e sopra tutto il resto (z-20) */}
          <motion.div style={{ opacity: heroOpacity }} className="absolute z-20 w-full">
            <Hero />
          </motion.div>
          {/* Il Carosello è "sticky" e rimane fisso mentre si scorre, con uno z-index inferiore (z-10) */}
          <div className="sticky w-[90vw] top-0 z-10 h-screen w-full">
            <div className="flex h-full items-center justify-center">
              <ImageCarousel />
            </div>
          </div>
        </div>
        <div className="relative z-30 bg-background">
          <WhoWeAre />
          <Menù />
          <OpeningHours />
          <Footer />
        </div>
      </main>
    </>
   );
}