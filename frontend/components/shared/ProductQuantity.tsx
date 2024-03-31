"use client"

import { useState } from 'react';


interface Product {
    productQuantity: number;
    // Add other properties of product here
}
const ProductQuantity: React.FC<{ product: Product, onQuantityChange: (product: Product) => void }> = ({ product, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(product.productQuantity);

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            onQuantityChange({
                ...product,
                productQuantity: quantity - 1,
            })

        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        onQuantityChange({
            ...product,
            productQuantity: quantity + 1,
        })
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
        onQuantityChange({
            ...product,
            productQuantity: newQuantity,
        })
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
                        onChange={handleInputChange}
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