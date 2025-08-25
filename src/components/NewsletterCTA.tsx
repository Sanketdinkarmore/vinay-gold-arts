import { Button } from "./ui/button";

export function NewsletterCTA() {
    return (
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Stay Updated
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                        Subscribe to our newsletter for exclusive offers, new arrivals, and jewelry care tips.
                        Be the first to know about our latest collections and special promotions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-3 border border-border rounded-full bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg whitespace-nowrap">
                            Subscribe
                        </Button>
                    </div>

                    <p className="text-sm text-muted-foreground mt-4">
                        We respect your privacy. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
}
