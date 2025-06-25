"use client";

import TestimonialCard from "@/components/testimonial-card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { testimonials } from "@/lib/config";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <section id="testimonials" className="max-w-5xl m-auto px-6 lg:px-0 py-10 flex flex-col gap-5 items-center">
      <h2 className="text-2xl font-semibold">What do they <span className="text-primary">say</span> about me ?</h2>

      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({ delay: 10000 })
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-8">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={`${testimonial.name}-${index}`} className={cn("basis-4/6 pl-8 transition-all", { "opacity-70": current !== index + 1 })}>
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}

