import { useState } from "react";

export default function SubmissionForm() {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    publication_title: "",
    submission_type: "",
    main_docx: null,
    supporting_image: null,
    author_bio: "",
  });

  const [inputErrors, setInputError] = useState({
    first_name: false,
    last_name: false,
    email: false,
    publication_title: false,
    submission_type: false,
    main_docx: false,
    supporting_image: false,
    author_bio: false,
  });

  const [inputErrorMessage, setInputErrorMessage] = useState("");

  function handleInputChange(e) {
    const { name, value, type, files } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  }

  function getFileExtension(filename = "") {
    const parts = filename.split(".");
    return parts.length > 1 ? parts.pop() : ""; // Returns last part as extension
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    console.log(userData);

    setInputErrorMessage("")
    setInputError({
      first_name: false,
      last_name: false,
      email: false,
      publication_title: false,
      submission_type: false,
      main_docx: false,
      supporting_image: false,
      author_bio: false,
    });

    if (userData.first_name.length === 0) {
      setInputError((prev) => ({
        ...prev,
        first_name: true,
      }));
      setInputErrorMessage("Invalid first name")
      return;
    }

    if (userData.last_name.length === 0) {
      setInputError((prev) => ({
        ...prev,
        last_name: true,
      }));
      setInputErrorMessage("Invalid second name")
      return;
    }

    if (userData.email.length === 0) {
      setInputError((prev) => ({
        ...prev,
        email: true,
      }));
      setInputErrorMessage("Invalid email")
      return;
    }

    if (userData.publication_title.length === 0) {
      setInputError((prev) => ({
        ...prev,
        publication_title: true,
      }));
      setInputErrorMessage("Invalid publication title")
      return;
    }

    if (userData.submission_type.length === 0) {
      setInputError((prev) => ({
        ...prev,
        submission_type: true,
      }));
      setInputErrorMessage("Invalid submission type")
      return;
    }

    if (
      !userData.main_docx ||
      getFileExtension(userData.main_docx.name) !== "docx"
    ) {
      setInputError((prev) => ({
        ...prev,
        main_docx: true,
      }));
      setInputErrorMessage("Invalid document - Only docx is suported")
      return;
    }

    console.log(userData.supporting_image);
    console.log(getFileExtension(userData.supporting_image.name));
    if (
      !userData.supporting_image ||
      !["jpg", "jpeg", "png"].includes(
        getFileExtension(userData.supporting_image.name)
      )
    ) {
      setInputError((prev) => ({
        ...prev,
        supporting_image: true,
      }));
      setInputErrorMessage("Invalid image - Only jpg, jpeg and png are supported")
      return;
    }

    if (userData.author_bio.length === 0) {
      setInputError((prev) => ({
        ...prev,
        author_bio: true,
      }));
      setInputErrorMessage("Invalid author bio")
      return;
    }

    const formDataObject = new FormData();
    formDataObject.append("first_name", userData.first_name);
    formDataObject.append("last_name", userData.last_name);
    formDataObject.append("email", userData.email);
    formDataObject.append("publication_title", userData.publication_title);
    formDataObject.append("submission_type", userData.submission_type);
    formDataObject.append("main_docx", userData.main_docx);
    formDataObject.append("supporting_image", userData.supporting_image);
    formDataObject.append("author_bio", userData.author_bio);

    const response = await fetch(
      "http://127.0.0.1:8000/api/publication/submit_publication",
      {
        method: "post",
        body: formDataObject,
      }
    );
    const result = await response.json();

    if (response.ok) {
      console.log("Submitted successfully");
    } else {
      console.log(result.error || "Submission failed.");
    }
  }
  return (
    <div className="w-full flex items-center justify-center my-[100px]">
      <form onSubmit={handleFormSubmit} className="w-full">
        <div className="flex sc-834:gap-4 items-center justify-center sc-834:flex-row flex-col">
          <input
            className={
              inputErrors.first_name
                ? "submission-input sc-834:w-1/2 w-full input_error"
                : "submission-input sc-834:w-1/2 w-full"
            }
            type="text"
            placeholder="First name*"
            name="first_name"
            value={userData.first_name}
            onChange={handleInputChange}
          />
          <input
            className={`${
              inputErrors.last_name ? "input_error" : ""
            } submission-input sc-834:w-1/2 w-full`}
            type="text"
            placeholder="Last name*"
            name="last_name"
            value={userData.last_name}
            onChange={handleInputChange}
          />
        </div>
        <input
          className={`${
            inputErrors.email ? "input_error" : ""
          } submission-input w-full`}
          type="email"
          placeholder="Email*"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <input
          className={`${
            inputErrors.publication_title ? "input_error" : ""
          } submission-input w-full`}
          type="text"
          placeholder="Publication Title*"
          name="publication_title"
          value={userData.publication_title}
          onChange={handleInputChange}
        />
        <select
          name="submission_type"
          id="submission_type"
          className={`${
            inputErrors.submission_type ? "input_error" : ""
          } submission-input w-full p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500`}
          value={userData.submission_type}
          onChange={handleInputChange}
        >
          <option value="" defaultValue>
            Type of Submission
          </option>
          <option value="Opinion">Opinion</option>
          <option value="Personal">Personal Story</option>
          <option value="Case Study">Case Study</option>
          <option value="Research and Policy Analysis">
            Research and Policy Analysis
          </option>
        </select>

        <div
          className={`${
            inputErrors.main_docx ? "input_error" : ""
          } submission-input`}
        >
          <div className="text-gray-400">Upload your manuscript*</div>
          <input type="file" name="main_docx" onChange={handleInputChange} />
        </div>

        <div
          className={`${
            inputErrors.supporting_image ? "input_error" : ""
          } submission-input`}
        >
          <div className="text-gray-400">Upload a supportive Image*</div>
          <input
            type="file"
            name="supporting_image"
            onChange={handleInputChange}
          />
        </div>
        <textarea
          className={`${
            inputErrors.author_bio ? "input_error" : ""
          } submission-input w-full`}
          name="author_bio"
          id="author_bio"
          rows="8"
          placeholder="Author's Bio*"
          value={userData.author_bio}
          onChange={handleInputChange}
        ></textarea>

        {inputErrorMessage && <p className="text-red-500 text-xl py-5">* { inputErrorMessage }</p>}

        <button
          className="bg-black text-white px-10 py-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
