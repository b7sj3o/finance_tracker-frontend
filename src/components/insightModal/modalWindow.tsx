import React, { useEffect, useRef, useState } from "react";
import ModalButton from "./modalButton";
import ModalEditForm from "./forms/modalEditForm";
import ModalDeleteConfirm from "./forms/modalDeleteConfirm";

interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const InsightModalWindow: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [isDeleteConfirmVisible, setIsDeleteConfirmVisible] = useState(false);

  const openTimeoutRef = useRef<number | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const toggleEditForm = () => {
    setIsDeleteConfirmVisible(false);
    setIsEditFormVisible(!isEditFormVisible);
  };

  const toggleDeleteConfirm = () => {
    setIsDeleteConfirmVisible(!isDeleteConfirmVisible);
    setIsEditFormVisible(false);
  };

  const cancelDelete = () => {
    setIsDeleteConfirmVisible(false);
  };

  const toggleModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      setTimeout(() => setIsModalVisible(true), 10);
    } else {
      setIsModalVisible(false);
      setTimeout(() => setIsModalOpen(false), 300);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }

      openTimeoutRef.current = setTimeout(() => {
        setIsModalVisible(true);
      }, 10);
    } else {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
      }

      setIsModalVisible(false);

      setIsEditFormVisible(false);
      setIsDeleteConfirmVisible(false);
      closeTimeoutRef.current = setTimeout(() => {
        setIsModalOpen(false);
      }, 300);
    }

    return () => {
      if (openTimeoutRef.current) {
        clearTimeout(openTimeoutRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isModalOpen]);

  return (
    <section className={isModalOpen ? "" : "hidden"}>
      {/* Bg blur */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 backdrop-blur-sm bg-white/40 ${
          isModalVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={toggleModal}
      ></div>

      {/* Modal Window */}
      <div className="fixed inset-0 flex items-center justify-center z-50 mx-4">
        <div
          className={`bg-white p-8 rounded-2xl border-0 shadow-lg max-w-md w-full transition-transform transform duration-1000 ${
            isModalVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 grayscale hover:grayscale-0 transition-transform duration-300 transform hover:scale-110"
            onClick={toggleModal}
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.3 5.71a1 1 0 00-1.42 0L12 10.59 7.12 5.71a1 1 0 00-1.42 1.42L10.59 12l-4.88 4.88a1 1 0 001.42 1.42L12 13.41l4.88 4.88a1 1 0 001.42-1.42L13.41 12l4.88-4.88a1 1 0 000-1.42z" />
            </svg>
          </button>

          {/* Modal Insight Info */}
          <h2 className="text-2xl font-semibold mb-4">Name</h2>
          <p className="text-base leading-6 mb-2">expense description</p>
          <p className="text-base leading-6">27 July 2024 10:40 AM</p>

          {/* Modal Delete Edit Buttons */}
          <div className="mt-4 flex-row">
            <ModalButton
              label="Edit"
              onClick={toggleEditForm}
              className="bg-gray-900 hover:bg-gray-700 active:bg-slate-500 font-semibold"
            />
            <ModalButton
              label="Delete"
              onClick={toggleDeleteConfirm}
              className="bg-pink-800 hover:bg-pink-700 active:bg-rose-600 font-semibold ml-3"
            />
          </div>

          {/* Edit Form */}
          <ModalEditForm isFormVisible={isEditFormVisible} />

          {/* Delete Confirm */}
          <ModalDeleteConfirm
            isDeleteConfirmVisible={isDeleteConfirmVisible}
            cancelDelete={cancelDelete}
          />
        </div>
      </div>
    </section>
  );
};

export default InsightModalWindow;
