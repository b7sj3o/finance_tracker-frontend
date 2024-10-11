import { useState } from "react";
import { InsightTable } from "../components";
import { ExampleInsightComponent } from "../components";

const InsightPage = () => {
  const [selected, setSelected] = useState<"income" | "expense">("income");
  const currentSelection = selected === "income" ? "income" : "expense";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("Month");

  const options: string[] = ["Day", "Week", "Month", "Year"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <section className="flex justify-between items-center w-full py-4 px-6 mt-2">
        <h1 className="text-2xl font-semibold">Insights</h1>
        <div className="relative inline-block">
          <button
            className="bg-white text-gray-700 border border-gray-300 rounded-full px-4 py-2 text-sm font-medium flex items-center shadow-sm"
            onClick={toggleDropdown}
          >
            {selectedOption}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <ul className="absolute right-0 mt-2 w-36 bg-white border border-gray-300 rounded-lg shadow-lg">
              {options.map((option) => (
                <li
                  key={option}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="flex space-x-4 bg-gray-300 bg-opacity-60 rounded-full p-1 mb-6">
        {/* Incomes Button */}
        <div
          onClick={() => setSelected("income")}
          className={`flex items-center space-x-2 rounded-full py-2 px-4 cursor-pointer transition-all duration-300 ease-in-out ${
            selected === "income" ? "bg-slate-50" : ""
          }`}
        >
          <div className="bg-green-300 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500">Income</p>
            <p className="text-lg font-semibold">$2,239.87</p>
          </div>
        </div>

        {/* Expenses Button */}
        <div
          onClick={() => setSelected("expense")}
          className={`flex items-center space-x-2 rounded-full py-2 px-4 cursor-pointer transition-all duration-300 ease-in-out ${
            selected === "expense" ? "bg-slate-50" : ""
          }`}
        >
          <div className="bg-red-300 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20V4m8 8H4"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500">Expenses</p>
            <p className="text-lg font-semibold">$1,234.75</p>
          </div>
        </div>
      </section>
      <main>
        <InsightTable chartType={currentSelection} />
        <ExampleInsightComponent />
      </main>
    </>
  );
};

export default InsightPage;
