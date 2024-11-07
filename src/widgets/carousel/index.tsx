"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const CarouselOne = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const mock = [
    {
      id: 1,
      title: "abc",
    },
    {
      id: 2,
      title: "def",
    },
  ];
  return (
    <div className="mx-auto max-w-7xl h-[330px]">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-7xl"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, id) => (
            <CarouselItem key={id}>
              <Card>
                <CardContent className="flex h-[330px] aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{id + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
