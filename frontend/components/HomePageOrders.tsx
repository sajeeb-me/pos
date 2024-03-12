import React from 'react';
import Button from './shared/Button';
import { mockProductPriceQuantityTotal } from '@/app/mockData';

interface ProductPriceQuantityTotalProps {
    productName: string;
    productSize: string;
    productPrice: number;
    productQuantity: number;
    customClass?: string;
}

// const ProductPriceQuantityTotal: React.FC<ProductPriceQuantityTotalProps> = ({ productName, productSize, productPrice, productQuantity, customClass }) => {
//     return (
//         <div className={`flex justify-between items-center py-1 ${customClass}`}>
//             <div className='flex items-center gap-x-2'>
//                 <div className='bg-slate-500 h-10 w-10 rounded-lg'></div>
//                 <div>
//                     <p className='font-bold'>{productName}</p>
//                     <p className='text-xs'>{productSize}</p>
//                 </div>
//             </div>
//             <p>{productPrice} tk</p>
//             <div className='flex gap-x-2'>
//                 <button className='border rounded-md px-2'>-</button>
//                 <p>{productQuantity}</p>
//                 <button className='border rounded-md px-2'>+</button>
//             </div>
//             <p>{productPrice * productQuantity} tk</p>
//         </div>
//     );
// };
const ProductPriceQuantityTotal: React.FC<ProductPriceQuantityTotalProps> = ({ productName, productSize, productPrice, productQuantity, customClass }) => {
    return (
        <tr>
            <td className='flex items-center gap-x-2 border-r'>
                <div className='bg-slate-500 h-10 w-10 rounded-lg'></div>
                <div>
                    <p className='font-bold'>{productName}</p>
                    <p className='text-xs'>{productSize}</p>
                </div>
            </td>
            <td className='border-r text-center'>{productPrice}</td>
            <td className='flex gap-x-2 border-r text-center'>
                <button className='border rounded-md px-2'>-</button>
                <p>{productQuantity}</p>
                <button className='border rounded-md px-2 text-end'>+</button>
            </td>
            <td>{productPrice * productQuantity} tk</td>
        </tr>
    );
};

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
                            <thead className=''>
                                <tr>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mockProductPriceQuantityTotal.map((product, index) => (
                                    <tr key={product.id} className={index % 2 === 0 ? 'bg-ghost' : ''}>
                                        <td className='flex items-center gap-x-2 border'>
                                            <div className='bg-slate-500 h-10 w-10 rounded-lg'></div>
                                            <div className='text-xs'>
                                                <p className='font-bold'>{product.productName.slice(0, 10)}</p>
                                                <p>{product.productSize}</p>
                                            </div>
                                        </td>
                                        <td className='border-r text-center'>{product.productPrice}</td>
                                        <td className='border border-red-500 text-center'>
                                            <div className='flex justify-center items-center gap-x-2'>
                                                <button className='border rounded-md px-2'>-</button>
                                                <p>{product.productQuantity}</p>
                                                <button className='border rounded-md px-2 text-end'>+</button>
                                            </div>
                                        </td>
                                        <td className='border text-end'>{product.productPrice * product.productQuantity} tk</td>
                                    </tr>
                                    // <ProductPriceQuantityTotal
                                    //     key={product.id}
                                    //     productName={product.productName}
                                    //     productSize={product.productSize}
                                    //     productPrice={product.productPrice}
                                    //     productQuantity={product.productQuantity}
                                    //     customClass='bg-slate-50 mb-0.5'
                                    // />
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
                            <p>1056 tk</p>
                            <p>56 tk</p>
                        </div>
                    </div>

                    <div className='bg-white h-5 w-5 absolute rounded-full -left-3'></div>
                    <div className='bg-white h-5 w-5 absolute rounded-full -right-3'></div>
                    <hr className='border-black border-dashed my-2' />

                    <div className='flex justify-between'>
                        <p>Total </p>
                        <p>1000 tk</p>
                    </div>
                    <div className='flex justify-between'>
                        <p>Paid</p>
                        <p>1000 tk</p>
                    </div>

                    <div className='bg-white h-5 w-5 absolute rounded-full -left-3'></div>
                    <div className='bg-white h-5 w-5 absolute rounded-full -right-3'></div>
                    <hr className='border-black border-dashed my-2' />

                    <div className='flex justify-between'>
                        <p>Due</p>
                        <p>0 tk</p>
                    </div>
                </div>
                <Button label='Print' customClass='w-full' />
            </div >
        </div >
    );
};

export default HomePageOrders;