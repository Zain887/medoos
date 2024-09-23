import React, { useState, useEffect } from 'react';
import { HeaderImages, Category } from '../../types';
import SubCategoryList from './SubCategoryList';
import { categories } from '../../data';
import Product from './Product';

interface Props {
    selectedCategory: Category;    // The selected category from the menu
    headerImages: HeaderImages[];  // Array of header images to display dynamically
}

const CategoryPage: React.FC<Props> = ({ selectedCategory, headerImages }) => {
    const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<string | null>(null);

    // Find the matching header image for the selected category
    const matchedHeaderImage = headerImages.find(
        (image) => image.article.toLowerCase() === selectedCategory.name.toLowerCase()
    );

    // Reset selected subcategory when the category changes
    useEffect(() => {
        setSelectedSubcategoryId(null); // Reset to show all products when category changes
    }, [selectedCategory]);

    // Function to handle subcategory selection
    const handleSelectSubcategory = (subcategoryId: string) => {
        setSelectedSubcategoryId(subcategoryId);
    };

    // Get all products from selected category if no subcategory is selected
    const allProducts = selectedCategory.subcategories.flatMap(subcat => subcat.products);
    const filteredProducts = selectedSubcategoryId 
        ? selectedCategory.subcategories
            .find(subcat => subcat.id === selectedSubcategoryId)?.products || [] 
        : allProducts; // Show all products if no subcategory is selected

    return (
        <div>
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

            <div className='p-5 flex'>
                <div className='w-[20%]'>
                    <SubCategoryList
                        categories={categories}
                        selectedCategoryId={selectedCategory.id}
                        onSelectProductType={handleSelectSubcategory}
                    />
                </div>
                <div className='w-[80%]'>
                    <h2 className="text-2xl font-bold mb-4">Products</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <Product 
                                    key={product.id} // Add a key prop
                                    id={product.id} 
                                    imageUrl={product.imageUrl} 
                                    name={product.name} 
                                    price={product.price} 
                                    description={product.description} 
                                    quantity={product.quantity} 
                                    comments={product.comments} // Include comments if needed
                                />
                            ))
                        ) : (
                            <p>No products available for this type.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
