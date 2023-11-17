/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6IqY3vS7jUP
 */
import { Button } from "@mui/material"
import Link from "next/link"

export default function Component() {
    return (
        <section className="w-full h-screen flex flex-col items-center justify-center space-y-8 bg-gray-100 dark:bg-gray-900">
            <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">Step-by-step Tutorial</div>
            <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700 dark:text-gray-300">
                <li className="bg-gray-200 dark:bg-gray-800 p-4 rounded">Step 1: 商品を選択</li>
                <li className="bg-gray-200 dark:bg-gray-800 p-4 rounded">Step 2: カートを確認</li>
                <li className="bg-gray-200 dark:bg-gray-800 p-4 rounded">Step 3: 決済画面へ</li>
            </ol>
            <div className="flex space-x-4">
                <Link href={"/"}>
                    <Button
                        className="px-6 py-2 text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200"
                        variant="outlined"
                    >
                        スタート画面に戻る
                    </Button>
                </Link>
                <Link href={"/select"}>
                    <Button className="px-6 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800">商品選択画面へ</Button>
                </Link>
            </div>
        </section>
    )
}
