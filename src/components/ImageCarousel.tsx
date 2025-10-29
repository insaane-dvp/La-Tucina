"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/cucina2.png",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
];

export function ImageCarousel() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{ align: "start", loop: true }}
        className="w-full max-w-[90vw]"
      >
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <img src={src} alt="" className="rounded-lg object-cover w-full h-[75vh] shadow-lg" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-12" />
        <CarouselNext className="mr-12" />
      </Carousel>
    </div>
  );
}