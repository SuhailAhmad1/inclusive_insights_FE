export default function Hero() {
  return (
    <div className=" bg-black text-white">
      <div className="py-20 sc-1218:text-8xl sc-950:text-6xl sc-834:text-5xl text-3xl text-center font-bold font-raleway">
        <h2>
          <p>
            CONSULTING <span className="text-[#96FC04]">SERVICES</span> &
          </p>
          <p>
            DISABILITY <span className="text-[#96FC04]">RIGHTS</span>
          </p>
        </h2>
      </div>
      <div className="sc-500:px-20 px-5">
        <img  className="rounded-lg w-full" src={hero_img} alt="Image showing disabled children" />
      </div>
    </div>
  );
}
