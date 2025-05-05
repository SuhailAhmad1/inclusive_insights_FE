import peg from "../../assets/peg.svg";
import ims from "../../assets/ims.svg";
import dtl from "../../assets/dtl.svg";
import ebc from "../../assets/ebc.svg";
import tp from "../../assets/tp.svg";
import ds from "../../assets/ds.svg";

import MissionCard from "./MissionCard";

const MISSION_ITEMS = [
  {
    id: 1,
    title: "Providing Expert Guidance",
    description:
      "Providing expert guidance to help organizations create accessible and inclusive environments.",
    img: peg,
  },
  {
    id: 2,
    title: "Implementing Innovative Strategies",
    description:
      "Implementing innovative strategies that align with global accessibility standards and foster meaningful change.",
    img: ims,
  },
  {
    id: 3,
    title: "Driving thought leadership through",
    description:
      "Driving thought leadership through impactful publishing, raising awareness about disability rights and inclusive practices.",
    img: dtl,
  },
  {
    id: 4,
    title: "Empowering businesses & communities",
    description:
      "Empowering businesses and communities to embrace diversity and ensure equity for all individuals.",
    img: ebc,
  },
  {
    id: 5,
    title: "Transforming physical",
    description:
      "Transforming physical and digital spaces into welcoming, thriving environments where everyone can fully participate and succeed.",
    img: tp,
  },
  {
    id: 6,
    title: "Digital Spaces",
    description:
      "Transforming digital spaces into welcoming, thriving environments where everyone can fully participate and succeed.",
    img: ds,
  },
];

export default function Mission() {
  return (
    <div>
      <h2 className="text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl w-1/2 m-auto">
        Our mission is to champion disability rights and inclusion by:
      </h2>
      <div
        className="py-16 flex justify-center px-10 gap-5 flex-wrap"
      >
        {MISSION_ITEMS.map((item) => (
          <MissionCard
            key={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
