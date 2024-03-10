import React from 'react';
import CardWithGoods from './shared/CardWithGoods';
import Button from './shared/Button';

interface HomePageGoodsProps {
    // define your props here
}

const HomePageGoods: React.FC<HomePageGoodsProps> = (props) => {
    // You can destructure your props here if you have any

    return (
        <div>
            <div className='mb-10'>
                <Button label='Buy' customClass='mr-2' />
                <Button label='Sell' customClass='mr-2' />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <CardWithGoods goods={{ id: '1', name: 'Shirt', price: 100, imageUrl: 'https://via.placeholder.com/150' }} />
                <CardWithGoods goods={{ id: '1', name: 'Shirt', price: 100, imageUrl: 'https://via.placeholder.com/150' }} />
                <CardWithGoods goods={{ id: '1', name: 'Shirt', price: 100, imageUrl: 'https://via.placeholder.com/150' }} />
                <CardWithGoods goods={{ id: '1', name: 'Shirt', price: 100, imageUrl: 'https://via.placeholder.com/150' }} />
                <CardWithGoods goods={{ id: '1', name: 'Shirt', price: 100, imageUrl: 'https://via.placeholder.com/150' }} />
            </div>
        </div>
    );
};

export default HomePageGoods;