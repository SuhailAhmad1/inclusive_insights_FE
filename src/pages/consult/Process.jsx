import ep_1 from "../../assets/ep_1.svg";
import ep_2 from "../../assets/ep_2.svg";
import ep_3 from "../../assets/ep_3.svg";

import arrow from "../../assets/arrow.svg";
import ProcessCard from "./ProcessCard";

const PROCESS_ITEMS = [
  {
    id: 1,
    title: "Initial Consultation",
    description:
      "We start with a discovery session to understand your goals, challenges, and current practices.",
    img: ep_1,
  },
  {
    id: 2,
    title: "Assessment",
    description:
      "We conduct thorough evaluations of your spaces, systems, and policies to identify gaps and opportunities.",
    img: ep_2,
  },
  {
    id: 3,
    title: "Evaluation & Improvement",
    description:
      "We monitor progress and provide continuous support to ensure long-term success.",
    img: ep_3,
  },
];
export default function Process() {
  return (
    <div className="py-9">
      <h2 className="pb-10 text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl w-1/2 m-auto">
        Our Process
      </h2>
      <div className="px-[50px] flex sc-834:gap-2 gap-10 justify-center  sc-834:flex-row flex-col items-center">
        {PROCESS_ITEMS.map((item, index) => (
          <>
            <ProcessCard
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
            />
            {index !== PROCESS_ITEMS.length - 1 ? (
              <div className="flex items-center justify-center">
                <img className="
                sc-1450:w-[100px]
                sc-1218:w-[90px]
                sc-834:w-[80px]
                transition-transform 
                sc-834:rotate-0
                rotate-90
                px-1
                w-[100px] 
                object-contain" src={arrow} alt="arrow image" />
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
}
