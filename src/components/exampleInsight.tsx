import { useState } from "react";
import { InsightModalWindow } from "./insightModal";

const ExampleInsightComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen); 
  };

  return (
    <>
      <section className={`max-w-md mx-auto bg-white rounded-lg p-4 ${isFullScreen ? 'fixed inset-0 z-50 bg-white h-full overflow-y-auto' : ''}`}>
        {/* Today */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Today</h2>
          <button
            className="text-sm text-black"
            onClick={toggleFullScreen} 
          >
            {isFullScreen ? 'Close' : 'See All'}
          </button>
        </div>

        {/* Список транзакцій */}
        <div className={`overflow-y-auto }`}>
          <article>
            <button
              className="w-full flex items-center justify-between mb-4 p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleModal}
              disabled={isModalOpen}
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18c4.418 0 8 3.582 8 8s-3.582 8-8-8-8 3.582-8-8 3.582-8 8-8zm-2 10h4v2h-4v-2zm1-8v6h2V6h-2z" />
                  </svg>
                </div>
                <div className="ml-3 text-left">
                  <p className="text-sm font-medium">Bills</p>
                  <p className="text-xs text-gray-500">27 July 2024 10:40 AM</p>
                </div>
              </div>
              <div className="text-black font-bold">-$200</div>
            </button>
          </article>
        </div>

        {/* Yesterday */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Yesterday</h2>
        </div>
      </section>

      {/* Modal */}
      <InsightModalWindow
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default ExampleInsightComponent;
