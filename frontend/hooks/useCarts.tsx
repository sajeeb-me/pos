"use client"
// useCarts.tsx
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  productName: string;
  productPrice: number;
  productQuantity: number;
  imageUrl: string;
  productSize: string;
}

const useCarts = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Load cart from localStorage on component mount
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [cart]); // Empty dependency array ensures this effect runs only once on component mount

  const saveCartToLocalStorage = (updatedCart: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const addToCart = (product: Product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If product already exists in cart, increase quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].productQuantity++;
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    } else {
      // If product does not exist in cart, add it with quantity 1
      const updatedCart = [...cart, { ...product, productQuantity: 1 }];
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, productQuantity: item.productQuantity + 1 } : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = cart.map(item =>
      item.id === productId && item.productQuantity > 1
        ? { ...item, productQuantity: item.productQuantity - 1 }
        : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };
};

export default useCarts;




/*
 import { useEffect } from "react";
import { useState } from "react";
import { getStoredItem } from "../utilities/localStorageDB";

const useCarts = (listCoins) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedItems = getStoredItem();
        const addNewCart = [];
        for (const id in storedItems) {
            const addedCoin = listCoins?.find(coin => coin.id === id);
            if (addedCoin) {
                addedCoin.quantity = storedItems[id];
                addNewCart.push(addedCoin)
            }
        }
        setCart(addNewCart)
    }, [listCoins])
    return [cart, setCart]
};
export default useCarts;
 */