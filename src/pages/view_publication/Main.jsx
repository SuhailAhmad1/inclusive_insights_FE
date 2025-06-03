import author_logo from "../../assets/author_icon.png";
import "react-quill/dist/quill.snow.css";

export default function Main({
  id,
  title,
  img,
  author,
  created_at,
  description,
  category,
  image_description,
}) {
  return (
    <>
      <div
        className="
      sc-834:pt-28
      pt-24
      py-10 
      sc-834:px-8 
      px-6
      min-h-screen"
      >
        <div className="flex items-center justify-center w-full h-[400px] sc-650:h-[500px] overflow-hidden">
          <img
            className="w-full h-full object-contain sc-650:object-cover rounded-md"
            src={img}
            alt={image_description}
          />
        </div>
        <div className="px-1 pt-5">
          <div className="pb-2">
            <h2 className="sc-650:text-3xl text-2xl font-bold">{title}</h2>
          </div>

          <div className="flex text-xl items-start justify-between flex-col sc-650:flex-row sc-650:items-center">
            <div className="flex gap-2 justify-start items-center">
              <span className="font-semibold">Author : </span>
              <p className="">{author}</p>
            </div>
            <p>
              <span className="font-semibold">Published at : </span>
              {created_at}
            </p>
          </div>

          <div className="text-xl pb-10">
            <p>
              <span className="font-semibold">Category : </span>
              {category}
            </p>
          </div>

          <div className="max-w-full text-justify text-xl rich-text text-gray-800 prose"
          dangerouslySetInnerHTML={{ __html: description }}>
          </div>
        </div>
      </div>
    </>
  );
}
