"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent} from "./ui/card";

const heroVariants = {
  hidden: { opacity: 0, y: 50 }, //indica di quanto deve spostarsi e l'opacità iniziale
  visible: { opacity: 1, y: 0 },
};


export function Hero() {
    const { ref, inView } = useInView ({
        triggerOnce: true, // Animazione si attiva una sola volta
        threshold: 0.1, // Percentuale di visibilità per attivare l'animazione
    });

    return (
        <section
            id="hero"
            className="w-full h-[90vh] grid md:grid-cols-2 items-center bg-background"
        >
            <motion.div
                ref={ref}
                className="md:col-span-2 grid md:grid-cols-2 items-center"
                variants={heroVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{duration: 0.8, ease: "easeOut"}}
                >
                <div className="p-10 md:p-16 text-left">
                    <Card className="bg-black/70 shadow-lg">
                        <CardContent className="p-10 text-left">
                            <h1 className = "text-4xl md:text-6xl font-bold tracking-tighter mb-4">La Tucina</h1>
                            <p className = "text-lg md:text-xl text-slate-300 max-w-2xl">Dove puoi godere, grazie al cibo</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex items-center justify-center p-8">
                    <img className = "w-4/5 md:w-full h-auto object-cover rounded-lg shadow-lg" src="./cucina-in-vista-ristorante.jpg" alt="La cucina a vista del ristorante La Tucina con i cuochi al lavoro"/>
                </div>
            </motion.div>
        </section>
        
    )
}