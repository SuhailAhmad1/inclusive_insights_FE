export default function HowTo() {
  return (
    <div className="pt-9">
      <h2 className="text-center font-bold sc-1218:text-5xl sc-834:text-4xl text-3xl w-1/2 m-auto">
        How to Submit
      </h2>
      <div className="w-full items-center">
        <p className="text-center m-auto py-3 text-xl w-2/3">
          We are committed to accessibility in all forms of communication.
        </p>
      </div>
      <div className="sc-950:px-10 px-5 py-9 text-xl">
        <div>
          <p className="sc-950:text-3xl text-2xl font-bold">Accessibility Requirements</p>
          <p className="pl-7 py-1">
            We are committed to accessibility in all forms of communication.
            Please ensure:
          </p>
          <ul className="list-disc px-12">
            <li>Descriptive alt text is included for all images.</li>
            <li>
              Any data visualizations or charts are accompanied by a written
              explanation.
            </li>
            <li>
              Text formatting avoids excessive capitalization or italics,
              ensuring readability.
            </li>
          </ul>
        </div>
        <div className="py-10">
          <p className="sc-950:text-3xl text-2xl font-bold">Author Bio</p>
          <p className="pl-7 py-1">
            Include a short bio (50-100 words) at the end of your submission.
            You may include links to your website or social media, if
            applicable. Upload a supportive image along your submission. The
            image should be related to the topic you are writing on.
          </p>
        </div>
        <div className="">
          <p className="sc-950:text-3xl text-2xl font-bold">Review Process</p>
          <ul className="list-disc px-12">
            <li>Submissions will be reviewed within 2-3 weeks of receipt.</li>
            <li>
              Accepted pieces may be edited for clarity, length, or tone, but we
              will seek your approval before publication.
            </li>
            <li>
              Unfortunately, we cannot provide individual feedback on all
              submissions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
