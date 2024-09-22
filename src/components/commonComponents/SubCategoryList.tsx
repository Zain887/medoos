import React from 'react';
import { Subcategory } from '../../type'; // Import the Subcategory type

interface Props {
  subcategories: Subcategory[];  // Array of all subcategories passed as props
  selectedCategoryId: string;    // The ID of the selected category to filter subcategories
}

const SubCategoryList: React.FC<Props> = ({ subcategories, selectedCategoryId }) => {
  // Filter the subcategories based on the selected category
  const filteredSubcategories = subcategories.filter(
    (subcategory) => subcategory.categoryId === selectedCategoryId
  );

  return (
    <div className='p-5'>
      <h2 className="text-2xl font-bold mb-4">Subcategories</h2>
      {filteredSubcategories.length > 0 ? (
        <ul className="space-y-4">
          {filteredSubcategories.map((subcategory) => (
            <li
              key={subcategory.id}
              className="p-4 border rounded shadow hover:bg-gray-100 transition-colors"
            >
              <h3 className="text-lg font-semibold">{subcategory.name}</h3>
              {subcategory.description && (
                <p className="text-sm text-gray-600">{subcategory.description}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No subcategories available for this category.</p>
      )}
    </div>
  );
};

export default SubCategoryList;
