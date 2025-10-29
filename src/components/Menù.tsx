"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent} from "./ui/card";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
 
// Varianti per il contenitore per animare i figli a cascata
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Applica un ritardo tra l'animazione di ogni figlio
    },
  },
};

// Varianti per ogni singolo elemento del menù
const itemVariants = {
  hidden: { opacity: 0, x: -100, rotate: -25 }, // Parte da sinistra, ruotato e invisibile
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
  },
};

// Varianti per i nomi dei piatti (animazione semplice)
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Dati del menù strutturati per una gestione più semplice
const menuItems = [
  {
    title: "Antipasto misto",
    image: "./antipasto.png",
    details: "Una selezione di salumi e formaggi locali, con olive e pane casereccio.",
  },
  {
    title: "Spaghetti al tartufo",
    image: "./primo.png",
    details: "Pasta fresca fatta in casa con un ricco condimento al tartufo bianco pregiato.",
  },
  {
    title: "Filetto di pesce",
    image: "./secondo.png",
    details: "Pesce fresco di giornata grigliato alla perfezione, servito con verdure di stagione.",
  },
  {
    title: "Tiramisù della casa",
    image: "./dolce.png",
    details: "Il classico dolce italiano, preparato secondo la nostra ricetta segreta.",
  },
];

export function Menù() {
    const { ref, inView } = useInView ({
        triggerOnce: false, // L'animazione si attiva ogni volta che entra in vista
        threshold: 0.1, // Percentuale di visibilità per attivare l'animazione
    });

    // Stato per tenere traccia di quale elemento del menù è aperto
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section
            id="menù"
            className="w-full flex flex-col justify-center items-center py-16 md:py-24 bg-background"
        >
            <h2 className="text-4xl font-montserrat tracking-tighter text-center mb-12">Il Nostro Menù</h2>
            <motion.div
                ref={ref}
                className=" w-full grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-x-8 gap-y-4 justify-items-center"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {/* Riga delle immagini */}
                {menuItems.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} transition={{ type: "spring", stiffness: 100, damping: 12 }}>
                        <Card className="bg-secondary text-secondary-foreground shadow-lg rounded-full w-44 h-44 flex items-center justify-center">
                            <img className="object-cover rounded-full w-[95%] h-[95%]" src={item.image} alt={item.title} />
                        </Card>
                    </motion.div>
                ))}

                {/* Riga dei titoli e dei dettagli */}
                {menuItems.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={textVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="font-montserrat text-xl italic text-center flex flex-col items-center justify-start"
                    >
                        <div className="flex flex-col items-center">
                            <span>{item.title}</span>
                            <Button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="bg-secondary mt-2 px-4 py-2 text-white rounded-full font-montserrat hover:bg-accent/80 focus:bg-accent/80"
                                aria-expanded={openIndex === index}
                                aria-controls={`details-${index}`}
                            >
                                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                                <span className="sr-only">Mostra dettagli</span>
                            </Button>
                        </div>
                        <div className="w-full pt-2 h-[100px]"> {/* Contenitore per i dettagli con altezza fissa */}
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.p
                                        id={`details-${index}`}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="text-base not-italic text-muted-foreground"
                                    >
                                        {item.details}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}