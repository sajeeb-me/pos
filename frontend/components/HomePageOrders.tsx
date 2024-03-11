import React from 'react';
import Button from './shared/Button';

const HomePageOrders: React.FC = () => {
    return (
        <div className='h-full flex flex-col justify-between'>
            <div className='h-full'>
                <div className='mb-3'>
                    <h5 className='text-sm font-bold' >Customer Name</h5>
                    <input type="text" pattern='Enter your customer name' className='border w-full rounded-lg h-8' />
                </div>
                <div>
                    <div className='flex justify-between items-center mb-2 bg-primary bg-opacity-5 py-1 px-3 rounded-md'>
                        <div className='flex gap-x-3'>
                            <h4>Bill no</h4>
                            <p className='font-bold'>#0037</p>
                        </div>
                        <div className='text-xs opacity-50 cursor-pointer'>
                            Clear All
                        </div>
                    </div>
                    <div className='max-h-[38vh] 2xl:max-h-[45vh] overflow-y-scroll'>
                        <p>Order 1</p>
                        <p>Order 2</p>
                        <p>Order 3</p>
                        <p>Order 4</p>
                        <p>Order 5</p>
                        <p>Order 6</p>
                        <p>Order 7</p>
                        <p>Order 8</p>
                        <p>Order 9</p>
                        <p>Order 10</p>
                        <p>Order 11</p>
                        <p>Order 12</p>
                        <p>Order 13</p>
                        <p>Order 14</p>
                        <p>Order 15</p>
                        <p>Order 16</p>
                        <p>Order 17</p>
                        <p>Order 18</p>
                        <p>Order 19</p>
                        <p>Order 20</p>
                    </div>
                </div>
            </div>
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