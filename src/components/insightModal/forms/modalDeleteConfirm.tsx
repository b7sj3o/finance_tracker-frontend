import React from "react";
import ModalButton from "../modalButton";

interface DeleteConfirmProps {
  isDeleteConfirmVisible: boolean;
  cancelDelete: () => void;
}

const ModalDeleteConfirm: React.FC<DeleteConfirmProps> = ({
  isDeleteConfirmVisible,
  cancelDelete,
}) => {
  return (
    <>
      <div
        className={`transition-all duration-700 transform overflow-hidden ${
          isDeleteConfirmVisible
            ? "max-h-screen opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <h3 className="text-xl font-semibold mb-4 text-rose-600">
          Are you sure you want to delete?
        </h3>
        <div className="flex">
          <ModalButton
            label="Yes, delete"
            className="bg-pink-800 hover:bg-pink-700 active:bg-pink-600"
          />
          <ModalButton
            label="Cancel"
            className="bg-gray-300 hover:bg-gray-200 text-gray-800 ml-3"
            onClick={cancelDelete}
          />
        </div>
      </div>
    </>
  );
};

export default ModalDeleteConfirm;
