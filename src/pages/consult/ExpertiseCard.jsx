export default function ExpertiseCard({ img, title, description}) {
  return (
    <div className="rounded-md border-grey border-2 px-4 bg-gray-100
                    sc-1900:w-[430px] 
                    sc-1650:w-[375px]
                    sc-1450:w-[320px]
                    sc-1320:w-[290px]
                    sc-1218:w-[260px]
                    sc-1070:w-[230px]
                    sc-950:w-[400px]
                    sc-834:w-[350px]
                    sc-650:w-[267px]
                    w-full
                    ">
      <div className="w-11 h-11 my-5 items-center flex justify-center">
        <img
          src={img}
          alt="logo"
          className="object-contain"
        />
      </div>
      <p className="text-xl font-semibold px-1">{title}</p>
      <p className="py-3 px-1">{description}</p>
    </div>
  );
}
