import React from 'react';
import { HeaderImages, Category } from '../../type';
import SubCategoryList from './SubCategoryList';
import { getSubcategories } from '../../data';

interface Props {
  selectedCategory: Category;    // The selected category from the menu
  headerImages: HeaderImages[];  // Array of header images to display dynamically
}

const CategoryPage: React.FC<Props> = ({ selectedCategory, headerImages }) => {
  // Find the matching header image for the selected category
  const matchedHeaderImage = headerImages.find(
    (image) => image.article.toLowerCase() === selectedCategory.name.toLowerCase()
  );

  return (
    <div>
      {/* If a matching header image is found, display it */}
      {matchedHeaderImage ? (
        <div className="header-image-container">
          <img
            src={matchedHeaderImage.url}
            alt={matchedHeaderImage.article}
            className="w-full max-h-[760px] object-cover"
          />
          <h1 className="text-6xl font-bold text-center my-4 bg-gradient-to-b from-[#666666] to-white text-transparent bg-clip-text">
            {matchedHeaderImage.article}
          </h1>
        </div>
      ) : (
        <div>No header image found for {selectedCategory.name}</div>
      )}

      {/* Subcategory list filtered by selected category ID */}
      <SubCategoryList
        subcategories={getSubcategories()} // Fetch the subcategories
        selectedCategoryId={selectedCategory.id} // Pass the selected category ID
      />
    </div>
  );
};

export default CategoryPage;
