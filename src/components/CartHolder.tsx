import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart'; // Import Cart component
import { Product as ProductType } from '../types'; // Import necessary types

const CartPage: React.FC = () => {
    const [cart, setCart] = useState<ProductType[]>([]); // State for cart

    useEffect(() => {
        // Load cart from local storage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    // Function to remove an item from the cart
    const removeFromCart = (index: number) => {
        const updatedCart = cart.filter((_, i) => i !== index); // Remove the item at the given index
        setCart(updatedCart); // Update the cart state
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update local storage
    };

    return (
        <div>
            <Cart cart={cart} removeFromCart={removeFromCart} /> {/* Pass removeFromCart as a prop */}
        </div>
    );
};

export default CartPage;
