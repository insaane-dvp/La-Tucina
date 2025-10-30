"use client";

import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const images = [
  "/entrance.png",
  "/sala.png",
  "/cucina1.png",
  "/cucina2.png",
];

export function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="w-[80vw] h-full flex items-center justify-center">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ align: "start", loop: true }}
        className="w-full max-w-[90vw] relative"
      >
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img
                  src={src}
                  alt=""
                  className="rounded-lg object-fit w-full h-[80vh] shadow-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Aree cliccabili invisibili */}
        <div
          className="absolute left-0 top-0 h-full w-1/2 cursor-w-resize z-20"
          onClick={scrollPrev}
        />
        <div
          className="absolute right-0 top-0 h-full w-1/2 cursor-e-resize z-20"
          onClick={scrollNext}
        />
      </Carousel>
    </div>
  );
}
