"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "Rings",
        description: "Elegant engagement and wedding rings",
        emoji: "💍",
        gradient: "from-pink-100 via-rose-50 to-pink-50",
        count: 24
    },
    {
        id: 2,
        name: "Necklaces",
        description: "Timeless necklaces for every occasion",
        emoji: "💎",
        gradient: "from-blue-100 via-indigo-50 to-blue-50",
        count: 18
    },
    {
        id: 3,
        name: "Earrings",
        description: "Beautiful earrings to complement your style",
        emoji: "✨",
        gradient: "from-purple-100 via-violet-50 to-purple-50",
        count: 32
    },
    {
        id: 4,
        name: "Bracelets",
        description: "Elegant bracelets for wrist adornment",
        emoji: "🔗",
        gradient: "from-green-100 via-emerald-50 to-green-50",
        count: 15
    },
    {
        id: 5,
        name: "Pendants",
        description: "Meaningful pendants with personal touch",
        emoji: "💫",
        gradient: "from-orange-100 via-amber-50 to-orange-50",
        count: 21
    },
    {
        id: 6,
        name: "Wedding Collection",
        description: "Complete bridal jewelry sets",
        emoji: "👰",
        gradient: "from-red-100 via-pink-50 to-red-50",
        count: 12
    }
];

export function FeaturedCategories() {
    return (
        <div className="py-20 relative">
            {/* Subtle background element that flows */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-secondary/3 opacity-60"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <SectionHeader
                    eyebrow="Explore"
                    title="Shop by Category"
                    subtitle="Discover our curated collections organized by your favorite jewelry types"
                    className="mb-16"
                />

                {/* Desktop Grid Layout */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:border-primary/30 overflow-hidden cursor-pointer"
                        >
                            {/* Category Image */}
                            <div className="relative mb-6 overflow-hidden rounded-2xl">
                                <div className={`aspect-square bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                                    <span className="text-6xl">{category.emoji}</span>
                                </div>

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                            </div>

                            {/* Category Info */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                                        {category.count} items
                                    </span>
                                </div>

                                <p className="text-muted-foreground leading-relaxed">
                                    {category.description}
                                </p>

                                <Link href={`/collections?category=${encodeURIComponent(category.name)}`}>
                                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-2xl py-3 group-hover:shadow-lg transition-all duration-300">
                                        Explore {category.name}
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile/Tablet Grid Layout */}
                <div className="lg:hidden mb-12">
                    <div className="grid grid-cols-2 gap-4">
                        {categories.map((category) => (
                            <Reveal key={category.id} y={12} once>
                                <Link href={`/collections?category=${encodeURIComponent(category.name)}`}>
                                    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/20 cursor-pointer">
                                        {/* Category Image */}
                                        <div className="relative mb-4 overflow-hidden rounded-xl">
                                            <div className={`aspect-square bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
                                                <span className="text-3xl">{category.emoji}</span>
                                            </div>
                                        </div>

                                        {/* Category Info */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                                                    {category.name}
                                                </h3>
                                                <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-full">
                                                    {category.count}
                                                </span>
                                            </div>

                                            <p className="text-xs text-muted-foreground line-clamp-2">
                                                {category.description}
                                            </p>

                                            <Button size="sm" variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl text-xs">
                                                Explore
                                            </Button>
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* View All Categories Button */}
                <div className="text-center">
                    <Link href="/collections">
                        <Button variant="outline" size="lg" className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 rounded-full transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl">
                            View All Categories
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
