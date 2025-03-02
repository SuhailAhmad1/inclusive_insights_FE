export default function Hero() {
    return (
      <div className=" bg-black text-white py-20 h-[600px]">
        <div className="py-20 sc-1218:text-8xl sc-950:text-6xl sc-834:text-5xl text-3xl text-center font-bold font-raleway">
          <h2>
            <p>
                OUR <span className="text-[#96FC04]">PUBLICATIONS</span>
            </p>
          </h2>
        </div>
        <div className="w-full flex justify-center items-center pb-20">
          <p className="text-center sc-1218:text-3xl sc-950:text-2xl text-xl w-[90%]">
          Welcome to our publications. This page contains opinion pieces,
          research articles, and policy analysis from our internationally
          acclaimed authors. Please refer to submission page if you are
          interested in contributing to our platform.
          </p>
        </div>
      </div>
    );
  }
