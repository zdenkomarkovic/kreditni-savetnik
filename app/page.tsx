import About2 from "@/components/About2";
import BackgroundImage from "@/components/BackgroundImage";
import Cardlist from "@/components/Cardlist";
import Cards1 from "@/components/Cards1";
import Cards2 from "@/components/Cards2";
import Cards2Kosina from "@/components/Cards2Kosina";
import CardWithImage from "@/components/CardWithImage";
import Hero2 from "@/components/Hero2";
import ImageEditor from "@/components/ImageEditor";
import PozoviteNasOdmah from "@/components/PozoviteNasOdmah";
import PozoviteNasOdmahImage from "@/components/PozoviteNasOdmahImage";
import Testemonials from "@/components/Testimonials";
import {
  cards1Data,
  cards2Data,
  cards2DataText,
  pictures,
} from "@/constants/index";

export default function Home() {
  return (
    <div className="">
      <Hero2 />
      <About2 />
      <PozoviteNasOdmah />
      <CardWithImage />
      <BackgroundImage />
      <PozoviteNasOdmahImage />
      <Cards1 title={"dodaj naslov"} data={cards1Data} />
      <Cards2
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cards2Kosina
        title={"Elektroinstalacije i elektro ormani"}
        data={cards2Data}
        text={cards2DataText}
      />
      <Cardlist />
      <ImageEditor images={pictures} />
      <Testemonials />
    </div>
  );
}
