/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AC6YqcoATmG
 */

import React, { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";
import { Button } from "@mui/material";

const SelectComponent = () => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [timeDiff, setTimeDiff] = useState<Date | null>(null);
  const [measurementId, setMeasurementId] = useState<string | null>(null);

  const prisma = new PrismaClient();

  useEffect(() => {
    const createMeasurement = async () => {
      const audio = new Audio('public/Nice_Wake_Up.mp3');
      audio.play();

      const measurement = await prisma.user.create({
        data: {
          // name: "Test User",
          startTime: startTime,
          endTime: endTime,
          timeDiff: timeDiff,
        },
      });
      setMeasurementId(measurement.id);
    };
    if (startTime && endTime && timeDiff) {
      createMeasurement();
    }
  }, [startTime, endTime, timeDiff, prisma]);

  const handleClick = async () => {
    const start = new Date();
    setStartTime(start);
    const end = new Date();
    setEndTime(end);
    setTimeDiff(new Date(end.getTime() - start.getTime()));
    if (measurementId) {
      await prisma.user.update({
        where: { id: measurementId },
        data: {
          startTime: start,
          endTime: end,
          timeDiff: new Date(end.getTime() - start.getTime()),
        },
      });
    }
  };

  return (
    <section className="container mx-auto px-4 md:px-8 py-8">
      <section className="w-full py-6">
        <input
          aria-label="Search"
          className="w-full p-2 border-2 border-gray-300 rounded-md dark:border-gray-700 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400"
          placeholder="Search products"
          type="text"
        />
      </section>
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
            <h2 className="font-semibold">Cart</h2>
            <Button variant="contained">Clear Cart</Button>
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
        <Button
          className="py-2 px-6 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-400"
          type="submit"
          variant="contained"
        >
          Proceed to Checkout
        </Button>
      </section>
    </section>
  );
};

export default SelectComponent;
