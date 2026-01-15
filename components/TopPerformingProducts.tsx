import Image from "next/image"
import { TrendingUp, TrendingDown, ShoppingCart } from "lucide-react"

const products = [
    {
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        image: "/products/headphones.png",
        units: 145,
        sales: 892,
        growth: 23,
    },
    {
        name: "Ergonomic Office Chair",
        category: "Furniture",
        image: "/products/chair.jpg",
        units: 67,
        sales: 456,
        growth: 15,
    },
    {
        name: "Stainless Steel Water Bottle",
        category: "Accessories",
        image: "/products/bottle.jpg",
        units: 234,
        sales: 1203,
        growth: 31,
    },
    {
        name: "LED Desk Lamp",
        category: "Lighting",
        image: "/products/lamp.png",
        units: 18,
        sales: 287,
        growth: -8,
    },
]

export default function TopPerformingProducts() {
    return (
        <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-6">
                Top Performing Products
            </h3>

            <div className="space-y-5">
                {products.map((p, i) => {
                    const isPositive = p.growth >= 0

                    return (
                        <div
                            key={i}
                            className="flex items-center gap-4 border border-slate-200 rounded-xl p-4 hover:shadow-sm transition"
                        >
                            <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-100 flex-shrink-0">
                            <Image
                                src={p.image}
                                alt={p.name}
                                width={56}
                                height={56}
                                className="w-full h-full object-cover"
                            />
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-semibold text-slate-900">
                                        {p.name}
                                    </h4>

                                    <div
                                        className={`flex items-center gap-1 text-sm font-medium ${isPositive
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {isPositive ? (
                                            <TrendingUp size={16} />
                                        ) : (
                                            <TrendingDown size={16} />
                                        )}
                                        {Math.abs(p.growth)}%
                                    </div>
                                </div>

                                <p className="text-sm text-slate-500">
                                    {p.category}
                                </p>

                                <div className="flex items-center gap-6 mt-2 text-sm">
                                    <span className="text-green-600 font-medium">
                                        {p.units} units
                                    </span>

                                    <span className="flex items-center gap-1 text-slate-600">
                                        <ShoppingCart size={14} />
                                        {p.sales} sales
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
