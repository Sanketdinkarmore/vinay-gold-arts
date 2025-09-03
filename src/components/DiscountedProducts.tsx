"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/Reveal";

const discountedProductsData = [
    {
        id: 1,
        name: "Wedding Gold Ring Set",
        price: 85000,
        originalPrice: 120000,
        rating: 4.9,
        reviews: 89,
        category: "Rings",
        discount: 29,
    },
    {
        id: 2,
        name: "Traditional Gold Necklace",
        price: 95000,
        originalPrice: 135000,
        rating: 4.8,
        reviews: 67,
        category: "Necklaces",
        discount: 30,
    },
    {
        id: 3,
        name: "Bridal Gold Earrings",
        price: 65000,
        originalPrice: 95000,
        rating: 4.9,
        reviews: 112,
        category: "Earrings",
        discount: 32,
    },
    {
        id: 4,
        name: "Classic Gold Bracelet",
        price: 45000,
        originalPrice: 65000,
        rating: 4.7,
        reviews: 78,
        category: "Bracelets",
        discount: 31,
    },
];

export function DiscountedProducts() {
    return (
        <div className="py-20 relative">
            {/* Subtle background element that flows */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/20 to-transparent opacity-60"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <SectionHeader
                    eyebrow="Limited Time"
                    title="Special Offers & Discounts"
                    subtitle="Don't miss out on these incredible deals on premium gold jewelry"
                    className="mb-16"
                />

                {/* Desktop Grid Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 mb-12">
                    {discountedProductsData.slice(0, 2).map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:border-amber-300/30 overflow-hidden"
                        >
                            {/* Product Image */}
                            <div className="relative mb-8 overflow-hidden rounded-2xl">
                                <div className="aspect-square bg-gradient-to-br from-amber-100/50 via-yellow-100/30 to-amber-50/50 rounded-2xl flex items-center justify-center">
                                    <span className="text-6xl">💍</span>
                                </div>

                                {/* Discount Badge */}
                                <div className="absolute top-6 left-6">
                                    <span className="bg-amber-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                                        -{product.discount}%
                                    </span>
                                </div>

                                {/* Quick Actions */}
                                <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                    <button className="glass-surface w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:text-amber-600 transition-colors hover:scale-110 shadow-lg">
                                        <span className="text-xl">❤️</span>
                                    </button>
                                    <button className="glass-surface w-12 h-12 rounded-full flex items-center justify-center text-foreground hover:text-amber-600 transition-colors hover:scale-110 shadow-lg">
                                        <span className="text-xl">👁️</span>
                                    </button>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground font-medium">{product.category}</span>
                                    <div className="flex items-center gap-1">
                                        <span className="text-yellow-500">⭐</span>
                                        <span className="text-sm font-semibold">{product.rating}</span>
                                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                                    </div>
                                </div>

                                <h3 className="font-semibold text-xl text-foreground group-hover:text-amber-600 transition-colors line-clamp-2">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-4">
                                    <span className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                                    <span className="text-xl text-muted-foreground line-through">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                </div>

                                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white group-hover:shadow-lg transition-all duration-300 rounded-2xl py-4 text-lg font-semibold">
                                    <span className="mr-2">🛒</span>
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Horizontal Scroll */}
                <div className="lg:hidden mb-12">
                    <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6">
                        {discountedProductsData.map((product) => (
                            <Reveal key={product.id} y={12} once>
                                <div className="flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/20">
                                    {/* Product Image */}
                                    <div className="relative mb-6 overflow-hidden rounded-2xl">
                                        <div className="aspect-square bg-gradient-to-br from-amber-100/50 via-yellow-100/30 to-amber-50/50 rounded-2xl flex items-center justify-center">
                                            <span className="text-4xl">💍</span>
                                        </div>

                                        {/* Discount Badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                                -{product.discount}%
                                            </span>
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-muted-foreground font-medium">{product.category}</span>
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500">⭐</span>
                                                <span className="text-xs font-semibold">{product.rating}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-semibold text-sm text-foreground line-clamp-2">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                                            <span className="text-sm text-muted-foreground line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
                                        </div>

                                        <Button size="sm" className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-2xl">
                                            <span className="mr-1">🛒</span>
                                            Add to Cart
                                        </Button>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Button variant="outline" size="lg" className="group border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-10 py-4 rounded-full transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                        View All Offers
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
