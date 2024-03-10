import React from 'react';
import BottomBar from './BottomBar';
import HomePageGoods from './HomePageGoods';
import HomePageOrders from './HomePageOrders';

const HomePage: React.FC = () => {
    return (
        <div className=''>
            <BottomBar />
            <div className='grid grid-cols-3 gap-x-5'>
                <div className='col-span-2  border-black'>
                    <HomePageGoods />
                </div>
                <div className='col-span-1  bg-white shadow-md p-5 rounded-xl h-[75vh]'>
                    <HomePageOrders />
                </div>
            </div>
        </div>
    );
}

export default HomePage;