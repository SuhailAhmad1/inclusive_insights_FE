import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import RejectModal from "./RejectModal";
import PublishModal from "./PublishModal";
import { useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export default function ViewPublication() {
  const params = useParams();
  const [publicationData, setPublicationData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function fetchPublicationData() {
    try {
      const access_token = localStorage.getItem("access_token");

      let endpoint =
        apiUrl +
        "/api/admin/get_submission_data" +
        "?submission_id=" +
        params.submissionId;
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          navigate("/login");
        }
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

  async function callRejectApi() {
    try {
      const access_token = localStorage.getItem("access_token");

      let endpoint =
        apiUrl +
        "/api/admin/reject_submission?submission_id=" +
        params.submissionId;

      const response = await fetch(endpoint, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          navigate("/login");
        }
        console.log(result);
        throw new Error("Failed to Load");
      }
      toast.success("Submission rejected successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Failed to load publications.");
    }
  }

  async function downloadManuscript() {
    try {
      toast.success("Download Started");
      const access_token = localStorage.getItem("access_token");

      let endpoint =
        apiUrl +
        "/api/admin/download_manuscript?submission_id=" +
        params.submissionId;

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      // const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          navigate("/login");
        }
        console.log(result);
        throw new Error("Failed to Download");
      }

      const disposition = response.headers.get("Content-Disposition");
      let filename = publicationData.title + ".docx"; // fallback

      if (disposition && disposition.includes("filename=")) {
        const match = disposition.match(/filename="?([^"]+)"?/);
        if (match?.[1]) {
          filename = match[1];
        }
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename); // Or dynamically get from headers
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Failed to download Manuscript.");
    }
  }

  const handleCancelModal = () => {
    setShowRejectModal(false);
    setShowPublishModal(false);
  };

  const handleConfirmReject = async () => {
    await callRejectApi();
    await fetchPublicationData();
    setShowRejectModal(false);
  };

  async function publishSubmission(content) {
    try {
      const access_token = localStorage.getItem("access_token");

      let endpoint = apiUrl + "/api/admin/publish_submission";

      const request_data = {
        submission_id: params.submissionId,
        content: content,
      };
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request_data),
      });

      const result = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          navigate("/login");
        }
        console.log(result);
        throw new Error("Failed to Publish");
      }
      toast.success("Submission published successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Failed to publish submission.");
    }
  }
  const handleConfirmPublish = async (contentValue) => {
    await publishSubmission(contentValue);
    await fetchPublicationData();
    setShowPublishModal(false);
  };

  function handleRejectClick() {
    setShowRejectModal(true);
  }

  function handlePublishClick() {
    setShowPublishModal(true);
  }

  return (
    <>
      {showRejectModal && (
        <RejectModal
          onCancel={handleCancelModal}
          onConfirm={handleConfirmReject}
        />
      )}

      {showPublishModal && (
        <PublishModal
          onCancel={handleCancelModal}
          onConfirm={handleConfirmPublish}
          description={publicationData.description}
        />
      )}
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
          <p className="px-5 text-center h-[92vh] text-gray-600 sc-650:text-3xl text-2xl flex justify-center items-center">
            Somthing went wrong. Please try again later.
          </p>
        </div>
      ) : (
        <div className="min-h-screen sc-1218:w-[90%] mx-auto py-10 sc-834:px-20 sc-650:px-10 px-6">
          <div className="px-1 pt-2">
            <div className="text-xl flex gap-2 justify-start items-center">
              <span className="font-bold text-[#606060]">Title :</span>
              <p className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
                {publicationData.title}
              </p>
            </div>

            <div className="sc-650:py-2 text-xl flex items-start justify-between flex-col sc-650:flex-row sc-650:items-center">
              <p>
                <span className="font-semibold text-[#606060]">
                  Submitted at :{" "}
                </span>
                <span className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
                  {publicationData.created_at}
                </span>
              </p>
              <p>
                <span className="font-semibold text-[#606060]">
                  Category :{" "}
                </span>

                <span className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
                  {publicationData.category}
                </span>
              </p>
            </div>

            <div className="sc-650:pb-2 flex text-xl items-start justify-between flex-col sc-650:flex-row sc-650:items-center">
              <div className="flex gap-2 justify-start items-center">
                <span className="font-semibold text-[#606060]">Author : </span>
                <p className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
                  {publicationData.author}
                </p>
              </div>
              <p>
                <span className="font-semibold text-[#606060]">Email : </span>
                <span className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
                  {publicationData.email}
                </span>
              </p>
            </div>

            <div className="pb-5 text-xl flex flex-col gap-2">
              <p className="font-semibold text-[#606060]">Author's Bio :</p>
              <p className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
                {publicationData.author_bio}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full h-[300px] sc-650:h-[500px] overflow-hidden">
            <img
              className="w-full h-full object-fill sc-650:object-cover rounded-md"
              src={`${apiUrl}${publicationData.img}`}
              alt={`${publicationData.title}_image`}
            />
          </div>
          <div className="pt-5 text-xl flex flex-col gap-2 ">
            <p className="font-semibold text-[#606060]">
              Given Image Description :{" "}
            </p>
            <p className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
              {publicationData.image_description}
            </p>
          </div>

          {publicationData.description && (
            <div className="pt-2 flex text-xl flex-col gap-2">
              <p className="font-semibold text-[#606060]">
                Content Uploaded By Admin :{" "}
              </p>
              <div className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg whitespace-pre-line">
                {publicationData.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index} className="mb-6">
                      {paragraph.split("\n").map((line, lineIndex) => (
                        <>
                          {line}
                          {lineIndex !== paragraph.split("\n").length - 1 && (
                            <br />
                          )}
                        </>
                      ))}
                    </p>
                  ))}
              </div>
            </div>
          )}

          <div className="pt-2 flex gap-2 items-center">
            <span className="text-xl font-semibold text-[#606060]">
              Download Manuscript :
            </span>
            <div
              onClick={downloadManuscript}
              className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-semibold py-1 px-6 rounded transition duration-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                title="Download Icon to download the manuscript uploaded by the user"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 9V13C14 13.1326 13.9473 13.2598 13.8536 13.3536C13.7598 13.4473 13.6326 13.5 13.5 13.5H2.5C2.36739 13.5 2.24021 13.4473 2.14645 13.3536C2.05268 13.2598 2 13.1326 2 13V9C2 8.86739 2.05268 8.74021 2.14645 8.64645C2.24021 8.55268 2.36739 8.5 2.5 8.5C2.63261 8.5 2.75979 8.55268 2.85355 8.64645C2.94732 8.74021 3 8.86739 3 9V12.5H13V9C13 8.86739 13.0527 8.74021 13.1464 8.64645C13.2402 8.55268 13.3674 8.5 13.5 8.5C13.6326 8.5 13.7598 8.55268 13.8536 8.64645C13.9473 8.74021 14 8.86739 14 9ZM7.64625 9.35375C7.69269 9.40024 7.74783 9.43712 7.80853 9.46228C7.86923 9.48744 7.93429 9.50039 8 9.50039C8.06571 9.50039 8.13077 9.48744 8.19147 9.46228C8.25217 9.43712 8.30731 9.40024 8.35375 9.35375L10.8538 6.85375C10.9002 6.8073 10.9371 6.75214 10.9622 6.69145C10.9873 6.63075 11.0003 6.5657 11.0003 6.5C11.0003 6.4343 10.9873 6.36925 10.9622 6.30855C10.9371 6.24786 10.9002 6.1927 10.8538 6.14625C10.8073 6.09979 10.7521 6.06294 10.6914 6.0378C10.6308 6.01266 10.5657 5.99972 10.5 5.99972C10.4343 5.99972 10.3692 6.01266 10.3086 6.0378C10.2479 6.06294 10.1927 6.09979 10.1462 6.14625L8.5 7.79313V2C8.5 1.86739 8.44732 1.74021 8.35355 1.64645C8.25979 1.55268 8.13261 1.5 8 1.5C7.86739 1.5 7.74021 1.55268 7.64645 1.64645C7.55268 1.74021 7.5 1.86739 7.5 2V7.79313L5.85375 6.14625C5.75993 6.05243 5.63268 5.99972 5.5 5.99972C5.36732 5.99972 5.24007 6.05243 5.14625 6.14625C5.05243 6.24007 4.99972 6.36732 4.99972 6.5C4.99972 6.63268 5.05243 6.75993 5.14625 6.85375L7.64625 9.35375Z"
                  fill="white"
                />
              </svg>
              <button>Download</button>
            </div>
          </div>

          <div className="pt-2 text-xl flex gap-2">
            <p className="font-semibold text-[#606060]">
              Current Submission Status :{" "}
            </p>
            <p className="bg-[#F8F8F8] px-2 py-1 rounded shadow-lg">
              {publicationData.status}
            </p>
          </div>

          <div className="pt-5 flex justify-center gap-6 font-semibold">
            <div
              onClick={handlePublishClick}
              className="bg-[#16852D] hover:bg-green-800 text-white px-8 py-1 rounded cursor-pointer transition duration-200"
            >
              {publicationData.status == "Published" ? "Republish" : "Publish"}
            </div>
            <div
              onClick={handleRejectClick}
              className="bg-[#DE403E] hover:bg-red-800 text-white px-8 py-1 rounded cursor-pointer transition duration-200"
            >
              Reject
            </div>
          </div>
        </div>
      )}
    </>
  );
}
