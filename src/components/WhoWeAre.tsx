"use client";
import React, { useState } from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhoWeAreVariants = {
  hidden: { opacity: 0, y: 50 }, //indica di quanto deve spostarsi e l'opacità iniziale
  visible: { opacity: 1, y: 0 },
};

export function WhoWeAre() {
    const { ref, inView } = useInView ({
        triggerOnce: false, // Animazione si attiva una sola volta
        threshold: 0.1, // Percentuale di visibilità per attivare l'animazione
    });
    return(
        <section id="who-we-are" className="w-full min-h-screen flex flex-col justify-center p-8">
            {/* Contenitore per il titolo, centrato */}
            <motion.div 
                ref={ref}
                variants={WhoWeAreVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className= "w-full flex justify-center mb-12"
                >
                <Card className="bg-secondary text-secondary-foreground p-6 shadow-lg rounded-full w-35 h-35 flex items-center justify-center">
                    <h1 className="text-xl font-montserrat italic tracking-tighter text-center primary">CHI SIAMO?</h1>
                </Card>
            </motion.div>

            {/* Contenitore per immagine e video, allineato a sinistra */}
            <motion.div
                ref={ref}
                variants={WhoWeAreVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full flex flex-col md:flex-row justify-center items-center gap-8"
            >
                <div className="relative w-full md:w-1/2 lg:w-1/3 p-4">
                    {/* Immagine principale, spostata a destra */}
                    <img className="object-cover w-3/4 h-auto rounded-lg shadow-lg ml-16" src="filetto.png" alt="Un piatto di filetto gourmet servito nel nostro ristorante" />
                    {/* Video sovrapposto */}
                    <video src="chef_cooking.mp4" autoPlay loop muted className="absolute top-1/2 right-3/5 -translate-y-1/2 w-4/5 h-3/5 rounded-lg shadow-2xl">
                        Il tuo browser non supporta il tag video.
                    </video>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <Card className="bg-secondary text-secondary-foreground p-6 shadow-lg h-full">
                        <p className=" text-lg leading-relaxed">
                            Benvenuti nel nostro ristorante, dove la passione per la cucina incontra l'eccellenza del servizio. Siamo un team dedicato di chef, camerieri e personale di supporto che lavora instancabilmente per offrire un'esperienza culinaria indimenticabile. La nostra missione è creare piatti straordinari utilizzando ingredienti freschi e di alta qualità, combinati con tecniche culinarie innovative. Crediamo che ogni pasto debba essere un viaggio di sapori e emozioni, e ci impegniamo a superare le aspettative dei nostri ospiti in ogni visita. Unisciti a noi e scopri cosa significa davvero essere parte della nostra famiglia gastronomica.
                        </p>
                    </Card>
                </div>
            </motion.div>
        </section>
    )
}