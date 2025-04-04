"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TestimonialData, testimonialData } from "@/constants/index";
import Autoplay from "embla-carousel-autoplay";

const Testemonials = () => {
  return (
    <div className="pb-10 container px-4 mx-auto">
      <h2 className="text-7xl py-14 text-center text-primary">
        Iskustva klijenata
      </h2>
      <Carousel
        className="w-full overflow-hidden"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-4">
          {testimonialData.map((service, i) => (
            <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full flex flex-col">
                <TestemonialCard service={service}></TestemonialCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testemonials;

const TestemonialCard = ({ service }: { service: TestimonialData }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-full"
    >
      <Card className={`bg-primary rounded-3xl text-white h-full`}>
        <CardHeader>
          <CardTitle className={`text-2xl capitalize text-center py-2`}>
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="mx-auto ">{service.description}</CardContent>
        <CardFooter className="flex justify-end items-end">
          {service.signiture}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
