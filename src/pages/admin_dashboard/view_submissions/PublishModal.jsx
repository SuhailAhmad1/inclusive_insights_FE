import React, { useState } from "react";

export default function PublishModal({ onCancel, onConfirm, description }) {
  const [contentValue, setContentValue] = useState(description);
  return (
    <div className="">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white p-6 rounded shadow-md">
          <div>
            <p>
              Please {description ? "edit" : "input"} the manuscript content
            </p>
            <textarea
              className="border p-2"
              rows={20}
              cols={100}
              value={contentValue}
              onChange={(e) => setContentValue(e.target.value)}
            ></textarea>
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
