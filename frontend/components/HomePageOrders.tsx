"use client"

import React from 'react';
import Button from './shared/Button';
import { mockProductPriceQuantityTotal } from '@/app/mockData';
import Image from 'next/image';
import { MdDeleteOutline } from "react-icons/md";
import ProductQuantity from './shared/ProductQuantity';
import SalesAmountInfo from './shared/SalesAmountInfo';

interface ProductPriceQuantityTotalProps {
    id: string;
    productName: string;
    productSize: string;
    price: number;
    productQuantity: number;
    customClass?: string;
}

interface HomePageOrdersProps {
    cart: any[];
    setCart: any;
}

const HomePageOrders: React.FC<HomePageOrdersProps> = ({cart, setCart}) => {
    const handleQuantityChange = (newQuantity: any) => {
        setCart((prevCart: ProductPriceQuantityTotalProps[]) => prevCart.map((product: ProductPriceQuantityTotalProps) => 
            product.id === newQuantity.id 
            ? { ...product, productQuantity: newQuantity.productQuantity }
            : product
        ));
    };

    const subtotal =  cart.reduce((total, product) => total + (product.price * product.productQuantity), 0);

    return (
        <div className='h-full flex flex-col justify-between'>
            <div className='h-full'>
                {/* Customer Info */}
                <div className='mb-3'>
                    <h5 className='text-sm font-bold' >Customer Name</h5>
                    <input type="text" pattern='Enter your customer name' className='border w-full rounded-lg h-8' />
                </div>

                {/* Order Info */}
                <div>
                    <div className='flex justify-between items-center mb-2 bg-primary bg-opacity-5 py-1 px-3 rounded-md'>
                        <div className='flex gap-x-3'>
                            <h4>Bill no</h4>
                            <p className='font-bold'>#0037</p>
                        </div>
                        <div className='text-xs cursor-pointer text-red-300'>
                            Clear All
                        </div>
                    </div>
                    <div className='mt-2 max-h-[38vh] 2xl:max-h-[45vh] overflow-y-scroll'>
                        <table className='w-full'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product, index) => (
                                    <tr key={product.id} className={index % 2 === 0 ? 'bg-ghost bg-opacity-15' : ''}>
                                        <td className='flex items-center gap-x-2 border-r border-dashed'>
                                            <Image src={product.imageUrl} alt={product.name} width={40} height={40} className='rounded-md' />

                                            <div className='text-xs'>
                                                <p className='font-bold'>{product.brand?.slice(0, 10)}</p>
                                                <p>{product.name}</p>
                                            </div>
                                        </td>
                                        <td className='border-r border-dashed text-end pr-1'>{product.price} &#2547;</td>
                                        <td className='border-r border-dashed text-center'>
                                            <div className='flex justify-between items-center gap-x-2 px-0.5'>
                                                <ProductQuantity product={product} onQuantityChange={handleQuantityChange} />
                                            </div>
                                        </td>
                                        <td className='border-r border-dashed text-end pr-1'>{product.price * product.productQuantity} &#2547;</td>
                                        <td className='text-red-500 text-2xl opacity-20 hover:opacity-100 cursor-pointer duration-300 ease-in-out'><MdDeleteOutline /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Sales info */}
            <SalesAmountInfo subtotal={subtotal} />
        </div >
    );
};

export default HomePageOrders;