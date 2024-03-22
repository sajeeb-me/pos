import { useState } from 'react';

function ProductQuantity({ product, onQuantityChange }) {
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
                        className='w-8 text-center border-b border-black bg-transparent outline-none'
                        readOnly
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