import React from "react";
import author_logo from "../../assets/author_icon.png";

export default function PublicationItem({
  id,
  title,
  img,
  author,
  created_at,
  description,
}) {
  return (
    <div className="sc-1450:w-[430px] sc-1650:w-[500px] sc-1900:w-[590px] sc-1218:w-[360px] sc-950:w-[400px] sc-650:w-[285px] w-[400px] cursor-pointer hover:scale-110 transform transition-transform duration-300 hover:shadow-xl p-2">
      <div className="w-full h-[250px]">
        <img
          className="min-w-full h-full object-cover overflow-hidden rounded-md"
          src={img}
          alt={`${title} image`}
        />
      </div>
      <p className="py-2 text-xl font-semibold line-clamp-1 w-full">{title}</p>
      <div className="flex items-center justify-between">
        <div className="my-2 flex gap-2 items-center justify-start">
          <img src={author_logo} alt="author-icon" />
          <p className="">{author}</p>
        </div>
        <p>{created_at}</p>
      </div>
      <div>
        <p className="line-clamp-3 w-full text-gray-700">{description}</p>
      </div>
    </div>
  );
}
