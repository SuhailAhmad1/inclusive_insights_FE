import hero_img from "../../assets/home-hero.jpg";

export default function Hero() {
  return (
    <div className="pt-40 sc-834:pt-28 sc-950:pt-20 sc-1218:pt-16 bg-black text-white h-[610px] flex flex-col justify-between">
      <div className="sc-834:py-20 sc-1218:text-7xl sc-950:text-6xl sc-834:text-5xl text-3xl text-center font-bold font-raleway">
        <h2>
          <p>
            DRIVING <span className="text-[#96FC04]">INCLUSION</span> &
          </p>
          <p>
            DISABILITY <span className="text-[#96FC04]">RIGHTS</span>
          </p>
        </h2>
      </div>
      <div className="sc-500:px-20 px-5">
        <img
          className="rounded-lg w-full h-[300px] object-cover sc-1218:border-b-4 border-black"
          src={hero_img}
          alt="Image showing disabled children"
        />
      </div>
    </div>
  );
}
