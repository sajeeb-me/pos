"use client"

import React, { useState } from 'react';
import BottomBar from './BottomBar';
import HomePageGoods from './HomePageGoods';
import HomePageOrders from './HomePageOrders';

interface Product {
    id: number;
    productName: string;
    productPrice: number;
    productQuantity: number;
    imageUrl: string;
    productSize: string;
}

const HomePage: React.FC = () => {

    const [cart, setCart] = useState<Product[]>([]);

    return (
        <div>
            <BottomBar />
            <div className='grid grid-cols-3 gap-x-2'>
                <div className='col-span-2  border-black'>
                    <HomePageGoods cart={cart} setCart={setCart} />
                </div>
                <div className='col-span-1 bg-white shadow-md p-3 rounded-xl h-[87vh]'>
                    <HomePageOrders cart={cart} setCart={setCart} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;