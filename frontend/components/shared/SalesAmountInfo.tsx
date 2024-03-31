import React, { useState } from 'react';
import Button from './Button';

interface SalesAmountInfoProps {
    // define your props here
    subtotal: number;
}

const SalesAmountInfo: React.FC<SalesAmountInfoProps> = ({ subtotal }) => {
    // use your props here
    const [discountPrice, setDiscountPrice] = useState(0);
    const [paidPrice, setPaidPrice] = useState(0);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountPrice(Number(event.target.value));
    }

    const handlePaidPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPaidPrice(Number(event.target.value));
    }

    return (
        <div className='text-sm' >
            <div className='relative bg-ghost bg-opacity-50 p-3 rounded-xl mb-1'>
                <div className='flex justify-between'>
                    <div>
                        <p>Subtotal</p>
                        <p>Discount</p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <p>{subtotal} &#2547;</p>
                        {/* <p>56 &#2547;</p> */}
                        <div>
                            <input
                                type="number"
                                className='w-20 border-b border-white text-end bg-transparent outline-none mr-1'
                                placeholder='00'
                                onChange={handleInputChange}
                            />
                            &#2547;
                        </div>
                    </div>
                </div>

                <div className='bg-white h-5 w-5 absolute rounded-full -left-3'></div>
                <div className='bg-white h-5 w-5 absolute rounded-full -right-3'></div>
                <hr className='border-black border-dashed my-2' />

                <div className='flex justify-between'>
                    <p>Total </p>
                    {/* <p>1000 &#2547;</p> */}
                    <p>{subtotal - discountPrice} &#2547;</p>
                </div>
                <div className='flex justify-between'>
                    <p>Paid</p>
                    <div>
                        <input
                            type="number"
                            // className='border rounded-lg h-8 w-20'
                            className='w-20 border-b border-white text-end bg-transparent outline-none mr-1'
                            placeholder='00'
                            onChange={handlePaidPriceChange}
                        />
                        &#2547;
                    </div>
                </div>

                <div className='bg-white h-5 w-5 absolute rounded-full -left-3'></div>
                <div className='bg-white h-5 w-5 absolute rounded-full -right-3'></div>
                <hr className='border-black border-dashed my-2' />

                <div className='flex justify-between'>
                    <p>Due</p>
                    <p>{subtotal - discountPrice - paidPrice} &#2547;</p>
                </div>
            </div>
            <Button label='Print' customClass='w-full' />
        </div >
    );
}

export default SalesAmountInfo;