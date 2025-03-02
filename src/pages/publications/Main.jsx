import React from "react";
import FilterButton from "../../components/FilterButton";
import search_icon from "../../assets/search_logo.svg";
import PublicationItem from "./PublicationItem";
import hero_img from "../../assets/home-hero.jpg";
const PUBLICATION_ITEMS = [
  {
    id: 1,
    title: "Publication First",
    author: "Suhail Bhat",
    created_at: "02-Mar-2025 3:31 PM",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi, laborum impedit nihil iusto quia vitae aut illo nesciunt asperiores veritatis laudantium accusantium nostrum tempora rem est dolore molestiae suscipit in beatae odit ipsam distinctio? Ullam, a, culpa placeat, repellendus suscipit obcaecati labore nulla voluptatum iusto quae eos repudiandae accusamus?",
  },
  {
    id: 2,
    title: "Publication Second",
    author: "Suhail Bhat",
    created_at: "02-Feb-2025 3:11 PM",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi, laborum impedit nihil iusto quia vitae aut illo nesciunt asperiores veritatis laudantium accusantium nostrum tempora rem est dolore molestiae suscipit in beatae odit ipsam distinctio? Ullam, a, culpa placeat, repellendus suscipit obcaecati labore nulla voluptatum iusto quae eos repudiandae accusamus?",
  },
  {
    id: 3,
    title: "Publication Third",
    author: "Suhail Bhat",
    created_at: "20-Aug-2025 5:31 PM",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi, laborum impedit nihil iusto quia vitae aut illo nesciunt asperiores veritatis laudantium accusantium nostrum tempora rem est dolore molestiae suscipit in beatae odit ipsam distinctio? Ullam, a, culpa placeat, repellendus suscipit obcaecati labore nulla voluptatum iusto quae eos repudiandae accusamus?",
  },
  {
    id: 4,
    title: "Publication Forth",
    author: "Suhail Bhat",
    created_at: "01-Mar-2025 1:31 AM",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi, laborum impedit nihil iusto quia vitae aut illo nesciunt asperiores veritatis laudantium accusantium nostrum tempora rem est dolore molestiae suscipit in beatae odit ipsam distinctio? Ullam, a, culpa placeat, repellendus suscipit obcaecati labore nulla voluptatum iusto quae eos repudiandae accusamus?",
  },
  {
    id: 5,
    title: "Publication Fifth",
    author: "Suhail Bhat",
    created_at: "02-Feb-2025 3:31 PM",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi, laborum impedit nihil iusto quia vitae aut illo nesciunt asperiores veritatis laudantium accusantium nostrum tempora rem est dolore molestiae suscipit in beatae odit ipsam distinctio? Ullam, a, culpa placeat, repellendus suscipit obcaecati labore nulla voluptatum iusto quae eos repudiandae accusamus?",
  },
  {
    id: 6,
    title: "Publication Sixth",
    author: "Suhail Bhat",
    created_at: "23-Jan-2025 3:31 PM",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate modi, laborum impedit nihil iusto quia vitae aut illo nesciunt asperiores veritatis laudantium accusantium nostrum tempora rem est dolore molestiae suscipit in beatae odit ipsam distinctio? Ullam, a, culpa placeat, repellendus suscipit obcaecati labore nulla voluptatum iusto quae eos repudiandae accusamus?",
  },
];
export default function Main() {
  return (
    <>
      <div className="py-9">
        <h2 className="text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl">
          Recent Publications
        </h2>
        <p className="text-center py-4 sc-650:text-xl px-2">
          To view all the publications of a particular category, use the
          category heading after the filtered list.
        </p>
        <div className="flex gap-3 justify-center items-center flex-wrap">
          <FilterButton>All</FilterButton>
          <FilterButton>Opinion</FilterButton>
          <FilterButton>Personal Story</FilterButton>
          <FilterButton>Case Study</FilterButton>
          <FilterButton>Research And Policy Analysis</FilterButton>
        </div>
        <div className="flex justify-center items-center px-2 py-3 my-3 w-full">
          <div className="sc-834:w-1/2 flex border gap-2 border-gray-400 p-2 shadow-md shadow-gray-600 rounded-md">
            <img src={search_icon} alt="Search Logo" />
            <input
              className="py-1 px-1 w-full"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex gap-8 items-center flex-wrap justify-center p-5">
          {PUBLICATION_ITEMS.map((item) => (
            <PublicationItem
              key={item.id}
              title={item.title}
              img={item.img}
              author={item.author}
              created_at={item.created_at}
              description={item.description}
            />
          ))}
        </div>
        <div className="flex justify-center items-center py-5">
            <p className="text-center border border-black px-8 py-2 rounded-md font-semibold cursor-pointer">Load More</p>
        </div>
      </div>
    </>
  );
}
