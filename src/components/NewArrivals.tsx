"use client";

import { Star, Heart, Eye, ShoppingCart, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/Reveal";

const newArrivalsData = [
    {
        id: 1,
        name: "Modern Gold Ring Set",
        price: 35000,
        originalPrice: 42000,
        rating: 4.8,
        reviews: 45,
        category: "Rings",
        isNew: true,
        discount: 17,
    },
    {
        id: 2,
        name: "Elegant Gold Chain",
        price: 85000,
        originalPrice: 95000,
        rating: 4.9,
        reviews: 67,
        category: "Necklaces",
        isNew: true,
        discount: 11,
    },
    {
        id: 3,
        name: "Designer Gold Earrings",
        price: 55000,
        originalPrice: 65000,
        rating: 4.7,
        reviews: 38,
        category: "Earrings",
        isNew: true,
        discount: 15,
    },
    {
        id: 4,
        name: "Premium Gold Bracelet",
        price: 75000,
        originalPrice: 85000,
        rating: 4.8,
        reviews: 52,
        category: "Bracelets",
        isNew: true,
        discount: 12,
    },
];

export function NewArrivals() {
    return (
        <section className="py-16 bg-gradient-to-br from-background via-card/20 to-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Just Arrived"
                    title="New Arrivals"
                    subtitle="Be the first to discover our latest jewelry collections, crafted with the finest materials"
                    className="mb-12"
                />

                {/* Desktop Grid Layout */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-6 mb-8">
                    {newArrivalsData.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-card rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-border/50 hover:border-primary/30"
                        >
                            {/* Product Image */}
                            <div className="relative mb-4 overflow-hidden rounded-xl">
                                <div className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-xl flex items-center justify-center">
                                    <span className="text-4xl">💍</span>
                                </div>

                                {/* New Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="glass-surface px-3 py-1 rounded-full text-xs font-bold text-primary-foreground bg-primary">
                                        NEW
                                    </span>
                                </div>

                                {/* Discount Badge */}
                                <div className="absolute top-3 right-3">
                                    <span className="glass-surface px-3 py-1 rounded-full text-xs font-bold text-secondary-foreground bg-secondary">
                                        -{product.discount}%
                                    </span>
                                </div>

                                {/* Quick Actions */}
                                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                    <button className="glass-surface w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors hover:scale-110">
                                        <Heart className="w-5 h-5" />
                                    </button>
                                    <button className="glass-surface w-10 h-10 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors hover:scale-110">
                                        <Eye className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
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

                                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-3">
                                    <span className="text-xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                                    <span className="text-lg text-muted-foreground line-through">
                                        ₹{product.originalPrice.toLocaleString()}
                                    </span>
                                </div>

                                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300">
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
                        {newArrivalsData.map((product) => (
                            <Reveal key={product.id} y={12} once>
                                <div
                                    className="flex-shrink-0 w-72 bg-card rounded-xl p-4 shadow-lg border border-border/50"
                                >
                                    {/* Product Image */}
                                    <div className="relative mb-4 overflow-hidden rounded-lg">
                                        <div className="aspect-square bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-lg flex items-center justify-center">
                                            <span className="text-3xl">💍</span>
                                        </div>

                                        {/* Badges */}
                                        <div className="absolute top-2 left-2 flex gap-1">
                                            <span className="glass-surface px-2 py-1 rounded-full text-xs font-bold text-primary-foreground bg-primary">
                                                NEW
                                            </span>
                                            <span className="glass-surface px-2 py-1 rounded-full text-xs font-bold text-secondary-foreground bg-secondary">
                                                -{product.discount}%
                                            </span>
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
                                            <span className="text-sm text-muted-foreground line-through">
                                                ₹{product.originalPrice.toLocaleString()}
                                            </span>
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
                    <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full transition-all duration-300">
                        View All New Arrivals
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
