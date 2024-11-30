// Quiz/Modal.jsx

import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="p-6 space-y-4 text-center bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-yellow-500">{message}</h2>
        <button
          onClick={onClose}
          className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;
