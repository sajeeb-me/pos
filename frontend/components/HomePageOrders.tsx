import React from 'react';
import Button from './shared/Button';
import { mockProductPriceQuantityTotal } from '@/app/mockData';
import Image from 'next/image';
import { MdDeleteOutline } from "react-icons/md";

interface ProductPriceQuantityTotalProps {
    productName: string;
    productSize: string;
    productPrice: number;
    productQuantity: number;
    customClass?: string;
}

const HomePageOrders: React.FC = () => {
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
                                {mockProductPriceQuantityTotal.map((product, index) => (
                                    <tr key={product.id} className={index % 2 === 0 ? 'bg-ghost bg-opacity-15' : ''}>
                                        <td className='flex items-center gap-x-2 border-r border-dashed'>
                                            <Image src={product.imageUrl} alt={product.productName} width={40} height={40} className='rounded-md' />

                                            <div className='text-xs'>
                                                <p className='font-bold'>{product.productName.slice(0, 10)}</p>
                                                <p>{product.productSize}</p>
                                            </div>
                                        </td>
                                        <td className='border-r border-dashed text-end pr-1'>{product.productPrice} &#2547;</td>
                                        <td className='border-r border-dashed text-center'>
                                            <div className='flex justify-between items-center gap-x-2 px-0.5'>
                                                <button className='border rounded-md px-2'>-</button>
                                                {/* <p>{product.productQuantity}</p> */}
                                                <p>
                                                    <input type="number" className='w-8 text-center border-b border-black bg-transparent outline-none' />
                                                </p>
                                                <button className='border rounded-md px-2 text-end'>+</button>
                                            </div>
                                        </td>
                                        <td className='border-r border-dashed text-end pr-1'>{product.productPrice * product.productQuantity} &#2547;</td>
                                        <td className='text-red-500 text-2xl opacity-20 hover:opacity-100 cursor-pointer duration-300 ease-in-out'><MdDeleteOutline /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Sales info */}
            <div className='text-sm' >
                <div className='relative bg-ghost bg-opacity-50 p-3 rounded-xl mb-1'>
                    <div className='flex justify-between'>
                        <div>
                            <p>Subtotal</p>
                            <p>Discount Sales</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            <p>1056 &#2547;</p>
                            <p>56 &#2547;</p>
                        </div>
                    </div>

                    <div className='bg-white h-5 w-5 absolute rounded-full -left-3'></div>
                    <div className='bg-white h-5 w-5 absolute rounded-full -right-3'></div>
                    <hr className='border-black border-dashed my-2' />

                    <div className='flex justify-between'>
                        <p>Total </p>
                        <p>1000 &#2547;</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Paid</p>
                        <p>1000 &#2547;</p>
                    </div>

                    <div className='bg-white h-5 w-5 absolute rounded-full -left-3'></div>
                    <div className='bg-white h-5 w-5 absolute rounded-full -right-3'></div>
                    <hr className='border-black border-dashed my-2' />

                    <div className='flex justify-between'>
                        <p>Due</p>
                        <p>0 &#2547;</p>
                    </div>
                </div>
                <Button label='Print' customClass='w-full' />
            </div >
        </div >
    );
};

export default HomePageOrders;