export interface HeaderImages {
  id: string;
  url: string;
  article: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  subcategories: ProductTypes[];
}

export interface ProductTypes {
  id: string;
  name: string;
  description?: string;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  quantity: number;
  tag?: string[];
  comments?: ProductComment[];
}

export interface ProductComment {
  id: string;
  userName: string;
  commentText: string;
  rating?: number;
  date: Date;
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  total: number; // quantity * price
}

export interface Cart {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}
