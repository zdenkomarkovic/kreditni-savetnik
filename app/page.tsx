import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cards1 from "@/components/Cards1";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import { cards1Data } from "@/constants/index";
import ServicesWithImage from "@/components/ServicesWithImage";
import Hero2Image from "@/components/Hero2Image";

export default function Home() {
  return (
    <div className="">
      <Hero2Image
        title={"Kreditni savetnik"}
        img={"/katie-harp-5Tn-AwgJtgA-unsplash.jpg"}
        text={"Sve vezano za kredite na jednom mestu!"}
        text2={"Jer mi imamo odgovore svih banaka!"}
      />
      <About2 />
      <ServicesWithImage />
      <PozoviteNasOdmahImage />
      <Cards1 title={"Zašto izabrati Kreditni Savetnik?"} data={cards1Data} />
      <BackgroundImage />
      <Testemonials />
    </div>
  );
}
