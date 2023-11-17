/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AC6YqcoATmG
 */

"use client"

import React, { useState } from "react";
// import prisma from "@/lib/prisma";
import { Button } from "@mui/material";
import Link from "next/link";

type Product = {
  name: string;
  price: number;
}

type CartItem = {
  product: Product;
  quantity: number;
}

const SelectComponent = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [startTime, setStartTime] = useState(new Date());
  const [time, setTime] = useState<number>(0);
  // const [measurementId, setMeasurementId] = useState<string | null>(null);

  // const prisma = new PrismaClient();

  //useEffect(() => {
    /*
    const createMeasurement = async () => {
      const audio = new Audio('public/Nice_Wake_Up.mp3');
      await audio.play();
    };
     */
  //});
  // , [startTime, time, prisma]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((currentCart) => {
      const itemInCart = currentCart.find((item) => item.product.name === product.name);
      if (itemInCart) {
        return currentCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...currentCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((currentCart) => {
      const itemInCart = currentCart.find((item) => item.product.name === product.name);
      if (itemInCart && itemInCart.quantity > 1) {
        return currentCart.map((item) =>
            item.product.name === product.name
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
      } else if (itemInCart && itemInCart.quantity === 1) {
        return currentCart.filter((item) => item.product.name !== product.name);
      } else {
        return currentCart;
      }
    });
  };

  const resetCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const handleClick = async () => {
    const endTime = new Date();
    // 後で修正
    setStartTime(endTime);
    setTime(time);

    setTime(endTime.getTime() - startTime.getTime());
    /*
    await prisma.user.create({
      //where: { id: measurementId },
      data: {
        startTime: startTime,
        time: time,
      },
    });
     */
  };

  return (
    <section className="container mx-auto px-4 md:px-8 py-8">
      <div className="w-full flex justify-start space-x-4 overflow-x-auto pb-2 border-b-2">
        <button className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-700">お菓子</button>
        <button className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-700">お肉</button>
        <button className="py-2 px-4 rounded-lg bg-gray-200 dark:bg-gray-700">野菜</button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">きのこの山</h2>
            <Button variant="outlined" onClick={() => addToCart({ name: 'きのこの山', price: 130 })}>カートに追加</Button>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            クラッカーのチョコ掛け
          </p>
          <h3 className="font-bold text-gray-900 dark:text-white">130円</h3>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">たけのこの里</h2>
            <Button variant="outlined" onClick={() => addToCart({ name: 'たけのこの里', price: 130 })}>カートに追加</Button>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            ビスケットのチョコ掛け
          </p>
          <h3 className="font-bold text-gray-900 dark:text-white">130円</h3>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">アルフォート</h2>
            <Button variant="outlined" onClick={() => addToCart({ name: 'アルフォート', price: 110 })}>カートに追加</Button>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            ビスケットのチョコ掛け
          </p>
          <h3 className="font-bold text-gray-900 dark:text-white">110円</h3>
        </div>
      </div>
      <section className="w-full mt-8">
        <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">カート</h2>
            <Button variant="contained" onClick={resetCart}>カートのリセット</Button>
          </div>
          {/*
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              カートは空です
            </p>
          </div>
          */}
          <div className="mt-4">
            {cart.map((item) => (
                <div key={item.product.name} className={"flex justify-between items-center"}>
                  <p className="flex-grow">
                    {item.product.name} - {item.quantity}個
                  </p>
                  <Button variant="outlined" onClick={() => removeFromCart(item.product)}>数量を減らす</Button>
                </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
          <h2 className="font-semibold">合計金額</h2>
          <h3 className="font-bold text-gray-900 dark:text-white">{calculateTotal()}円</h3>
        </div>
        <div className="mt-4 flex justify-end">
          <Link href={"/"}>
            <Button
              onClick={handleClick}
              className="py-2 px-6 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-400"
              type="submit"
              variant="contained"
            >
              決済画面へ
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default SelectComponent;
