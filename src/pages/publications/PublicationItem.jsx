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
  image_description,
}) {
  function stripHtml(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    // Add a space after common inline and block tags to avoid word sticking
    const tagsToPad = ["p", "div", "br", "li", "span", "strong", "em"];
    tagsToPad.forEach((tag) => {
      const elements = tempDiv.getElementsByTagName(tag);
      for (const el of elements) {
        el.insertAdjacentText("afterend", " ");
      }
    });

    return (tempDiv.textContent || tempDiv.innerText || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  const plainText = stripHtml(description).slice(0, 500); // Truncate to 200 chars

  return (
    <Link to={"/publications/" + id}>
      <div
        className="
      sc-1450:w-[430px] 
      sc-1218:w-[360px] 
      sc-1070:w-[320px]
      sc-950:w-[280px] 
      sc-834:w-[250px] 
      sc-650:w-[300px] 
      w-full
      cursor-pointer hover:scale-105 transform transition-transform duration-300 hover:shadow-xl p-2"
      >
        <div className="w-full sc-950:h-[250px] h-[220px]">
          <img
            className="min-w-full h-full object-cover overflow-hidden rounded-md"
            src={img}
            alt={image_description}
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
          <p className="line-clamp-3 w-full text-gray-700 whitespace-pre-line">{plainText}</p>
        </div>
      </div>
    </Link>
  );
}
