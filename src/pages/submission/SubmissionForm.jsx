export default function SubmissionForm() {
  return (
    <div className="w-full flex items-center justify-center my-[100px]">
      <form action="" className="w-full">
        <div className="flex gap-4 items-center justify-center sc-834:flex-row flex-col">
          <input
            className="submission-input sc-834:w-1/2 w-full"
            type="text"
            placeholder="First name*"
          />
          <input
            className="submission-input sc-834:w-1/2 w-full"
            type="text"
            placeholder="Last name*"
          />
        </div>
        <input
          className="submission-input w-full"
          type="email"
          placeholder="Email*"
        />
        <select
          name="typeOfSubmission"
          id="tos"
          className="submission-input w-full p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="" disabled selected>
            Type of Submission
          </option>
          <option value="Opinion">Opinion</option>
          <option value="Personal">Personal Story</option>
          <option value="Case Study">Case Study</option>
          <option value="Research and Policy Analysis">
            Research and Policy Analysis
          </option>
        </select>
        <div className="submission-input flex justify-around">
          <div className="text-gray-400">Upload your manuscript*</div>
          <input type="file" />
        </div>
        <div className="submission-input flex justify-around">
          <div className="text-gray-400">Upload a supportive Image*</div>
          <input type="file" />
        </div>
        <textarea
          className="submission-input w-full"
          name="author_bio"
          id="author_bio"
          rows="8"
          placeholder="Author's Bio*"
        ></textarea>

        <button className="bg-black text-white px-10 py-2 rounded-md" type="submit">Submit</button>
      </form>
    </div>
  );
}
