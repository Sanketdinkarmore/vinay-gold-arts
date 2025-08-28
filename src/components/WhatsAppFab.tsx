"use client";

import { useState } from "react";

export function WhatsAppFab() {
    const [showChat, setShowChat] = useState(false);
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0123456789";

    const handleOptionSelect = (option: number) => {
        let message = "";
        switch (option) {
            case 1:
                message = "Hi! I'm interested in your Collections & Catalog. Can you show me your rings and necklaces?";
                break;
            case 2:
                message = "Hi! I'd like to know your Price Range & Quotes for gold jewelry. What are your rates?";
                break;
            case 3:
                message = "Hi! I want to Book an Appointment to see your jewelry collection in person.";
                break;
            case 4:
                message = "Hi! I have some other questions about your jewelry business and policies.";
                break;
        }

        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
        setShowChat(false);
    };

    return (
        <>
            {/* Chat Interface */}
            {showChat && (
                <div className="fixed bottom-20 right-5 z-50 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700">
                    {/* Chat Header */}
                    <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Vinay Arts Assistant</h3>
                            <button
                                onClick={() => setShowChat(false)}
                                className="text-white hover:text-gray-200"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-sm opacity-90">How can I help you today?</p>
                    </div>

                    {/* Chat Options */}
                    <div className="p-4 space-y-3">
                        <button
                            onClick={() => handleOptionSelect(1)}
                            className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🏺</span>
                                <div>
                                    <div className="font-medium text-white">Collections & Catalog</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Browse our jewelry collection</div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => handleOptionSelect(2)}
                            className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">💰</span>
                                <div>
                                    <div className="font-medium text-white">Price Range & Quotes</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Get pricing information</div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => handleOptionSelect(3)}
                            className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">📅</span>
                                <div>
                                    <div className="font-medium text-white">Book Appointment</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Schedule a visit</div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => handleOptionSelect(4)}
                            className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">❓</span>
                                <div>
                                    <div className="font-medium text-white">Other Questions</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Ask anything else</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            )}

            {/* WhatsApp Button */}
            <button
                onClick={() => setShowChat(!showChat)}
                className="fixed bottom-5 right-5 z-40"
            >
                <div className="rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    <div className="h-14 w-14 md:h-16 md:w-16 rounded-full grid place-items-center" style={{ background: "#25D366" }}>
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M27.6 4.4A15.9 15.9 0 0016 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.2 2 7.4L.8 31.2l7.9-1.9c2.1 1.1 4.5 1.7 7 1.7 8.4 0 15.2-6.8 15.2-15.2 0-4.1-1.6-8-4.3-10.6z" fill="#fff" fillOpacity="0.15" />
                            <path d="M16 3.3C9 3.3 3.3 9 3.3 16c0 2.6.8 4.9 2.1 6.9l-.9 3.3 3.4-.9c1.9 1.2 4.2 1.9 6.8 1.9 7 0 12.7-5.7 12.7-12.7S23 3.3 16 3.3zM21.4 18.9c-.3-.1-1.9-.9-2.2-1-.3-.1-.5-.1-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.2.3-.3.4-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2.1 3.2 5 4.5.7.3 1.3.6 1.7.7.7.2 1.3.2 1.8.1.5-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.5-.1-.1-.3-.2-.6-.3z" fill="#ffffff" />
                        </svg>
                    </div>
                </div>
            </button>
        </>
    );
}
