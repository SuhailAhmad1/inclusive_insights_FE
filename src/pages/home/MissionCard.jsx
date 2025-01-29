export default function MissionCard({ img, title, description }) {
  return (
    <div className="rounded-md border-grey border-2 p-4">
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
