import React from 'react';
import CardWithGoods from './shared/CardWithGoods';
import Button from './shared/Button';
import { mock } from 'node:test';
import { mockCardWithGoods } from '@/app/mockData';

interface HomePageGoodsProps {
    // define your props here
    cart: any[];
    setCart: any;
}

const HomePageGoods: React.FC<HomePageGoodsProps> = ({ cart, setCart }) => {
    // You can destructure your props here if you have any

    return (
        <div>
            <div className='mb-5'>
                <Button variant='ghost' label='Buy' customClass='mr-2' />
                <Button label='Sell' customClass='mr-2' />
            </div>
            <div className='grid grid-cols-3 gap-5 max-h-[75vh] overflow-y-scroll'>
                {
                    mockCardWithGoods.map((mockGoods) => (
                        <CardWithGoods key={mockGoods.id} goods={mockGoods} cart={cart} setCart={setCart} />
                    ))
                }
            </div>
        </div>
    );
};

export default HomePageGoods;