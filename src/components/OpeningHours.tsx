"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const openingHoursVariants = {
  hidden: { opacity: 0, y: 50 }, //indica di quanto deve spostarsi e l'opacità iniziale
  visible: { opacity: 1, y: 0 },
};


export function OpeningHours() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animazione si attiva una sola volta
    threshold: 0.1, // Percentuale di visibilità per attivare l'animazione
  });

  const hours = [
    { day: "Lunedì", time: "12:00 - 22:00" },
    { day: "Martedì", time: "12:00 - 22:00" },
    { day: "Mercoledì", time: "12:00 - 22:00" },
    { day: "Giovedì", time: "12:00 - 22:00" },
    { day: "Venerdì", time: "12:00 - 23:00" },
    { day: "Sabato", time: "12:00 - 23:00" },
    { day: "Domenica", time: "Chiuso" },
  ];

  return (
    <motion.div 
        ref={ref} 
        variants={openingHoursVariants} 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"}
        transition={{duration: 0.8, ease: "easeOut"}}
        className="w-full flex justify-center mb-30"
      >
      <Card className="w-full max-w-md p-4 bg-secondary text-secondary-foreground shadow-lg">
        <CardContent>
          <h2 className="font-bold italic text-lg mb-4">Orari di Apertura</h2>
        <ul className="space-y-2">
          {hours.map((hour) => (
            <li key={hour.day}>
              <span className="font-semibold">{hour.day}:</span> {hour.time}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
    </motion.div>
  );
}