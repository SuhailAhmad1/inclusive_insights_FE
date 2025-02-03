import SubmissionForm from "./SubmissionForm";

export default function SubmitSection() {
  return (
    <div className="w-full flex sc-1218:flex-row flex-col mt-10">
      <div className="p-20 bg-black text-white sc-1218:w-1/2 w-full border-b-2  border-gray-400">
        <div className="w-full">
          <p className="sc-950:text-3xl text-2xl font-bold">
            Submission Format:
          </p>
          <ol className="sc-834:pl-20 sc-650:pl-10 pl-5 py-10 list-decimal">
            <li>
              Length: opinion pieces should be between 800-1000 words, personal
              stories should be between 1500-2000 words, case study should be
              between 1000-1500 words, research and policy analysis should not
              be less than 3000 words.
            </li>
            <li>
              File format: please submit your work in word (.docx) format only.
              Other formats would be rejected.
            </li>
            <li>
              Stile: Use clear, concise language accessible to a diverse
              audience. Follow APA or Harvard citation style for any references.
              Do not hyperlink the text.
            </li>
            <li>
              Originality: All submissions must be original and unpublished. By
              submitting, you agree not to publish the work elsewhere until
              notified.
            </li>
          </ol>
        </div>
        <div>
          <p className="sc-950:text-3xl text-2xl font-bold">
            We accept submissions on topics related to:
          </p>
          <ul className="sc-834:pl-20 sc-650:pl-10 pl-5 pt-10 list-disc">
            <li>Disability rights and advocacy.</li>
            <li>Accessibility in physical and digital spaces.</li>
            <li>Inclusive practices in workplaces and communities.</li>
            <li>Personal stories or experiences that inspire inclusion.</li>
            <li>Innovative strategies and solutions for accessibility challenges.</li>
            <li>Research, policy analysis, or case studies related to disability inclusion.</li>
          </ul>
        </div>
      </div>
      <div className="border-solid border-2 border-gray-400 sc-1218:w-1/2 w-full px-5">
        <SubmissionForm />
      </div>
    </div>
  );
}
