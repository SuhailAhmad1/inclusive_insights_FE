export default function MissionCard({ img, title, description }) {
  return (
    <div className="
            sc-1450:w-[380px]
            sc-1320:w-[360px]
            sc-1218:w-[340px]
            sc-1070:w-[300px]
            sc-950:w-[275px]
            sc-834:w-[238px]
            w-full
            rounded-md border-grey border-2 p-4">
      <div className="w-9 h-9 my-5 items-center flex justify-center">
        <img
          src={img}
          alt="logo"
          className="w-[28px] h-[28px] object-contain"
        />
      </div>
      <p className="text-xl font-semibold">{title}</p>
      <p className="py-3">{description}</p>
    </div>
  );
}
