"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";
import { cards2Data } from "@/constants/index";
import Cards2Kosina from "./Cards2Kosina";

const ServicesWithImage = () => {
  return (
    <div className="container px-2 md:px-4 mx-auto text-center pb-10 ">
      <h2 className="text-2xl md:text-5xl text-primary font-bold py-3 md:py-20">
        Evo za sta sve mozete da se obratite nama
      </h2>
      <div className="flex flex-col-reverse md:flex-row justify-around items-center ">
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/usluge.jpg"}
            width={500}
            height={500}
            alt="kreditni savetnik"
            className="object-cover rounded-xl"
          />
        </motion.div>
        <div className=" ">
          <Cards2Kosina data={cards2Data} />
        </div>
      </div>
    </div>
  );
};

export default ServicesWithImage;
