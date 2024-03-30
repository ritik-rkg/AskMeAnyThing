import React from 'react';

const PropertyBadges = ({ properties }) => {
  return (
    <div className="flex flex-wrap justify-center mt-2 mx-2">
      {properties.map((property, index) => (
        <a
          key={index}
          href="#"
          className="bg-white hover:bg-blue-50 focus:bg-blue-500 focus:text-white text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center mb-2"
        >
          {property}
        </a>
      ))}
    </div>
  );
};

export default PropertyBadges;
