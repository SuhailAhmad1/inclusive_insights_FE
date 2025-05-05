import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL;

export default function TableData({ publications, refreshSubmissionData }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();

  const handleCancelDelete = () => {
    setShowModal(false);
    setSelectedId(null); // Clear selectedId on cancel
  };

  async function callDeleteAPI() {
    try {
      const access_token = localStorage.getItem("access_token");

      let endpoint =
        apiUrl + "/api/admin/delete_submission?submission_id=" + selectedId;

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
      toast.success("Submission deleted successfully.");
      refreshSubmissionData();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Failed to load publications.");
    }
  }

  const handleConfirmDelete = () => {
    callDeleteAPI();
    setSelectedId(null);
    setShowModal(false);
  };

  function handleDelete(id) {
    setSelectedId(id); // <-- store the clicked id
    setShowModal(true); // <-- open modal
  }

  return (
    <>
      {showModal && (
        <DeleteModal
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
      <div className="mt-10 border border-gray-400 rounded-md">
        <table className="table-auto border-collapse w-full">
          <thead className="text-center font-medium">
            <tr className="border-b border-gray-400">
              <th className="py-2">Submission Date</th>
              <th className="border-l border-gray-400 py-2">
                Submission Title
              </th>
              <th className="border-l border-gray-400 py-2">Submission Type</th>

              <th className="border-l border-gray-400 py-2">Author Name</th>
              <th className="border-l border-gray-400 py-2">Author Email</th>

              <th className="border-l border-gray-400 py-2">Status</th>
              <th className="border-l border-gray-400 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {publications.map((item) => (
              <tr key={item.id}>
                <td className="border-b border-gray-400 py-2 px-2">
                  {item.created_at}
                </td>
                <td className="border-l border-b border-gray-400 py-2 px-2">
                  {item.title}
                </td>
                <td className="border-l border-b border-gray-400 py-2 px-2">
                  {item.category}
                </td>
                <td className="border-l border-b border-gray-400 py-2 px-2">
                  {item.author}
                </td>
                <td className="border-l border-b border-gray-400 py-2 px-2">
                  {item.email}
                </td>
                <td className="border-l border-b border-gray-400 py-2 px-3">
                  <div className="px-2 py-1 flex items-center justify-center gap-2 text-center border border-gray-200 rounded-md">
                    {item.status == "Pending" && (
                      <div className="w-[8px] bg-yellow-300 h-[8px] rounded-full"></div>
                    )}
                    {item.status == "Published" && (
                      <div className="w-[8px] bg-green-600 h-[8px] rounded-full"></div>
                    )}
                    {item.status == "Rejected" && (
                      <div className="w-[8px] bg-red-600 h-[8px] rounded-full"></div>
                    )}
                    <div>{item.status}</div>
                  </div>
                </td>
                <td className="border-l border-b border-gray-400 py-2 px-2">
                  <div className="flex justify-center items-center px-3 gap-3">
                    <Link to={"/admin/view_submission/" + item.id}>
                      <div className="cursor-pointer">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_421_2666)">
                            <path
                              d="M18.0892 8.77219C18.0646 8.71664 17.469 7.39547 16.145 6.07148C14.3809 4.30734 12.1527 3.375 9.70019 3.375C7.24769 3.375 5.01949 4.30734 3.25534 6.07148C1.93136 7.39547 1.333 8.71875 1.3112 8.77219C1.27922 8.84413 1.2627 8.92198 1.2627 9.0007C1.2627 9.07943 1.27922 9.15728 1.3112 9.22922C1.33581 9.28477 1.93136 10.6052 3.25534 11.9292C5.01949 13.6927 7.24769 14.625 9.70019 14.625C12.1527 14.625 14.3809 13.6927 16.145 11.9292C17.469 10.6052 18.0646 9.28477 18.0892 9.22922C18.1212 9.15728 18.1377 9.07943 18.1377 9.0007C18.1377 8.92198 18.1212 8.84413 18.0892 8.77219ZM9.70019 13.5C7.53597 13.5 5.64527 12.7132 4.08011 11.1621C3.43791 10.5235 2.89154 9.7952 2.458 9C2.89142 8.20472 3.4378 7.47645 4.08011 6.83789C5.64527 5.2868 7.53597 4.5 9.70019 4.5C11.8644 4.5 13.7551 5.2868 15.3203 6.83789C15.9637 7.4763 16.5113 8.20457 16.9459 9C16.4389 9.94641 14.2304 13.5 9.70019 13.5ZM9.70019 5.625C9.03268 5.625 8.38016 5.82294 7.82514 6.19379C7.27012 6.56464 6.83754 7.09174 6.5821 7.70844C6.32665 8.32514 6.25981 9.00374 6.39004 9.65843C6.52026 10.3131 6.8417 10.9145 7.3137 11.3865C7.78571 11.8585 8.38707 12.1799 9.04176 12.3102C9.69645 12.4404 10.375 12.3735 10.9917 12.1181C11.6084 11.8626 12.1355 11.4301 12.5064 10.875C12.8772 10.32 13.0752 9.66751 13.0752 9C13.0743 8.10518 12.7184 7.24728 12.0856 6.61454C11.4529 5.98181 10.595 5.62593 9.70019 5.625ZM9.70019 11.25C9.25518 11.25 8.82017 11.118 8.45016 10.8708C8.08015 10.6236 7.79176 10.2722 7.62146 9.86104C7.45116 9.4499 7.40661 8.9975 7.49342 8.56105C7.58024 8.12459 7.79453 7.72368 8.1092 7.40901C8.42387 7.09434 8.82478 6.88005 9.26124 6.79323C9.69769 6.70642 10.1501 6.75097 10.5612 6.92127C10.9724 7.09157 11.3238 7.37996 11.571 7.74997C11.8182 8.11998 11.9502 8.55499 11.9502 9C11.9502 9.59674 11.7131 10.169 11.2912 10.591C10.8692 11.0129 10.2969 11.25 9.70019 11.25Z"
                              fill="#126DF3"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_421_2666">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0.700195)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </Link>
                    <div
                      className="cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    >
                      <svg
                        width="19"
                        height="18"
                        viewBox="0 0 19 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8877 3.375H13.0752V2.8125C13.0752 2.36495 12.8974 1.93572 12.5809 1.61926C12.2645 1.30279 11.8352 1.125 11.3877 1.125H8.0127C7.56514 1.125 7.13592 1.30279 6.81945 1.61926C6.50298 1.93572 6.3252 2.36495 6.3252 2.8125V3.375H3.5127C3.36351 3.375 3.22044 3.43426 3.11495 3.53975C3.00946 3.64524 2.9502 3.78832 2.9502 3.9375C2.9502 4.08668 3.00946 4.22976 3.11495 4.33525C3.22044 4.44074 3.36351 4.5 3.5127 4.5H4.0752V14.625C4.0752 14.9234 4.19372 15.2095 4.4047 15.4205C4.61568 15.6315 4.90183 15.75 5.2002 15.75H14.2002C14.4986 15.75 14.7847 15.6315 14.9957 15.4205C15.2067 15.2095 15.3252 14.9234 15.3252 14.625V4.5H15.8877C16.0369 4.5 16.18 4.44074 16.2854 4.33525C16.3909 4.22976 16.4502 4.08668 16.4502 3.9375C16.4502 3.78832 16.3909 3.64524 16.2854 3.53975C16.18 3.43426 16.0369 3.375 15.8877 3.375ZM7.4502 2.8125C7.4502 2.66332 7.50946 2.52024 7.61495 2.41475C7.72044 2.30926 7.86351 2.25 8.0127 2.25H11.3877C11.5369 2.25 11.68 2.30926 11.7854 2.41475C11.8909 2.52024 11.9502 2.66332 11.9502 2.8125V3.375H7.4502V2.8125ZM14.2002 14.625H5.2002V4.5H14.2002V14.625ZM8.5752 7.3125V11.8125C8.5752 11.9617 8.51593 12.1048 8.41044 12.2102C8.30495 12.3157 8.16188 12.375 8.0127 12.375C7.86351 12.375 7.72044 12.3157 7.61495 12.2102C7.50946 12.1048 7.4502 11.9617 7.4502 11.8125V7.3125C7.4502 7.16332 7.50946 7.02024 7.61495 6.91475C7.72044 6.80926 7.86351 6.75 8.0127 6.75C8.16188 6.75 8.30495 6.80926 8.41044 6.91475C8.51593 7.02024 8.5752 7.16332 8.5752 7.3125ZM11.9502 7.3125V11.8125C11.9502 11.9617 11.8909 12.1048 11.7854 12.2102C11.68 12.3157 11.5369 12.375 11.3877 12.375C11.2385 12.375 11.0954 12.3157 10.9899 12.2102C10.8845 12.1048 10.8252 11.9617 10.8252 11.8125V7.3125C10.8252 7.16332 10.8845 7.02024 10.9899 6.91475C11.0954 6.80926 11.2385 6.75 11.3877 6.75C11.5369 6.75 11.68 6.80926 11.7854 6.91475C11.8909 7.02024 11.9502 7.16332 11.9502 7.3125Z"
                          fill="#ED1010"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
