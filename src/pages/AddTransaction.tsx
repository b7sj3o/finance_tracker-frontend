import { useState } from "react";
import { bus,coin,entertaiment,shopping,utilities,food } from '../assets';
type Category = { name: string; icon: string };

const AddTransaction = () => {
  const [selectedType, setSelectedType] = useState("income");
  const [amount, setAmount] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedDate(event.target.value);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 25) {
      setAmount(value);
    }
  };

  const handleReset = () => {
    setAmount("");
  };

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <div className="container flex items-center flex-col mx-auto p-7 w-[90%]">
      <h2 className="transaction__header text-center font-bold mb-7">Add New</h2>

      <div className="transaction__switcherBox flex bg-gray-200 rounded-full p-1 mb-4 w-[80%]">
        <button
          className={`transaction_switcher px-4 py-2 rounded-full w-[50%] ${
            selectedType === "income" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => setSelectedType("income")}
        >
          Income
        </button>
        <button
          className={`transaction_switcher px-4 py-2 rounded-full w-[50%] ${
            selectedType === "expenses" ? "bg-black text-white" : "text-black"
          }`}
          onClick={() => setSelectedType("expenses")}
        >
          Expenses
        </button>
      </div>

      <div className="transaction__mainInput-wrapper flex items-center justify-between w-[70%] mx-auto">
        <div className="flex items-center text-4xl font-bold">
          <span className="mr-2">$</span>
          <input
            maxLength={25}
            type="number"
            className="transaction__mainInput border-none outline-none w-full p-2"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
          />
        </div>
        <button onClick={handleReset} className="text-2xl text-gray-500 ml-4">
          ✖
        </button>
      </div>

      <div className="transaction__type-wrapper w-[70%] mx-auto mt-4 relative ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-3 w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none"
        >
          {selectedCategory ? (
            <span className="flex items-center justify-center">
              <img src={selectedCategory.icon} alt={selectedCategory.name} className="w-5 h-5 mr-2 " />
              <span className="font-bold">{selectedCategory.name}</span>
            </span>
          ) : (
            <span className="font-bold">Select category</span>
          )}
        </button>

        {isOpen && (
          <ul className=" mb-3 transaction__type-list relative mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-0 overflow-y-auto h-44">
            <li
              className="transaction__type-item flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-gray-100 "
              onClick={() => handleSelectCategory({ name: "Restaurants", icon: food })}
            >
              <div className="transaction__type-item flex mr-2 font-bold"><img src={food} alt="food icon" className="w-5 h-5 mr-2 font-bold" />Restaurants</div>
            </li>
            <li
              className="transaction__type-item flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-gray-100 "
              onClick={() => handleSelectCategory({ name: "Transport", icon: bus })}
            >
              <div className=" flex mr-2 font-bold"><img src={bus} alt="bus icon" className="w-5 h-5 mr-2 font-bold" />Transport</div>
            </li>
            <li
              className="transaction__type-item flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-gray-100 "
              onClick={() => handleSelectCategory({ name: "Shopping", icon: shopping })}
            >
              <div className="flex mr-2 font-bold"><img src={shopping} alt="food icon" className="w-5 h-5 mr-2 font-bold" />Shopping</div>
            </li>
            <li
              className="transaction__type-item flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-gray-100 "
              onClick={() => handleSelectCategory({ name: "Savings", icon: coin })}
            >
              <div className="flex mr-2 font-bold"><img src={coin} alt="food icon" className="w-5 h-5 mr-2 font-bold" />Savings</div>
            </li>
            <li
              className="transaction__type-item flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-gray-100 "
              onClick={() => handleSelectCategory({ name: "Entertaiment", icon: entertaiment })}
            >
              <div className=" flex mr-2 font-bold"><img src={entertaiment} alt="bus icon" className="w-5 h-5 mr-2 font-bold" />Entertaiment</div>
            </li>
            <li
              className="transaction__type-item flex justify-center items-center px-4 py-2 cursor-pointer hover:bg-gray-100 "
              onClick={() => handleSelectCategory({ name: "Utilities", icon: utilities })}
            >
              <div className=" flex mr-2 font-bold"><img src={utilities} alt="bus icon" className="w-5 h-5 mr-2 font-bold" />Utilities</div>
            </li>
          </ul>
        )}
      </div>
      <div className="transaction__more w-[90%]">
            <input type="date" id="date" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none mb-3" value={selectedDate} onChange={handleChange}/>
            <input type="text" placeholder="Description" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none" />
      </div>
      <button type="submit" className="transaction__confirmButton absolute bottom-[80px]  text-2xl bg-black text-white border border-gray-300 w-[90%] rounded-full shadow-sm focus:outline-none p-2 z-550">Confirm</button>
    </div>
  );
};

export default AddTransaction;
