import React, { useState } from "react";
import Heatmap from "./Cartograph/Heatmap";


const Tabs = () => {
  const [activeTab, setActiveTab] = useState('PCP');

  const renderComponent = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-gray-100 py-2">

      <div className="">
        {/* {activeTab === 'PCP' && <PCP />} */}
        {/* {activeTab === 'Cartograph' &&} */}
        {/* <Cartograph /> */}
        <Heatmap/>
        {/* {activeTab === 'Histogram' && <Histogram />} */}
        {/* {activeTab === 'PSets' && <PSets />} */}
        {/* {activeTab === 'CorrelationMatrix' && <CorrelationMatrix />} */}
      </div>
    </div>
  );
};

export default Tabs;
