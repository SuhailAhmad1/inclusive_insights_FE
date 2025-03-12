import author_logo from "../../assets/author_icon.png";

export default function Main({
  id,
  title,
  img,
  author,
  created_at,
  description,
  category,
}) {
  return (
    <>
      <div className="py-10 sc-834:px-20 sc-650:px-10 px-6">
        <div className="flex items-center justify-center w-full h-[400px] sc-650:h-[500px] overflow-hidden">
          <img
            className="w-full h-full object-fill sc-650:object-cover rounded-md"
            src={img}
            alt={`${title}_image`}
          />
        </div>
        <div className="px-1 pt-5">
          <div>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>

          <div className="flex text-xl items-start justify-between flex-col sc-650:flex-row sc-650:items-center">
            <div className="flex gap-2 justify-start items-center">
              <span className="font-semibold">Author : </span>
              <p className="">{author}</p>
            </div>
            <p>
              <span className="font-semibold">Uploaded at : </span>
              {created_at}
            </p>
          </div>

          <div className="text-xl pb-5">
            <p>
              <span className="font-semibold">Category : </span>
              {category}
            </p>
          </div>

          <div className="text-xl text-gray-800">
            <p className="whitespace-pre-line">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
