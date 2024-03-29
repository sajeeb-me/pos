import Image from 'next/image';
import React from 'react';

interface Goods {
    id: number;
    name: string;
    imageUrl: string;
    subProducts: any[];
}

interface CardWithGoodsProps {
    goods: Goods;
    cart: any[];
    setCart: any;
}

const CardWithGoods: React.FC<CardWithGoodsProps> = ({ goods, cart, setCart }) => {

    const addToCart = (subProduct: any) => {
        setCart([...cart, subProduct]);
    };

    return (
        <div className="card bg-white rounded-md p-2 shadow-md">
            <div className='flex gap-x-2'>
                <Image src={goods.imageUrl} alt={goods.name} width={80} height={80} className='rounded-md' />
                <div>
                    <h5 className="card-title font-bold">{goods.name}</h5>
                </div>
            </div>
            <div className="card-body mt-2">
                <ul className='text-sm grid grid-cols-4 gap-1'>
                    {
                        goods.subProducts.map((subProduct, index) => (
                            <li key={index} className="relative border hover:border-primary p-1 rounded-md min-w-14 cursor-pointer duration-300">
                                <div 
                                onClick={() => addToCart(subProduct)}
                                className='bg-primary bg-opacity-40 start-0 top-0 rounded-md h-full w-full absolute flex items-center opacity-0 hover:opacity-100 duration-300'>
                                    <p className='text-white text-center w-full text-4xl'>+</p>
                                </div>
                                <p className='font-semibold'>{subProduct.name}</p>
                                <p className='text-xs'>{subProduct.price}&#2547;</p>
                                <p className='text-xs mt-2'>Avl: {subProduct.quantity}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default CardWithGoods;