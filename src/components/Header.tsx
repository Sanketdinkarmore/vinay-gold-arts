"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
    const [open, setOpen] = useState(false);

    const linkCls = "relative text-foreground transition-colors hover:text-primary after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

    return (
        <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left: Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-sm">Vn</span>
                        </div>
                        <span className="font-serif font-bold text-xl text-foreground">Vinay Arts</span>
                    </Link>

                    {/* Center: Desktop nav */}
                    <nav className="hidden md:flex items-center space-x-10">
                        <Link href="/" className={linkCls}>
                            Home
                        </Link>
                        <Link href="/collections" className={linkCls}>
                            Collections
                        </Link>
                        <Link href="/about" className={linkCls}>
                            About Us
                        </Link>
                        <Link href="/contact" className={linkCls}>
                            Contact
                        </Link>
                    </nav>

                    {/* Right: icons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-semibold shadow-sm">
                            Shop Now
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            className="p-2"
                            aria-label="Open menu"
                            onClick={() => setOpen(true)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {open && (
                    <div className="md:hidden py-4 border-t border-border">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-semibold text-foreground">Menu</span>
                            <button
                                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Close menu"
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <nav className="flex flex-col space-y-4">
                            <Link
                                href="/"
                                className="text-foreground hover:text-primary transition-colors py-2"
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/collections"
                                className="text-foreground hover:text-primary transition-colors py-2"
                                onClick={() => setOpen(false)}
                            >
                                Collections
                            </Link>
                            <Link
                                href="/about"
                                className="text-foreground hover:text-primary transition-colors py-2"
                                onClick={() => setOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                href="/contact"
                                className="text-foreground hover:text-primary transition-colors py-2"
                                onClick={() => setOpen(false)}
                            >
                                Contact
                            </Link>
                            <button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4 py-3 rounded-full font-semibold">
                                Shop Now
                            </button>
                        </nav>
                    </div>
                )}
            </div>
            {/* Subtle gold divider for desktop */}
            <div className="hidden md:block h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </header>
    );
}


