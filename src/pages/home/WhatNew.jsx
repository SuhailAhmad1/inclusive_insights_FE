import hero_img from "../../assets/home-hero.jpg";

const BLOGS_DATA = [
  {
    id: "1",
    title: "The Most Recent One",
    uploaded_at: "07-Nov-2024",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta deserunt quod, blanditiis vel harum dolores animi corporis aperiam rem optio assumenda magni pariatur debitis reiciendis adipisci nulla, inventore maxime ut, consectetur laboriosam dolore temporibus molestias. Reiciendis, sequi maiores! Saepe sunt quas facilis beatae! Laboriosam blanditiis dolor fugit amet cupiditate.",
  },
  {
    id: "2",
    title: "The Second Recent",
    uploaded_at: "06-Nov-2024",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, veniam magni quia adipisci numquam ut at harum dolor nam eius, qui ipsum totam enim nostrum cupiditate. Expedita natus maxime ullam in maiores iusto pariatur praesentium error vero ipsa earum culpa dicta fuga eos mollitia adipisci, quasi ad distinctio veritatis deserunt?",
  },
  {
    id: "3",
    title: "The Third One",
    uploaded_at: "04-Nov-2024",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta deserunt quod, blanditiis vel harum dolores animi corporis aperiam rem optio assumenda magni pariatur debitis reiciendis adipisci nulla, inventore maxime ut, consectetur laboriosam dolore temporibus molestias. Reiciendis, sequi maiores! Saepe sunt quas facilis beatae! Laboriosam blanditiis dolor fugit amet cupiditate.",
  },
  {
    id: "4",
    title: "Fourth One",
    uploaded_at: "01-Nov-2024",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta deserunt quod, blanditiis vel harum dolores animi corporis aperiam rem optio assumenda magni pariatur debitis reiciendis adipisci nulla, inventore maxime ut, consectetur laboriosam dolore temporibus molestias. Reiciendis, sequi maiores! Saepe sunt quas facilis beatae! Laboriosam blanditiis dolor fugit amet cupiditate.",
  },
  {
    id: "5",
    title: "The Last One",
    uploaded_at: "27-Oct-2024",
    img: hero_img,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est soluta deserunt quod, blanditiis vel harum dolores animi corporis aperiam rem optio assumenda magni pariatur debitis reiciendis adipisci nulla, inventore maxime ut, consectetur laboriosam dolore temporibus molestias. Reiciendis, sequi maiores! Saepe sunt quas facilis beatae! Laboriosam blanditiis dolor fugit amet cupiditate.",
  },
];

export default function WhatNew() {
  return (
    <div className="my-10 sc-950:mx-20 mx-10">
      <h2 className="text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl w-1/2 m-auto my-10">
        What's New
      </h2>
      <div className="border-grey border-2 p-4 w-full flex sc-950:flex-row flex-col gap-10">
        
        <div className="sc-950:pr-7 sc-950:w-2/3 w-full">
          <div>
            <img className="w-full h-[300px] object-cover" src={BLOGS_DATA[0].img} alt={BLOGS_DATA[0].img + " image"} />
          </div>
          <p className="text-gray-700 py-5">{BLOGS_DATA[0].uploaded_at}</p>
          <p className="text-xl pb-5">{BLOGS_DATA[0].title}</p>
          <p>{BLOGS_DATA[0].description.substr(0, 200)}.....</p>
          <button className="py-5 text-xl underline">View Post</button>
        </div>

        <div className="flex sc-950:flex-col flex-row flex-wrap gap-1 justify-between">
          {BLOGS_DATA.slice(1).map((item) => (
            <div key={item.id} className="flex sc-950:flex-row flex-col sc-950:gap-3 sc-950:mb-5 mr-2">
              <div>
                <img
                  src={item.img}
                  alt={item.img + " image"}
                  className="min-w-full h-full sc-834:min-w-[150px] sc-950:min-w-[150px] sc-950:max-w-[150px] sc-834:h-[120px] object-cover overflow-hidden"
                />
              </div>
              <div>
                <p className="text-xl pb-0">{item.title}</p>
                <p className="text-gray-700 pb-5">{item.uploaded_at}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
