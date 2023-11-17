/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AC6YqcoATmG
 */

"use client"

import React, { useState, useEffect } from "react";
import prisma from "@/lib/prisma";
import { Button } from "@mui/material";
import Link from "next/link";

const SelectComponent = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [time, setTime] = useState<number>(0);
  // const [measurementId, setMeasurementId] = useState<string | null>(null);

  // const prisma = new PrismaClient();

  useEffect(() => {
    const createMeasurement = async () => {
      const audio = new Audio('public/Nice_Wake_Up.mp3');
      await audio.play();
    };
  });
  // , [startTime, time, prisma]);

  const handleClick = async () => {
    const endTime = new Date();
    // setStartTime(start);
    setTime(endTime.getTime() - startTime.getTime());
    await prisma.user.create({
      //where: { id: measurementId },
      data: {
        startTime: startTime,
        time: time,
      },
    });
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
            <h2 className="font-semibold">Product 1</h2>
            <Button variant="outlined">Add to cart</Button>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Description of product 1
          </p>
          <h3 className="font-bold text-gray-900 dark:text-white">$19.99</h3>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Product 2</h2>
            <Button variant="outlined">Add to cart</Button>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Description of product 2
          </p>
          <h3 className="font-bold text-gray-900 dark:text-white">$29.99</h3>
        </div>
        <div className="border border-gray-200 p-4 rounded-lg dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Product 3</h2>
            <Button variant="outlined">Add to cart</Button>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            Description of product 3
          </p>
          <h3 className="font-bold text-gray-900 dark:text-white">$39.99</h3>
        </div>
      </div>
      <section className="w-full mt-8">
        <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">カート</h2>
            <Button variant="contained">カートのリセット</Button>
          </div>
          <div className="mt-4">
            <p className="text-gray-500 dark:text-gray-400">
              No items in the cart.
            </p>
          </div>
        </div>
        <div className="mt-4 bg-gray-100 p-4 rounded-lg dark:bg-gray-800">
          <h2 className="font-semibold">Total</h2>
          <h3 className="font-bold text-gray-900 dark:text-white">$0.00</h3>
        </div>
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
      </section>
    </section>
  );
};

export default SelectComponent;
