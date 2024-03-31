// import { Component } from "react";
import { useState } from "react";
import PCP from "./PCP/PCP";
import Cartograph from "./Cartograph/Cartograph"
import Histogram from "./Histogram/Histogram";
import PSets from "./PSets/PSets";
import CorrelationMatrix from "./CorrelationMatirx/CorrelationMatrix";
const Tabs = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const renderComponent = (component) => {
        setActiveComponent(component);
    }
    return (
      <div>
  <div className="sm:hidden">
      {/* <label htmlFor="tabs" className="sr-only">Select your country</label> */}
      {/*<select id="tabs" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option>Parallel Coordinates</option>
          <option>Cartograph</option>
          <option>Parallel Sets</option>
          <option>Histogram</option>
          <option>Correlation Matrix</option>
    </select>*/}
  </div>
  <ul className="hidden text-sm font-medium text-center text-gray-700 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 md:mx-1">
      <li className="w-full focus-within:z-10">
          <a href="#" className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 rounded-s-lg hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={() => renderComponent('PCP')}>Parallel Coordinates</a>
      </li>
      <li className="w-full focus-within:z-10">
          <a href="#" className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={() => renderComponent('Cartograph')}>Cartograph</a>
      </li>
      <li className="w-full focus-within:z-10">
          <a href="#" className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"  onClick={() => renderComponent('PSets')}>Parallel Sets</a>
      </li>
      <li className="w-full focus-within:z-10">
          <a href="#" className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:bg-blue-700 focus:text-white focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"  onClick={() => renderComponent('Histogram')}>Histogram</a>
      </li>
      <li className="w-full focus-within:z-10">
          <a href="#" className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-blue-700 focus:text-white dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"  onClick={() => renderComponent('CorrelationMatrix')}>Correlation Matrix</a>
      </li>
  </ul>
  <div className="mt-8">
  {activeComponent === 'PCP' && <PCP />}
  {activeComponent === 'Cartograph' && <Cartograph />}
  {activeComponent === 'Histogram' && <Histogram />}
  {activeComponent === 'PSets' && <PSets />}
  {activeComponent === 'CorrelationMatrix' && <CorrelationMatrix />}
</div>
      </div>
    )
  }
  
  export default Tabs
  