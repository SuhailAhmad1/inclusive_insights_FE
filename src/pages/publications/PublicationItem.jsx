import React from "react";
import author_logo from "../../assets/author_icon.png";
import { Link } from "react-router-dom";

export default function PublicationItem({
  id,
  title,
  img,
  author,
  created_at,
  description,
}) {
  return (
    <Link to={"/publications/" + id}>
      <div className="sc-1450:w-[430px] sc-1650:w-[500px] sc-1900:w-[590px] sc-1218:w-[360px] sc-950:w-[400px] sc-650:w-[290px] w-[400px] cursor-pointer hover:scale-105 transform transition-transform duration-300 hover:shadow-xl p-2">
        <div className="w-full h-[250px]">
          <img
            className="min-w-full h-full object-cover overflow-hidden rounded-md"
            src={img}
            alt={`${title} image`}
          />
        </div>
        <p className="pt-2 text-xl font-semibold line-clamp-1 w-full">
          {title}
        </p>
        <div className="flex items-center justify-between sc-650:flex-col sc-650:items-start sc-950:flex-row sc-950:items-center">
          <div className="my-2 flex gap-2 items-center justify-start">
            <img src={author_logo} alt="author-icon" />
            <p className="">{author}</p>
          </div>
          <p>{created_at}</p>
        </div>
        <div className="flex items-center justify-end pb-2"></div>
        <div>
          <p className="line-clamp-3 w-full text-gray-700">{description}</p>
        </div>
      </div>
    </Link>
  );
}
