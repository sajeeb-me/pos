import React from 'react';

interface Goods {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

interface CardWithGoodsProps {
    goods: Goods;
}

const CardWithGoods: React.FC<CardWithGoodsProps> = ({ goods }) => {
    return (
        <div className="card bg-white rounded-md p-2">
            <img src={goods.imageUrl} alt={goods.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{goods.name}</h5>
                <p className="card-text">${goods.price}</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    );
};

export default CardWithGoods;