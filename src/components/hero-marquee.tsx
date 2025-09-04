"use client"

import { useEffect, useState } from "react"

const jewelryImages = [
    {
        id: 1,
        name: "Elegant Gold Ring",
        emoji: "💍",
        gradient: "from-amber-200 via-yellow-100 to-amber-50"
    },

    
    {
        id: 2,
        name: "Diamond Necklace",
        emoji: "💎",
        gradient: "from-blue-100 via-indigo-50 to-purple-50"
    },
    {
        id: 3,
        name: "Pearl Earrings",
        emoji: "🫧",
        gradient: "from-pink-100 via-rose-50 to-orange-50"
    },
    {
        id: 4,
        name: "Gold Bracelet",
        emoji: "✨",
        gradient: "from-amber-100 via-orange-50 to-yellow-50"
    },
    {
        id: 5,
        name: "Sapphire Ring",
        emoji: "🔷",
        gradient: "from-blue-200 via-cyan-50 to-teal-50"
    },
    {
        id: 6,
        name: "Ruby Pendant",
        emoji: "❤️",
        gradient: "from-red-100 via-pink-50 to-rose-50"
    }
]

export function HeroMarquee() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % jewelryImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="relative w-full h-full overflow-hidden rounded-xl group">
            {/* Main Image */}
            <div className="relative w-full h-full">
                <div className={`w-full h-full bg-gradient-to-br ${jewelryImages[currentIndex].gradient} flex items-center justify-center transition-all duration-1000 ease-in-out relative overflow-hidden`}>
                    {/* Floating sparkles background */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping delay-500"></div>
                        <div className="absolute top-8 right-6 w-1 h-1 bg-white/40 rounded-full animate-ping delay-1000"></div>
                        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping delay-1500"></div>
                        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white/25 rounded-full animate-ping delay-2000"></div>
                    </div>
                    
                    <div className="text-center relative z-10">
                        <div className="text-6xl mb-4 animate-pulse relative">
                            {jewelryImages[currentIndex].emoji}
                            {/* Glitter effect around emoji */}
                            <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-300/60 rounded-full animate-bounce delay-300"></div>
                            <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-yellow-200/50 rounded-full animate-bounce delay-700"></div>
                        </div>
                        <p className="text-stone-700 text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">{jewelryImages[currentIndex].name}</p>
                    </div>
                </div>

                {/* Enhanced overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 glass-surface px-3 py-2 rounded-full border border-white/20">
                {jewelryImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-primary w-6 shadow-lg'
                            : 'bg-white/60 hover:bg-white/80'
                            }`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + jewelryImages.length) % jewelryImages.length)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 glass-surface backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20 hover:scale-110"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % jewelryImages.length)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 glass-surface backdrop-blur rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg border border-white/20 hover:scale-110"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
}

