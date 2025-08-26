"use client";

import { useState } from "react";
import { Mail, Send, Sparkles, Gift } from "lucide-react";
import { Button } from "./ui/button";

export function NewsletterCTA() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmail("");

        // Reset after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
                <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-24 h-24 border border-secondary/30 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-primary/15 rounded-full animate-pulse delay-2000"></div>
                <div className="absolute bottom-10 right-10 w-28 h-28 border border-secondary/25 rounded-full animate-pulse delay-1500"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                            <span className="text-sm font-medium text-primary uppercase tracking-wider">Exclusive Offers</span>
                            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                        </div>
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Stay Updated with Exclusive Offers
                        </h2>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Be the first to know about new collections, special discounts, and exclusive jewelry events
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid sm:grid-cols-3 gap-6 mb-12">
                        <div className="glass-surface rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Gift className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Exclusive Discounts</h3>
                            <p className="text-sm text-muted-foreground">Get up to 30% off on new arrivals</p>
                        </div>
                        <div className="glass-surface rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">Early Access</h3>
                            <p className="text-sm text-muted-foreground">Shop new collections before anyone else</p>
                        </div>
                        <div className="glass-surface rounded-xl p-6 text-center">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">VIP Events</h3>
                            <p className="text-sm text-muted-foreground">Invitations to exclusive jewelry showcases</p>
                        </div>
                    </div>

                    {/* Newsletter Form */}
                    <div className="glass-surface rounded-2xl p-8 sm:p-12 max-w-2xl mx-auto">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full pl-12 pr-4 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                                            Subscribing...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Send className="w-5 h-5" />
                                            Subscribe Now
                                        </div>
                                    )}
                                </Button>
                            </form>
                        ) : (
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto">
                                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground">Successfully Subscribed!</h3>
                                <p className="text-muted-foreground">Thank you for joining our exclusive newsletter. Check your email for confirmation.</p>
                            </div>
                        )}

                        <p className="text-xs text-muted-foreground mt-4 text-center">
                            We respect your privacy. Unsubscribe at any time.
                        </p>
                    </div>

                    {/* Social Proof */}
                    <div className="mt-12 text-center">
                        <p className="text-sm text-muted-foreground mb-2">Join over 10,000+ jewelry enthusiasts</p>
                        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                            <span>✓ No spam</span>
                            <span>✓ Weekly updates</span>
                            <span>✓ Exclusive offers</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
