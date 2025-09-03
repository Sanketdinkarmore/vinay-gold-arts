import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Logo */}
                    <Link href="/" className="inline-flex items-center space-x-2 mb-8">
                        <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-border">
                            <Image src="/logo1.jpg" alt="Vnay Arts Logo" width={36} height={33} className="h-10 w-10 object-cover" />
                        </div>
                        <span className="font-serif font-bold text-2xl text-foreground">Vnay Gold Creations</span>
                        {/* Tagline for clarity */}
                        <span className="block text-xs font-medium text-primary mt-1 tracking-wide">1 Gram Gold Jewellery</span>
                    </Link>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-8 mb-8">
                        <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                            Contact Us
                        </Link>
                        <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                            Shipping Info
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center space-x-6 mb-8">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="text-2xl">📷</span>
                            <span className="sr-only">Instagram</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="text-2xl">📘</span>
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <span className="text-2xl">💬</span>
                            <span className="sr-only">WhatsApp</span>
                        </Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-muted-foreground text-sm">
                        © 2024 Vinay Arts. All rights reserved. Crafted with love for timeless beauty.
                    </p>
                </div>
            </div>
        </footer>
    );
}
