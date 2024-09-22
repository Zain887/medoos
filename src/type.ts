// Interface for header images displayed in the header section
export interface HeaderImages {
  id: string;    // UUID for unique identification
  url: string;   // Image URL path
  article: string; // Text describing the header image, e.g. Swords, Axe
}

// Interface for product categories (e.g., Swords, Axe, Kitchen Knives, etc.)
export interface Category {
  id: string;    // UUID for unique identification
  name: string;  // Category name, e.g. Swords, Axe
  description?: string; // Optional description of the category
}

// Interface for subcategories related to a category (e.g., Throwing Axes under Axe category)
export interface Subcategory {
  id: string;      // UUID for unique identification
  name: string;    // Subcategory name, e.g. Combat Swords, Throwing Axes
  categoryId: string; // The ID of the category this subcategory belongs to
  description?: string; // Optional description of the subcategory
}

// Interface for products that fall under subcategories (e.g., Viking Sword under Combat Swords)
export interface Product {
  id: string;          // UUID for unique identification
  name: string;        // Product name, e.g., Viking Sword, Chef's Knife
  subcategoryId: string; // The ID of the subcategory this product belongs to
  description?: string; // Optional product description
  price: number;       // Price of the product
  imageUrl: string;    // Image URL of the product
  quantity: number;    // Number of items in stock
  tag?: string[];      // Optional array of tags, e.g., ['Hot Selling', 'Discount']
  comments?: ProductComment[]; // Array of comments related to the product
}

// Interface for product comments (reviews)
export interface ProductComment {
  id: string;         // UUID for unique identification of the comment
  productId: string;  // The ID of the product this comment belongs to
  userName: string;   // Name of the user who commented
  commentText: string; // The comment text
  rating?: number;    // Optional rating (e.g., out of 5 stars)
  date: Date;         // Date the comment was posted
}
