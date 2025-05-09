import React, { useState } from "react";

export default function DeleteModal({ onCancel, onConfirm }) {
  return (
    <div className="">
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
          <p className="mb-4">Are you sure you want to delete this item?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
