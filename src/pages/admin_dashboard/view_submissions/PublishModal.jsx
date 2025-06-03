import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" aria-label="Select heading level">
      <option value="2">Heading 2</option>
      <option value="3">Heading 3</option>
      <option value="">Normal</option>
    </select>

    <button className="ql-bold" aria-label="Bold"></button>
    <button className="ql-italic" aria-label="Italic"></button>
    <button className="ql-underline" aria-label="Underline"></button>

    <select className="ql-align" aria-label="Text alignment">
      <option selected></option>
      <option value="center"></option>
      <option value="right"></option>
      <option value="justify"></option>
    </select>

    <button className="ql-link" aria-label="Insert link"></button>
    <button className="ql-image" aria-label="Insert image"></button>

    <button
      className="ql-list"
      value="ordered"
      aria-label="Numbered list"
    ></button>
    <button
      className="ql-list"
      value="bullet"
      aria-label="Bullet list"
    ></button>
  </div>
);

export default function PublishModal({ onCancel, onConfirm, description }) {
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
    imageResize: {
      modules: ["Resize", "DisplaySize", "Toolbar"],
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "align",
    "link",
    "image",
    "list",
    "bullet",
  ];

  Quill.register("modules/imageResize", ImageResize);

  const [contentValue, setContentValue] = useState(description);
  return (
    <div className="">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white p-6 rounded shadow-md">
          <div>
            <p>
              Please {description ? "edit" : "input"} the manuscript content
            </p>
            <div className="py-5">
              <CustomToolbar />
              <ReactQuill
                className="sc-1450:h-[500px] h-[320px] w-[300px] sc-650:w-[650px] sc-900:w-[800px] sc-1218:w-[1000px] sc-1450:w-[1300px]"
                theme="snow"
                modules={modules}
                formats={formats}
                value={contentValue}
                onChange={setContentValue}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 hover:bg-gray-400 bg-gray-300 rounded transition duration-200"
            >
              Cancel
            </button>
            <button
              onClick={() => onConfirm(contentValue)}
              className="px-4 py-2 hover:bg-green-800 bg-green-700 text-white rounded disabled:opacity-50 transition duration-200"
              disabled={!contentValue.trim()}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
