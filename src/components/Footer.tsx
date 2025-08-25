import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-card border-t border-border py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Logo */}
                    <Link href="/" className="inline-flex items-center space-x-2 mb-8">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-primary-foreground font-bold">Vn</span>
                        </div>
                        <span className="font-serif font-bold text-2xl text-foreground">Vinay Arts</span>
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
