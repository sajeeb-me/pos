"use client"

import { useState } from 'react';

interface Product {
    productQuantity: number;
    // Add other properties of product here
}

const ProductQuantity: React.FC<{ product: Product, onQuantityChange: (quantity: number) => void }> = ({ product, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(product.productQuantity);

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1); // Trigger handler for parent component
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1); // Trigger handler for parent component
    };

    return (
        <td className='border-r border-dashed text-center'>
            <div className='flex justify-between items-center gap-x-2 px-0.5'>
                <button className='border rounded-md px-2' onClick={handleDecrement}>
                    -
                </button>
                <p>
                    <input
                        type="number"
                        value={quantity}
                        className='w-10 text-center border-b border-black bg-transparent outline-none'

                    />
                </p>
                <button className='border rounded-md px-2 text-end' onClick={handleIncrement}>
                    +
                </button>
            </div>
        </td>
    );
}

export default ProductQuantity;


// const [count, setCount] = useState<number>(0);

// const increment = () => {
//   setCount(count + 1);
// };

// const decrement = () => {
//   // Prevent decrementing below 0
//   setCount(Math.max(0, count - 1));
// };