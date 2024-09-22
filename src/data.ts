import { v4 as uuidv4 } from 'uuid';
import { HeaderImages, Category, Subcategory, Product, ProductComment } from './type'; // Your custom types

// Header images data
export const getHeaderImages = (): HeaderImages[] => [
    { id: uuidv4(), url: '/headerImages/sword-1.jpg', article: 'Swords' },
    { id: uuidv4(), url: '/headerImages/AXE-1.jpg', article: 'Axe' },
    { id: uuidv4(), url: '/headerImages/Kitchenknives-1.jpg', article: 'Kitchen knives' },
    { id: uuidv4(), url: '/headerImages/HuntingKnifes.jpg', article: 'Hunting knives' },
    { id: uuidv4(), url: '/headerImages/dental.jpg', article: 'Dental Instruments' },
    { id: uuidv4(), url: '/headerImages/beautiInstrument.webp', article: 'Beauty Instruments' },
];

// Categories with dynamically generated UUIDs
const categories: Category[] = [
    { id: uuidv4(), name: 'Swords', description: 'All products related to swords.' },
    { id: uuidv4(), name: 'Axe', description: 'All products related to axes.' },
    { id: uuidv4(), name: 'Kitchen Knives', description: 'All products related to kitchen knives.' },
    { id: uuidv4(), name: 'Hunting Knives', description: 'All products related to hunting knives.' },
    { id: uuidv4(), name: 'Dental Instruments', description: 'All products related to dental instruments.' },
    { id: uuidv4(), name: 'Beauty Instruments', description: 'All products related to beauty instruments.' },
];

export const getCategories = (): Category[] => categories;

// Subcategories with correct categoryId references
const subcategories: Subcategory[] = [
    { id: uuidv4(), name: 'Combat Swords', categoryId: categories[0].id, description: 'Sharp and durable combat swords' },
    { id: uuidv4(), name: 'Throwing Axes', categoryId: categories[1].id, description: 'Perfect for throwing and sport' },
    { id: uuidv4(), name: 'Chef’s Knives', categoryId: categories[2].id, description: 'Premium kitchen knives for chefs' },
    { id: uuidv4(), name: 'Hunting Knives', categoryId: categories[3].id, description: 'Reliable hunting knives for outdoor use' },
    { id: uuidv4(), name: 'Dental Kits', categoryId: categories[4].id, description: 'Professional dental care tools' },
    { id: uuidv4(), name: 'Facial Tools', categoryId: categories[5].id, description: 'Precision beauty tools for skincare' },
    { id: uuidv4(), name: 'Combat Swords2', categoryId: categories[0].id, description: 'Sharp and durable combat swords' },
    { id: uuidv4(), name: 'Throwing Axes2', categoryId: categories[1].id, description: 'Perfect for throwing and sport' },
    { id: uuidv4(), name: 'Chef’s Knives2', categoryId: categories[2].id, description: 'Premium kitchen knives for chefs' },
    { id: uuidv4(), name: 'Hunting Knives2', categoryId: categories[3].id, description: 'Reliable hunting knives for outdoor use' },
    { id: uuidv4(), name: 'Dental Kits2', categoryId: categories[4].id, description: 'Professional dental care tools' },
    { id: uuidv4(), name: 'Facial Tools2', categoryId: categories[5].id, description: 'Precision beauty tools for skincare' },
    { id: uuidv4(), name: 'Combat Swords3', categoryId: categories[0].id, description: 'Sharp and durable combat swords' },
    { id: uuidv4(), name: 'Throwing Axes3', categoryId: categories[1].id, description: 'Perfect for throwing and sport' },
    { id: uuidv4(), name: 'Chef’s Knives3', categoryId: categories[2].id, description: 'Premium kitchen knives for chefs' },
    { id: uuidv4(), name: 'Hunting Knives3', categoryId: categories[3].id, description: 'Reliable hunting knives for outdoor use' },
    { id: uuidv4(), name: 'Dental Kits3', categoryId: categories[4].id, description: 'Professional dental care tools' },
    { id: uuidv4(), name: 'Facial Tools3', categoryId: categories[5].id, description: 'Precision beauty tools for skincare' },
];

export const getSubcategories = (): Subcategory[] => subcategories;

// Products with correct subcategoryId references
export const getProducts = (): Product[] => [
    {
        id: uuidv4(),
        name: 'Viking Sword',
        subcategoryId: subcategories[0].id,
        description: 'A sharp and sturdy Viking-style sword.',
        price: 250,
        imageUrl: 'https://via.placeholder.com/150',
        quantity: 5,
        tag: ['Hot Selling', 'Discount'],
        comments: getProductComments('1'),
    },
    {
        id: uuidv4(),
        name: 'Throwing Axe',
        subcategoryId: subcategories[1].id,
        description: 'A durable throwing axe perfect for sports and competition.',
        price: 150,
        imageUrl: 'https://via.placeholder.com/150',
        quantity: 8,
        tag: ['New Arrival', 'Featured'],
        comments: getProductComments('2'),
    },
    {
        id: uuidv4(),
        name: 'Chef’s Knife',
        subcategoryId: subcategories[2].id,
        description: 'A high-quality chef’s knife for professional use.',
        price: 120,
        imageUrl: 'https://via.placeholder.com/150',
        quantity: 12,
        tag: ['Featured', 'Hot Selling'],
        comments: getProductComments('3'),
    },
    {
        id: uuidv4(),
        name: 'Hunting Knife',
        subcategoryId: subcategories[3].id,
        description: 'A reliable and durable hunting knife for outdoor enthusiasts.',
        price: 100,
        imageUrl: 'https://via.placeholder.com/150',
        quantity: 20,
        tag: ['Discount'],
        comments: [],
    },
    {
        id: uuidv4(),
        name: 'Dental Kit',
        subcategoryId: subcategories[4].id,
        description: 'A comprehensive dental kit for professional use.',
        price: 300,
        imageUrl: 'https://via.placeholder.com/150',
        quantity: 15,
        tag: ['New Arrival'],
        comments: [],
    },
    {
        id: uuidv4(),
        name: 'Facial Tool Kit',
        subcategoryId: subcategories[5].id,
        description: 'A high-precision facial tool kit for beauty care.',
        price: 200,
        imageUrl: 'https://via.placeholder.com/150',
        quantity: 10,
        tag: ['Hot Selling', 'Featured'],
        comments: [],
    },
];

// Fetching product comments based on productId
export const getProductComments = (productId: string): ProductComment[] => {
    const comments: ProductComment[] = [
        {
            id: uuidv4(),
            productId: '1',
            userName: 'John Doe',
            commentText: 'Amazing quality sword! Very sharp and durable.',
            rating: 5,
            date: new Date(2024, 1, 15),
        },
        {
            id: uuidv4(),
            productId: '2',
            userName: 'Jane Smith',
            commentText: 'Perfect for throwing! Balanced and strong.',
            rating: 4,
            date: new Date(2024, 1, 20),
        },
        {
            id: uuidv4(),
            productId: '3',
            userName: 'Emily Johnson',
            commentText: 'Best kitchen knife I’ve ever used!',
            rating: 5,
            date: new Date(2024, 1, 22),
        },
    ];
    return comments.filter(comment => comment.productId === productId);
};
