import React, { useState } from 'react';

const PropertyBadges = ({ properties }) => {
  const [selectedBadges, setSelectedBadges] = useState([]);

  const toggleBadge = (index) => {
    if (selectedBadges.includes(index)) {
      setSelectedBadges(selectedBadges.filter((badgeIndex) => badgeIndex !== index));
    } else {
      setSelectedBadges([...selectedBadges, index]);
    }
  };

  return (
    <div className="flex flex-wrap justify-center mx-2">
      {properties.map((property, index) => (
        <a
          key={index}
          href="#"
          onClick={() => toggleBadge(index)}
          className={`text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center mb-2 ${
            selectedBadges.includes(index) ? 'bg-blue-800 text-white' : 'hover:bg-blue-50 '
          }`}
        >
          {property}
        </a>
      ))}
    </div>
  );
};

export default PropertyBadges;
