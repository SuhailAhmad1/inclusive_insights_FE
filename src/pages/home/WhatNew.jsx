import React, { useEffect, useState } from "react";
import hero_img from "../../assets/home-hero.jpg";
import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_API_URL;

export default function WhatNew() {
  const [isLoading, setIsLoading] = useState(true);
  const [publiactionItems, setPublicationItems] = useState([]);

  async function fetchFilteredSearchData() {
    try {
      setIsLoading(true);
      let endpoint = apiUrl + "/api/publication/get_publications?limit=5";

      const response = await fetch(endpoint, {
        method: "GET",
      });
      const result = await response.json();
      if (!response.ok) {
        console.log(result);
        throw new Error("Failed to Load");
      }
      setPublicationItems(result.data.publications);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Failed to load publications.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchFilteredSearchData();
  }, []);
  return (
    <div className="my-10 sc-950:mx-20 mx-10">
      <h2 className="text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl w-1/2 m-auto my-10">
        What's New
      </h2>
      {isLoading ? (
        <div className="flex items-center justify-center gap-2 sc-900:h-[450px] h-[300px]">
          <svg
            className="animate-spin h-10 w-10 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3-3-3h4z"
            ></path>
          </svg>
        </div>
      ) : (
        <div className="border-grey border-2 p-4 w-full flex sc-950:flex-row flex-col gap-10">
          <div className="sc-950:pr-7 sc-950:w-2/3 w-full">
            <div>
              <img
                className="w-full h-[400px] object-cover"
                src={`${apiUrl}${publiactionItems[0].img}`}
                alt={publiactionItems[0].title + " image"}
              />
            </div>
            <p className="text-gray-700 py-5">
              {publiactionItems[0].created_at}
            </p>
            <p className="text-xl pb-5">{publiactionItems[0].title}</p>
            <p>{publiactionItems[0].description.substr(0, 200)}.....</p>
            <button className="py-5 text-xl underline">View Post</button>
          </div>

          <div className="flex sc-950:flex-col flex-row flex-wrap gap-1 justify-center">
            {publiactionItems.slice(1).map((item) => (
              <div
                key={item.id}
                className="flex sc-950:flex-row flex-col sc-950:gap-3 sc-950:mb-5 mr-2"
              >
                <div className="w-[300px] h-[250px]">
                  <img
                    src={`${apiUrl}${item.img}`}
                    alt={item.img + " image"}
                    className="w-[300px] h-[250px] object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl pb-0">{item.title}</p>
                  <p className="text-gray-700 pb-5">{item.uploaded_at}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
