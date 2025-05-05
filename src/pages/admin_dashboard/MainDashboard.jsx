import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import published_logo from "../../assets/ad_pub.svg";
import pending_logo from "../../assets/ad_pen.svg";
import rejected_logo from "../../assets/ad_rej.svg";
import submissions_logo from "../../assets/submission.svg";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
const apiUrl = import.meta.env.VITE_API_URL;

export default function MainDashboard() {
  const navigate = useNavigate();
  const today = new Date();

  // Convert to IST
  const toISTDateString = (date) => {
    const istOffset = 5.5 * 60; // IST is UTC +5:30
    const istTime = new Date(date.getTime() + istOffset * 60 * 1000);
    return istTime.toISOString().split("T")[0];
  };

  const formattedToday = toISTDateString(today);

  // Get previous month
  const prevMonth = new Date(today);
  prevMonth.setMonth(prevMonth.getMonth() - 1);

  // If day mismatch, go to last day of previous month
  if (today.getDate() !== prevMonth.getDate()) {
    prevMonth.setDate(0);
  }

  const formattedPrevMonth = toISTDateString(prevMonth);

  const [startDate, setStartDate] = useState(formattedPrevMonth);
  const [endDate, setEndDate] = useState(formattedToday);
  const [submissionType, setSubmissionType] = useState("All");
  const [publicationItems, setPublicationItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);

  async function fetchAllSubmissionData() {
    try {
      setIsLoading(true);
      const access_token = localStorage.getItem("access_token");

      let endpoint =
        apiUrl +
        "/api/admin/get_all_submissions" +
        "?start_date=" +
        startDate +
        "&end_date=" +
        endDate +
        "&category=" +
        submissionType;

      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      const result = await response.json();
      if (!response.ok) {
        console.log(result);
        if (response.status === 401) {
          navigate("/login");
        }
        throw new Error("Failed to Load");
      }
      setPublicationItems(result.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Failed to load publications.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAllSubmissionData();
  }, []);

  function handleGetData() {
    // console.log(startDate, endDate, submissionType)
    fetchAllSubmissionData();
  }

  return (
    <div className="px-5 py-5">
      <h2 className="text-[#243874] text-xl font-medium">Admin Dashboard</h2>
      <div className="flex gap-10 my-6 justify-normal font-medium">
        <div className="w-[20%]">
          <p className="text-gray-700 font-medium mb-1">Start Date</p>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="border bg-[#F8F8F8] border-gray-300 rounded p-2 shadow-sm w-full"
          />
        </div>
        <div className="w-[20%]">
          <p className="text-gray-700 mb-1">End Date</p>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border bg-[#F8F8F8] border-gray-300 rounded p-2 shadow-sm w-full"
          />
        </div>
        <div className="w-[20%]">
          <p className="text-gray-700 mb-1">Submission Type</p>
          <select
            className="w-full bg-[#F8F8F8] border h-11  border-gray-300 p-2 rounded shadow-sm mr-5"
            name="submission_type"
            id="submission_type"
            onChange={(e) => setSubmissionType(e.target.value)}
          >
            <option value="All" defaultValue>
              All
            </option>
            <option value="Opinion">Opinion</option>
            <option value="Personal Story">Personal Story</option>
            <option value="Case Study">Case Study</option>
            <option value="Research And Policy Analysis">
              Research And Policy Analysis
            </option>
          </select>
        </div>
        <div className="">
          <button
            onClick={handleGetData}
            className="bg-[#243874] mt-8 text-white px-4 py-2 rounded shadow-md"
          >
            Get Data
          </button>
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
      ) : publicationItems ? (
        <>
          <div className="flex gap-10 justify-normal">
            <div className="flex gap-2 w-[20%] border border-[#EDEDED] rounded items-center">
              <div className="bg-[#0400ff] bg-opacity-[12%] h-[80px] w-[80px] flex items-center justify-center">
                <img
                  className="w-[30px]"
                  src={submissions_logo}
                  alt="Submission image that represent total number of submissions done"
                />
              </div>
              <div className="px-2">
                <p className="text-xl font-bold">
                  {publicationItems.total_submissions}
                </p>
                <p>Submitted</p>
              </div>
            </div>

            <div className="flex gap-2 w-[20%] border border-[#EDEDED] rounded items-center">
              <div className="bg-[#00C62C] bg-opacity-[12%] h-[80px] w-[80px] flex items-center justify-center">
                <img
                  className="w-[40px]"
                  src={published_logo}
                  alt="Upward arrows that represent number of submissions published already"
                />
              </div>
              <div className="px-2">
                <p className="text-xl font-bold">
                  {publicationItems.total_published}
                </p>
                <p>Published</p>
              </div>
            </div>

            <div className="flex gap-2 w-[20%] border border-[#EDEDED] rounded items-center">
              <div className="bg-[#FFA82E] bg-opacity-[12%] h-[80px] w-[80px] flex items-center justify-center">
                <img
                  className="w-[40px]"
                  src={pending_logo}
                  alt="watch that represent the submissions that are submitted by not yet published or rejected"
                />
              </div>
              <div className="px-2">
                <p className="text-xl font-bold">
                  {publicationItems.total_pending}
                </p>
                <p>Pending</p>
              </div>
            </div>

            <div className="flex gap-2 w-[20%] border border-[#EDEDED] rounded items-center">
              <div className="bg-[#ED1010] bg-opacity-[20%] h-[80px] w-[80px] flex items-center justify-center">
                <img
                  className="w-[40px]"
                  src={rejected_logo}
                  alt="Cross that represent the submissions rejected by admin"
                />
              </div>
              <div className="px-2">
                <p className="text-xl font-bold">
                  {publicationItems.total_rejected}
                </p>
                <p>Rejected</p>
              </div>
            </div>
            <div></div>
          </div>

          <TableData publications={publicationItems.publications} refreshSubmissionData={handleGetData} />
        </>
      ): <div className="text-center mt-64 text-2xl">No Data Found</div>}
    </div>
  );
}
