import { useState } from "react";

const MAX_DESCRIPTION_LENGTH = 100; // Maximum length of the description before truncating

const CategoryCard = ({ category, isExpanded, onToggle }) => {
  const {
    strCategoryThumb: imgUrl,
    strCategory: header,
    strCategoryDescription: description,
    idCategory: id,
  } = category;

  return (
    <li className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={imgUrl}
        alt={header}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {header}
        </h2>
        <p className="text-gray-600">
          {isExpanded
            ? description
            : `${description.substring(0, MAX_DESCRIPTION_LENGTH)}${description.length > MAX_DESCRIPTION_LENGTH ? '...' : ''}`
          }
        </p>
        {description.length > MAX_DESCRIPTION_LENGTH && (
          <button
            onClick={() => onToggle(id)}
            className="text-blue-500 hover:underline mt-2"
          >
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        )}
      </div>
    </li>
  );
};

export default CategoryCard;
