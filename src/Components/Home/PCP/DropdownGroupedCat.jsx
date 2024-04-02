import React, { useState } from 'react';
// import dropdownItems from "./Crimesdata.json"
import jsonData from '../../../data/data.json';

let uniqueArrays=[];

function getData()
{
    // Function to get unique values from an array
    const getUniqueValues = (arr) => [...new Set(arr)];
  
    // Function to create arrays for each unique value type
    const createArraysForUniqueValues = (jsonData) => {
      const uniqueValues = {};
      
      // Iterate through each key-value pair in the data
      for (const key in jsonData[0]) {
        const value = jsonData[0][key];
        
        // If the value type is not already a key in the uniqueValues object, create an empty array for it
        if (!uniqueValues[value]) {
          uniqueValues[value] = [];
        }
        
        // Push the key to the corresponding array for its value type
        uniqueValues[value].push(key);
      }
      
      return uniqueValues;
    };
    
    // Call the function to create arrays for each unique value type
    uniqueArrays = createArraysForUniqueValues(jsonData);
    
    // console.log(uniqueArrays);
}

const DropdownGroupedCat = () => {

  getData();
  const DropdownItems=uniqueArrays['mcqmr'];
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown toggle */}
      <button
        id="dropdownBgHoverButton"
        onClick={toggleDropdown}
        className="text-white w-64 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-10 py-2.5 text-center inline-flex items-center justify-between dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Multi-Categorical
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div id="dropdownBgHover" className="z-10 absolute w-64 max-h-72 overflow-y-auto bg-white rounded-lg shadow dark:bg-gray-700">
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownBgHoverButton">
          {DropdownItems.map((item, index) => (
            <li key={index}>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  id={`checkbox-item-${item}`}
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-600 dark:border-gray-500"
                />
                <label 
                  // htmlFor="checkbox-item-4"
                  htmlFor={`checkbox-item-${item}`}
                  className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                >
                  {item}
                </label>
              </div>
            </li>
          ))
          }
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownGroupedCat;