"use client";

import { motion } from "framer-motion";
import Image from "@/node_modules/next/image";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-primary"
        viewBox="0 0 696 316"
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths({
  title,
  img,
  text,
  text2,
}: {
  title: string;
  img: string;
  text?: string;
  text2?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex  justify-center overflow-hidden">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>{" "}
      <div className="  relative container mx-auto px-4 ">
        <div className="flex my-auto z-0 items-center justify-center  md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-3xl mr-auto z-10"
          >
            <h1 className="pt-80 font-gagalin text-5xl sm:text-7xl md:text-8xl font-bold mb-8">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block z-10 mr-4 last:mr-0"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-primary "
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <div className=" text-left z-0">
              <p className="pl-16 font-extrabold text-muted md:text-muted-foreground text-4xl md:text-5xl">
                {text}
              </p>
            </div>
            <div className=" text-left">
              <p className="pl-16 font-extrabold text-muted-foreground text-4xl md:text-5xl">
                {text2}
              </p>
            </div>
          </motion.div>
        </div>

        <Image
          src={img}
          width={1000}
          height={800}
          alt={"kreditni savetnik"}
          className="absolute md:w-[42%] top-0 right-0 -z-10  h-screen object-cover"
        />
      </div>
    </div>
  );
}
