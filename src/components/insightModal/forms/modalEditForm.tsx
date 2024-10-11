import React from "react";
import ModalButton from "../modalButton";

interface EditFormProps {
  isFormVisible: boolean;
}

const ModalEditForm: React.FC<EditFormProps> = ({ isFormVisible }) => {
  return (
    <>
      <div
        className={`transition-all duration-700 transform overflow-hidden ${
          isFormVisible
            ? "max-h-screen opacity-100 mt-4"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <h3 className="text-xl font-semibold mb-2">Edit Expense</h3>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter description"
            />
          </div>

          <ModalButton
            label="Save"
            className="bg-gray-800 hover:bg-slate-700 active:bg-slate-500"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default ModalEditForm;
