import React from 'react';
import Button from './Button';

interface SalesAmountInfoProps {
    // define your props here
}

const SalesAmountInfo: React.FC<SalesAmountInfoProps> = (props) => {
    // use your props here

    return (
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
    );
}

export default SalesAmountInfo;