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
        <div className="relative w-full h-full overflow-hidden rounded-xl">
            {/* Main Image */}
            <div className="relative w-full h-full">
                <div className={`w-full h-full bg-gradient-to-br ${jewelryImages[currentIndex].gradient} flex items-center justify-center transition-all duration-1000 ease-in-out`}>
                    <div className="text-center">
                        <div className="text-6xl mb-4 animate-pulse">{jewelryImages[currentIndex].emoji}</div>
                        <p className="text-stone-700 text-sm font-medium">{jewelryImages[currentIndex].name}</p>
                    </div>
                </div>

                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {jewelryImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-stone-900 w-6'
                            : 'bg-stone-300 hover:bg-stone-500'
                            }`}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + jewelryImages.length) % jewelryImages.length)}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-stone-700 hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
                ←
            </button>
            <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % jewelryImages.length)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center text-stone-700 hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
            >
                →
            </button>
        </div>
    )
}

