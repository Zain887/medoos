// data.ts
import { Category, Subcategory, Product } from './type';

export const categories: Category[] = [
    { id: 1, name: 'Swords', description: 'All Products Relatd To Swords'},
    { id: 2, name: 'Axe', description: 'All Products Related To  Axe'},
    { id: 3, name: 'Kitchen Knives', description: 'All Products Related To Kitchen Knives'},
    { id: 4, name: 'Hunting Knives', description: 'All Products Related  To Hunting Knives'},
    { id: 5, name: 'Dental Instruments', description: 'All Products Related To Dental'},
    { id: 6, name: 'Beauty Instruments', description: 'All Products Related To Bueaty care'},
];

export const subcategories: Subcategory[] = [
    { id: 1, name: 'Mobile Phones', categoryId: 1, description: 'Latest smartphones' },
    { id: 2, name: 'Laptops', categoryId: 1, description: 'Laptops and accessories' },
    { id: 3, name: 'Men\'s Clothing', categoryId: 2, description: 'Shirts, trousers, etc.' }
];

export const products: Product[] = [
    { id: 1, name: 'iPhone 13', subcategoryId: 1, description: 'Latest iPhone model', price: 999, imageUrl: 'https://via.placeholder.com/150', quantity: 10 },
    { id: 2, name: 'MacBook Air', subcategoryId: 2, description: 'Lightweight and powerful', price: 1199, imageUrl: 'https://via.placeholder.com/150', quantity: 5 },
    { id: 3, name: 'Men\'s T-shirt', subcategoryId: 3, description: 'Comfortable cotton t-shirt', price: 29, imageUrl: 'https://via.placeholder.com/150', quantity: 50 }
];
