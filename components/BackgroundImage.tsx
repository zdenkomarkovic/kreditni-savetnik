import Image from "@/node_modules/next/image";
import React from "react";

const BackgroundImage = () => {
  return (
    <div className="relative flex min-h-[20dvh] md:min-h-[40dvh]">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-[1]" /> */}
      <Image
        src={"/Kreditni savetnik logo 3.jpg"}
        alt="kreditni savetnik"
        fill
        className="w-full h-full  object-cover"
      />
    </div>
  );
};

export default BackgroundImage;
