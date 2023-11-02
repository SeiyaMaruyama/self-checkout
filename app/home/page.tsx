/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ySF4n4VXV0U
 */

// import Image from 'next/image'
import * as React from 'react';
import { Button } from '@mui/material';
// import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <img
                        alt="Company Logo"
                        className="mx-auto h-12 w-auto"
                        height={72}
                        src=""
                        style={{
                            aspectRatio: "72/72",
                            objectFit: "cover",
                        }}
                        width={72}
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                        セルフレジを開始する
                    </h2>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <input
                            aria-label="Barcode"
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-gray-200 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            name="barcode"
                            placeholder="バーコードを入力してください"
                            required
                            type="text"
                        />
                    </div>
                    <div>
                        <Button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit"
                        >
                            スタート
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
