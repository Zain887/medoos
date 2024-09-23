import React from 'react';
// import { ProductComment } from '../../types';
import { FaCartArrowDown } from "react-icons/fa6";

interface Props {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  quantity: number;
  tag?: string[];
  // comments?: ProductComment[];
}

const Product: React.FC<Props> = ({ name, description = "No description available", price, imageUrl, quantity, tag = [] }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      {/* Product Image */}
      <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-md mb-4" />

      {/* Product Name and Description */}
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-gray-600 mb-4">{description}</p>

      {/* Product Price and Quantity */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl font-semibold">${price}</p>
        <p className={`text-sm font-semibold ${quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
          {quantity > 0 ? `${quantity} in stock` : 'Out of stock'}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap mb-4">
        {tag.map((tagItem, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            {tagItem}
          </span>
        ))}
      </div>

      {/* Comments Section */}
      {/* <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Comments</h3>
        {comments.length > 0 ? (
          <ul className="space-y-2">
            {comments.map((comment) => (
              <li key={comment.id} className="border p-2 rounded">
                <p className="font-semibold">{comment.userName}</p>
                <p className="text-sm text-gray-600">{comment.commentText}</p>
                <p className="text-sm text-yellow-500">Rating: {comment.rating}/5</p>
                <p className="text-xs text-gray-400">{new Date(comment.date).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No comments available.</p>
        )}
      </div> */}
      <div className='mt-4'>
        <button className='w-full bg-gray-400 text-[#242424] font-bold items-center justify-around flex'>Add To Cart <FaCartArrowDown size={25} color='#242424' /> </button>
      </div>
    </div>
  );
};

export default Product;
