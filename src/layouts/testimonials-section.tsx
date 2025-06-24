"use client";

import TestimonialCard from "@/components/testimonial-card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Julien T.",
    content: "Houssam is a professional and reliable developer. I highly recommend working with him. He’s skilled and serious about his work. I particularly appreciated how he clearly explained the constraints certain ideas presented, and his advice saved me a significant amount of time in developing my business.",
    role: "First Client",
  },

  {
    name: "Camille B.",
    content: "Thank you to Houssam for successfully completing many orders. He’s very reliable and patient when it comes to understanding our project’s needs.",
    role: "Discord Client",
  },

  {
    name: "Moha R.",
    content: "I placed an order with Houssam — top-quality service, very responsive, highly professional, and he provided excellent post-sale support. I highly recommend him!",
    role: "Twitch Streamer",
  },

  {
    name: "Doryne E.",
    content: "I’ve worked with Houssam and continue to do so. He’s incredibly responsive to all my requests. Whether it’s small or large projects — bots, scripts, or websites — he handles them efficiently. I’m really glad I found him!",
    role: "Recurring Client",
  },
  {
    name: "Oggy",
    content: "I just want to say that working with Houssam was a great experience. He helped me a lot and delivered outstanding work. He responds quickly and supports you throughout the entire process. Thank you again, Houssam!",
    role: "Founder of Imperial Cup Community",
  },
  {
    name: "Jason H.",
    content: "Houssam does excellent work — both impressive and extensive. He is highly adaptable to client needs and takes the time to ask detailed questions about the project, which I greatly appreciated. He was always responsive to my inquiries and proved to be someone trustworthy from the start.",
    role: "Owner of SoigneMoi",
  },
];

export default function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1))
  }, [api])

  return (
    <div id="testimonials" className="max-w-5xl m-auto px-6 lg:px-0 py-10 flex flex-col gap-5 items-center">
      <h2 className="text-2xl font-semibold">What do they <span className="text-primary">say</span> about me ?</h2>

      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({ delay: 10000 })
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-8 w-screen">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={`${testimonial.name}-${index}`} className={cn("basis-9/12 pl-8 transition-all", { "opacity-70": current !== index + 1 })}>
              <TestimonialCard {...testimonial} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

