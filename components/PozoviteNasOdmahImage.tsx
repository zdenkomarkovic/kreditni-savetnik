"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import Image from "@/node_modules/next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const PozoviteNasOdmahImage = () => {
  return (
    <div className="bg-primary-foreground text-muted">
      <div className="container px-2 md:px-4 mx-auto font-bold flex flex-col-reverse md:flex-row justify-center items-center  md:gap-20">
        <Image
          src={"/man-9020932_640.png"}
          width={250}
          height={250}
          alt="kreditni savetnik"
          className=""
        />{" "}
        <div className="flex flex-col gap-6 text-center justify-center ">
          <div>
            <h2 className="text-4xl text-primary py-3">
              Kreditni savetnik vam stedi vreme i novac
            </h2>
            <p className="text-3xl flex gap-3 items-center ">
              {" "}
              Zakazite besplatne konsultacije
            </p>
          </div>
          <a href="tel:+381659480700">
            <motion.button
              whileHover={{ translateY: "-5px" }}
              whileTap={{ scale: 0.95 }}
              className=" mx-auto md:mx-0 text-nowrap flex gap-3 text-2xl items-center text-primary bg-muted rounded-lg px-4 md:px-8 md:py-3 py-2"
            >
              <PhoneIcon /> Pozovite odmah
            </motion.button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PozoviteNasOdmahImage;
