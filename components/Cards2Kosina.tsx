import { Cards2Data } from "@/constants/index";
import { CardHeader, Card } from "./ui/card";
import MotionComponent1 from "./MotionComponent1";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Cards2Kosina = ({ data }: { data: Cards2Data[] }) => {
  return (
    <div className="">
      <div className="container px-5 mx-auto py-10 ">
        <div className="flex flex-col text-center gap-6 md:gap-8 items-stretch h-full">
          {data.map((item) => {
            return (
              <MotionComponent1 key={item.id}>
                <OneCard key={item.id} item={item} />
              </MotionComponent1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards2Kosina;

const OneCard = ({ item }: { item: Cards2Data }) => {
  return (
    <Card className="h-full relative overflow-hidden  bg-transparent">
      <svg
        className="absolute inset-0 w-full h-full text-card"
        viewBox="0 0 256 160"
        preserveAspectRatio="none"
      >
        <polygon points="0,0 256,0 192,160 0,160" fill="currentColor" />
      </svg>

      <CardHeader className="relative z-10">
        <div className=" text-2xl md:text-3xl text-primary flex gap-3 items-center justify-start">
          <p className="">{item.title}</p>
        </div>
      </CardHeader>
    </Card>
  );
};
