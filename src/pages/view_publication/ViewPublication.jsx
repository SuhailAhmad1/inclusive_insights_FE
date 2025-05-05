import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import Main from "./Main";
const apiUrl = import.meta.env.VITE_API_URL;

export default function ViewPublication() {
  const params = useParams();
  const [publicationData, setPublicationData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  async function fetchPublicationData() {
    try {
      let endpoint =
        apiUrl +
        "/api/publication/get_publication_data" +
        "?publication_id=" +
        params.publicationId;
      const response = await fetch(endpoint, {
        method: "GET",
      });
      const result = await response.json();
      if (!response.ok) {
        console.log(result);
        throw new Error("Failed to Load");
      }
      setPublicationData(result.data);
    } catch (error) {
      setError(true);
      toast.error("Something went wrong. Failed to load the publication.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPublicationData();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center gap-2 h-screen">
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
      ) : isError ? (
            <div>
                <p className="px-5 text-center h-[92vh] text-gray-600 sc-650:text-3xl text-2xl flex justify-center items-center">Somthing went wrong. Please try again later.</p>
            </div>
      ) : (
        <Main
          id={publicationData.id}
          title={publicationData.title}
          img={`${apiUrl}${publicationData.img}`}
          author={publicationData.author}
          created_at={publicationData.created_at}
          description={publicationData.description}
          category={publicationData.category}
          image_description={publicationData.image_description}
        />
      )}
    </>
  );
}
