"use client";
import Image from "@/node_modules/next/image";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  return (
    <div>
      <div className="container px-2 md:px-4 py-10 md:py-20 mx-auto flex flex-col md:flex-row gap-6 md:gap-20 items-center">
        <div className=" md:w-2/3 space-y-3 md:space-y-8">
          <h2 className="text-4xl font-bold md:text-6xl text-primary flex flex-col  text-center">
            Kreditni savetnik
            <span className="text-2xl font-normal md:text-3xl  text-muted-foreground">
              Vas partner za pametne odluke
            </span>
          </h2>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Kreditni Savetnik je specijalizovana firma koja pruža profesionalne
            usluge savetovanja u oblasti finansija i kreditiranja. Naš cilj je
            da klijentima pomognemo da pronađu najpovoljnije finansijske
            proizvode, unaprede svoje finansijsko stanje i donesu informisane
            odluke prilikom uzimanja kredita.
          </p>
          <p className=" first-letter:pl-6 text-lg md:text-3xl">
            Uz tim iskusnih stručnjaka, nudimo personalizovane analize i
            preporuke prilagođene vašim potrebama, bilo da planirate stambeni
            kredit, refinansiranje postojećih obaveza ili tražite najbolju
            opciju za keš kredit. Razumemo da su finansijske odluke kompleksne,
            pa preuzimamo odgovornost da vas vodimo kroz ceo proces – od početne
            procene vaše kreditne sposobnosti do zaključenja ugovora.
          </p>
          <p className="first-letter:pl-6 text-lg md:text-3xl">
            Naš pristup temelji se na transparentnosti, pouzdanosti i
            profesionalizmu. Radimo u saradnji s vodećim bankama i finansijskim
            institucijama, što nam omogućava da vam ponudimo najbolje uslove na
            tržištu.
          </p>
          <p className="first-letter:pl-6 text-lg md:text-3xl">
            Bilo da ste pojedinac ili preduzeće, Kreditni Savetnik je tu da vam
            pomogne da postignete finansijsku sigurnost i ostvarite svoje
            ciljeve uz minimalne rizike i troškove. Verujemo da svaka
            finansijska odluka treba da bude mudro donesena – sa nama, vaša
            budućnost je u sigurnim rukama.
          </p>
          <p>Pisanje prigovora bankama i kreditnom birou</p>
          <p>Tumačenje izveštaja Kreditnog biroa</p>
          <p>Posredovanje u procesu dobijanja kredita</p>
        </div>
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }} // Naizmenično levo/desno
          whileInView={{ scale: 1, opacity: 1 }} // Animira se ka centru
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden  md:w-1/3"
        >
          <Image
            src={"/savetnik.jpg"}
            width={500}
            height={800}
            alt="kreditni savetnik"
            className="object-cover h-[300px] md:h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
