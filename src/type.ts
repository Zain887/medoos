// types.ts
export interface Category {
    id: number;
    name: string;
    description?: string;
  }
  
  export interface Subcategory {
    id: number;
    name: string;
    categoryId: number;
    description?: string;
  }
  
  export interface Product {
    id: number;
    name: string;
    subcategoryId: number;
    description?: string;
    price: number;
    imageUrl: string;
    quantity: number;
  }
  