import React, { useEffect, useState } from "react";
import FilterButton from "../../components/FilterButton";
import search_icon from "../../assets/search_logo.svg";
import PublicationItem from "./PublicationItem";
import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_API_URL;

export default function Main() {
  const [publiactionItems, setPublicationItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParam, setSeaacrhParam] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [isNext, setIsNext] = useState(false);
  const [isFilterActive, setFilterActive] = useState({
    All: true,
    Opinion: false,
    "Personal Story": false,
    "Case Study": false,
    "Research And Policy Analysis": false,
  });

  async function fetchFilteredSearchData(filter_by) {
    try {
      setIsLoading(true);
      let endpoint =
        apiUrl +
        "/api/publication/get_publications" +
        "?page_number=" +
        pageNumber;
      if (filter_by !== "All") {
        endpoint += "&filter_by=" + filter_by;
      }
      if (searchParam) {
        endpoint += "&search_param=" + searchParam;
      }

      const response = await fetch(endpoint, {
        method: "GET",
      });
      const result = await response.json();
      if (!response.ok) {
        console.log(result);
        throw new Error("Failed to Load");
      }
      setPublicationItems(result.data.publications);
      setIsNext(result.data.next_page);
    } catch (error) {
      toast.error("Something went wrong. Failed to load publications.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleFilter(filter_by) {
    const newState = Object.fromEntries(
      Object.keys(isFilterActive).map((key) => [key, key === filter_by])
    );
    setFilterActive(newState); // State updates immediately
    setPageNumber(1);
    fetchFilteredSearchData(filter_by);
  }

  function handleSearchPublications(value) {
    setSeaacrhParam(value);
    setPageNumber(1)
  }

  function handleNextPage() {
    setPageNumber((prev) => prev + 1);
  }
  function handlePrevPage() {
    setPageNumber((prev) => prev - 1);
  }

  useEffect(() => {
    const selectedCategory = Object.entries(isFilterActive).find(
      ([key, v]) => v
    )?.[0];
    fetchFilteredSearchData(selectedCategory);
  }, [searchParam, pageNumber]);

  return (
    <>
      <div className="py-9">
        <h2 className="text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl">
          Recent Publications
        </h2>
        <p className="text-center py-4 sc-650:text-xl px-2">
          To view all the publications of a particular category, use the
          category heading after the filtered list.
        </p>
        <div className="flex gap-3 justify-center items-center flex-wrap">
          <FilterButton
            isActive={isFilterActive.All}
            onClick={() => handleFilter("All")}
          >
            All
          </FilterButton>
          <FilterButton
            isActive={isFilterActive.Opinion}
            onClick={() => handleFilter("Opinion")}
          >
            Opinion
          </FilterButton>
          <FilterButton
            isActive={isFilterActive["Personal Story"]}
            onClick={() => handleFilter("Personal Story")}
          >
            Personal Story
          </FilterButton>
          <FilterButton
            isActive={isFilterActive["Case Study"]}
            onClick={() => handleFilter("Case Study")}
          >
            Case Study
          </FilterButton>
          <FilterButton
            isActive={isFilterActive["Research And Policy Analysis"]}
            onClick={() => handleFilter("Research And Policy Analysis")}
          >
            Research And Policy Analysis
          </FilterButton>
        </div>
        <div className="flex justify-center items-center px-2 py-3 my-3 w-full">
          <div className="sc-834:w-1/2 flex border gap-2 border-gray-400 p-2 shadow-md shadow-gray-600 rounded-md">
            <img src={search_icon} alt="Search Logo" />
            <input
              className="py-1 px-1 w-full border-none outline-none"
              type="text"
              placeholder="Search"
              value={searchParam}
              onChange={(e) => handleSearchPublications(e.target.value)}
            />
          </div>
        </div>
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
          <>
            {publiactionItems.length > 0 ? (
              <>
                <div className="flex gap-8 items-center flex-wrap justify-center p-5">
                  {publiactionItems.map((item) => (
                    <PublicationItem
                      key={item.id}
                      title={item.title}
                      img={`${apiUrl}${item.img}`}
                      author={item.author}
                      created_at={item.created_at}
                      description={item.description}
                    />
                  ))}
                </div>
                <div className="flex justify-center gap-5 items-center py-5">
                  {pageNumber - 1 > 0 ? (
                    <p
                      onClick={handlePrevPage}
                      className="hover:scale-105 hover:bg-gray-300 hover:shadow-xl transform transition-transform duration-300 text-center border border-black px-8 py-2 rounded-md font-semibold cursor-pointer"
                    >
                      Prev
                    </p>
                  ) : undefined}
                  {isNext ? (
                    <p
                      onClick={handleNextPage}
                      className="hover:scale-105 hover:bg-gray-300 hover:shadow-xl transform transition-transform duration-300 text-center border border-black px-8 py-2 rounded-md font-semibold cursor-pointer"
                    >
                      Next
                    </p>
                  ) : undefined}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center sc-900:h-[450px] h-[300px]">
                <p className="text-2xl">No Data Found !</p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
