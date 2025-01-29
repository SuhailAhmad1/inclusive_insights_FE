import e_aa from "../../assets/e_aa.svg";
import e_isd from "../../assets/e_isd.svg";
import e_pa from "../../assets/e_pa.svg";
import e_wip from "../../assets/e_wip.svg";
import e_ma from "../../assets/e_ma.svg";
import e_ts from "../../assets/e_ts.svg";
import e_kw from "../../assets/e_kw.svg";
import e_ew from "../../assets/e_ew.svg";

import ExpertiseCard from "./ExpertiseCard";

const EPERTISE_ITEMS = [
  {
    id: 1,
    title: "Accessibility Audits",
    description:
      "Comprehensive assessments of physical spaces, digital platforms, and organizational processes to identify barriers and provide actionable solutions.",
    img: e_aa,
  },
  {
    id: 2,
    title: "Inclusive Strategy Development",
    description:
      "Crafting customized strategies to integrate accessibility and inclusion into your organization's core operations.",
    img: e_isd,
  },
  {
    id: 3,
    title: "Policy Advising",
    description:
      "Guiding organizations on compliance with global standards such as the Web Content Accessibility Guidelines (WCAG) and RPWD Act 2016.",
    img: e_pa,
  },
  {
    id: 4,
    title: "Workplace Inclusion Programs",
    description:
      "Developing training, policies, and best practices to create diverse & supportive work environments.",
    img: e_wip,
  },
  {
    id: 5,
    title: "Mission-Driven Approach",
    description:
      "We are passionate about creating a world where accessibility and inclusion are the norm.",
    img: e_ma,
  },
  {
    id: 6,
    title: "Tailored Solutions",
    description:
      "We understand that every organization is unique, and we provide customized recommendations to meet your specific needs.",
    img: e_ts,
  },
  {
    id: 7,
    title: "Expert Knowledge",
    description:
      "Our team stays up to date with the latest accessibility standards, technologies, and best practices.",
    img: e_kw,
  },
  {
    id: 8,
    title: "Empathy & Understanding",
    description:
      "As advocates for disability rights, we bring lived experience and compassion to every project.",
    img: e_ew,
  },
];

export default function Expertise() {
  return (
    <>
      <div className="py-9">
        <h2 className="text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl w-1/2 m-auto pb-9">
          Our Expertise
        </h2>
        <div className="px-[50px] flex flex-wrap gap-4 justify-center">
          {EPERTISE_ITEMS.map((item) => (
            <ExpertiseCard
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
