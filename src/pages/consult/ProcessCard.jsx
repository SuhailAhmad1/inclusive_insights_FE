export default function ProcessCard({ title, description, img }) {
  return (
    <div
      className="px-4 flex justify-center flex-col items-stretch
                // sc-1900:w-[430px] 
                // sc-1650:w-[375px]
                // sc-1450:w-[320px]
                // sc-1320:w-[290px]
                // sc-1218:w-[260px]
                // sc-1070:w-[230px]
                // sc-950:w-[400px]
                // sc-834:w-[350px]
                // sc-650:w-[267px]
                w-full
                h-full
                "
    >
      <div
        className="
                    sc-1450:w-32 sc-1450:h-32
                    sc-1218:w-28 sc-1218:h-28
                    sc-1070:w-24 sc-1070:h-24
                    sc-834:w-20 sc-834:h-20
                    w-32 h-32 mx-auto
                    my-5 items-center flex justify-center"
      >
        <img
          src={img}
          alt="process icons with step number on top right of the icon"
          className="object-contain"
        />
      </div>
      <p className="sc-834:text-xl text-2xl font-semibold px-1 text-center">
        {title}
      </p>
      <p className="py-3 px-1 text-center sc-834:text-base text-xl">
        {description}
      </p>
    </div>
  );
}
