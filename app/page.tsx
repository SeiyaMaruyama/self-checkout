/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ySF4n4VXV0U
 */

// import Image from 'next/image'
import * as React from 'react';
import { Button } from '@mui/material';
// import { Link } from "react-router-dom";

/*
*
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
*
* */

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">


                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                        セルフレジのデモ
                    </h2>
                </div>
                <div className="mt-8 space-y-6">
                    <div>
                        <Button
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit"
                            //component={Link} to="app/select"
                        >
                            スタート
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
