"use client";

import { Star, Heart, Eye, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/Reveal";

const bestSellersData = [
    {
        id: 1,
        name: "Traditional 22K Gold Ring",
        price: 45000,
        originalPrice: 52000,
        rating: 4.9,
        reviews: 127,
        category: "Rings",
        isNew: false,
        isTrending: true,
    },
    {
        id: 2,
        name: "Elegant Gold Necklace Set",
        price: 125000,
        originalPrice: 145000,
        rating: 4.8,
        reviews: 89,
        category: "Necklaces",
        isNew: true,
        isTrending: true,
    },
    {
        id: 3,
        name: "Bridal Gold Earrings",
        price: 85000,
        originalPrice: 95000,
        rating: 4.9,
        reviews: 156,
        category: "Earrings",
        isNew: false,
        isTrending: true,
    },
    {
        id: 4,
        name: "Classic Gold Bracelet",
        price: 65000,
        originalPrice: 72000,
        rating: 4.7,
        reviews: 94,
        category: "Bracelets",
        isNew: false,
        isTrending: false,
    },
    {
        id: 5,
        name: "Modern Gold Pendant",
        price: 35000,
        originalPrice: 40000,
        rating: 4.8,
        reviews: 73,
        category: "Pendants",
        isNew: true,
        isTrending: true,
    },
    {
        id: 6,
        name: "Royal Gold Bangle Set",
        price: 95000,
        originalPrice: 110000,
        rating: 4.9,
        reviews: 112,
        category: "Bangles",
        isNew: false,
        isTrending: true,
    },
];

export function BestSellers() {
    return (
        <section className="py-16 bg-gradient-to-br from-background via-card/30 to-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Most Loved"
                    title="Best Sellers & Trending"
                    subtitle="Discover our most loved jewelry pieces that customers can&apos;t stop talking about"
                    className="mb-12"
                />

                {/* Desktop Grid Layout */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
                    {bestSellersData.slice(0, 3).map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Product Image */}
                            <div className="relative mb-6 overflow-hidden rounded-xl">
                                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                                    <span className="text-4xl">💎</span>
                                </div>

                                {/* Badges */}
                                <div className="absolute top-3 left-3 flex gap-2">
                                    {product.isNew && (
                                        <span className="glass-surface px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground bg-primary">
                                            NEW
                                        </span>
                                    )}
                                    {product.isTrending && (
                                        <span className="glass-surface px-3 py-1 rounded-full text-xs font-semibold text-secondary-foreground bg-secondary">
                                            TRENDING
                                        </span>
                                    )}
                                </div>

                                {/* Quick Actions */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button className="glass-surface w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="glass-surface w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground font-medium">{product.category}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 fill-primary text-primary" />
                                        <span className="text-sm font-semibold">{product.rating}</span>
                                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                                    </div>
                                </div>

                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                                    {product.originalPrice > product.price && (
                                        <span className="text-lg text-muted-foreground line-through">
                                            ₹{product.originalPrice.toLocaleString()}
                                        </span>
                                    )}
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Horizontal Scroll */}
                <div className="lg:hidden mb-8">
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                        {bestSellersData.map((product) => (
                            <Reveal key={product.id} y={12} once>
                                <div
                                    className="flex-shrink-0 w-72 bg-card rounded-xl p-4 shadow-lg"
                                >
                                    {/* Product Image */}
                                    <div className="relative mb-4 overflow-hidden rounded-lg">
                                        <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                                            <span className="text-3xl">💎</span>
                                        </div>

                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 flex gap-1">
                                            {product.isNew && (
                                                <span className="glass-surface px-2 py-1 rounded-full text-xs font-semibold text-primary-foreground bg-primary">
                                                    NEW
                                                </span>
                                            )}
                                            {product.isTrending && (
                                                <span className="glass-surface px-2 py-1 rounded-full text-xs font-semibold text-secondary-foreground bg-secondary">
                                                    HOT
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs text-muted-foreground font-medium">{product.category}</span>
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3 h-3 fill-primary text-primary" />
                                                <span className="text-xs font-semibold">{product.rating}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-semibold text-sm text-foreground line-clamp-2">
                                            {product.name}
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                                            {product.originalPrice > product.price && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    ₹{product.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                        </div>

                                        <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                                            <ShoppingCart className="w-3 h-3 mr-1" />
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
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full">
                        View All Best Sellers
                    </Button>
                </div>
            </div>
        </section>
    );
}
