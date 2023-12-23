"use client";

import React, { useState, useEffect } from "react";
// import prisma from "@/lib/prisma";
import { Button } from "@mui/material";
import Link from "next/link";

type Product = {
  name: string;
  price: number;
};

type CartItem = {
  product: Product;
  quantity: number;
};

const SelectComponent = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedTab, setSelectedTab] = useState("お菓子");
  const [startTime, setStartTime] = useState(new Date());
  const [time, setTime] = useState<number>(0);
  // const [measurementId, setMeasurementId] = useState<string | null>(null);

  // const prisma = new PrismaClient();

  useEffect(() => {
    const playAudio = async () => {
      const audio = new Audio("@/public/genre_tutorial.wav");
      await audio.play();
    };
    playAudio().catch((error) =>
      console.error("Audio playback failed:", error),
    );
  }, []);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart((currentCart) => {
      const itemInCart = currentCart.find(
        (item) => item.product.name === product.name,
      );
      if (itemInCart) {
        return currentCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      } else {
        return [...currentCart, { product, quantity }];
      }
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((currentCart) => {
      const itemInCart = currentCart.find(
        (item) => item.product.name === product.name,
      );
      if (itemInCart && itemInCart.quantity > 1) {
        return currentCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item,
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
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
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
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedTab === "お菓子"
              ? "bg-blue-200 dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setSelectedTab("お菓子")}
        >
          お菓子
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedTab === "お肉"
              ? "bg-blue-200 dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setSelectedTab("お肉")}
        >
          お肉
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            selectedTab === "野菜"
              ? "bg-blue-200 dark:bg-blue-700"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
          onClick={() => setSelectedTab("野菜")}
        >
          野菜
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {selectedTab === "お菓子" && (
          <>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">きのこの山</h2>
                <Button
                  variant="contained"
                  onClick={() => addToCart({ name: "きのこの山", price: 130 })}
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                クラッカーのチョコ掛け
              </p>
              <h3 className="font-bold text-gray-900 dark:text-white">130円</h3>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">たけのこの里</h2>
                <Button
                  variant="contained"
                  onClick={() =>
                    addToCart({ name: "たけのこの里", price: 130 })
                  }
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                ビスケットのチョコ掛け
              </p>
              <h3 className="font-bold text-gray-900 dark:text-white">130円</h3>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">アルフォート</h2>
                <Button
                  variant="contained"
                  onClick={() =>
                    addToCart({ name: "アルフォート", price: 110 })
                  }
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                ビスケットのチョコ掛け
              </p>
              <h3 className="font-bold text-gray-900 dark:text-white">110円</h3>
            </div>
          </>
        )}
        {selectedTab === "お肉" && (
          <>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">牛バラ肉</h2>
                <Button
                  variant="contained"
                  onClick={() => addToCart({ name: "牛バラ肉", price: 200 })}
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">牛のバラ肉</p>
              <h3 className="font-bold text-gray-900 dark:text-white">200円</h3>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">豚こま切れ肉</h2>
                <Button
                  variant="contained"
                  onClick={() =>
                    addToCart({ name: "豚こま切れ肉", price: 180 })
                  }
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">豚のこま切れ肉</p>
              <h3 className="font-bold text-gray-900 dark:text-white">180円</h3>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">手羽先</h2>
                <Button
                  variant="contained"
                  onClick={() => addToCart({ name: "手羽先", price: 130 })}
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">鶏の手羽先</p>
              <h3 className="font-bold text-gray-900 dark:text-white">130円</h3>
            </div>
          </>
        )}
        {selectedTab === "野菜" && (
          <>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">レタス</h2>
                <Button
                  variant="contained"
                  onClick={() => addToCart({ name: "レタス", price: 110 })}
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                産地直送のレタス
              </p>
              <h3 className="font-bold text-gray-900 dark:text-white">110円</h3>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">トマト</h2>
                <Button
                  variant="contained"
                  onClick={() => addToCart({ name: "トマト", price: 140 })}
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">新鮮なトマト</p>
              <h3 className="font-bold text-gray-900 dark:text-white">140円</h3>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">かぼちゃ</h2>
                <Button
                  variant="contained"
                  onClick={() => addToCart({ name: "かぼちゃ", price: 200 })}
                >
                  買い物かごに追加
                </Button>
              </div>
              <p className="text-gray-500 dark:text-gray-400">冬至に食べよう</p>
              <h3 className="font-bold text-gray-900 dark:text-white">200円</h3>
            </div>
          </>
        )}
      </div>
      <section className="w-full mt-8">
        <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">カート</h2>
            <Button variant="contained" color="error" onClick={resetCart}>
              買い物かごを空にする
            </Button>
          </div>
          {/*
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              カートは空です
            </p>
          </div>
          */}
          <div className="mt-4">
            {cart.map((item, index) => (
              <div
                key={item.product.name}
                className={`flex flex-col justify-between items-start ${
                  index < cart.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <p className="flex-grow">
                  {item.product.name} - {item.quantity}個
                </p>
                <Button
                  className="mt-2"
                  variant="contained"
                  color="error"
                  onClick={() => removeFromCart(item.product)}
                >
                  数量を減らす
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
          <h2 className="font-semibold">合計金額</h2>
          <h3 className="font-bold text-gray-900 dark:text-white">
            {calculateTotal()}円
          </h3>
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
