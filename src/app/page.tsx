import { NewArrivals } from "../components/NewArrivals";
import { DiscountedProducts } from "../components/DiscountedProducts";
import { FeaturedCategories } from "../components/FeaturedCategories";
import { BestSellers } from "../components/BestSellers";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ShieldCheck, Gem, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background with gold pattern overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-primary/30 rounded-full"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-primary/15 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 border border-primary/25 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Timeless Gold. <span className="text-primary">Eternal Elegance.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Explore our premium gold jewelry crafted with perfection. Each piece tells a story of luxury, tradition,
                and timeless beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full font-semibold">
                  Explore Collection
                </Button>
                <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg rounded-full font-semibold bg-transparent">
                  Book Appointment
                </Button>
              </div>
              {/* Trust Badges (Desktop Only) */}
              <div className="hidden lg:flex items-center justify-center lg:justify-start gap-8 mt-12">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span>Certified 22K Gold</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Gem className="w-5 h-5 text-primary" />
                  <span>Handcrafted Detail</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <HeartHandshake className="w-5 h-5 text-primary" />
                  <span>Lifetime Polish</span>
                </div>
              </div>
            </div>

            {/* Right content - Jewelry display */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="glass-surface rounded-2xl p-8">
                  <div className="w-full h-96 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-xl flex items-center justify-center">
                    <span className="text-8xl">💎</span>
                  </div>
                </div>
                {/* Soft gradient halo */}
                <div className="absolute inset-0 -m-4 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-xl opacity-70 animate-pulse-slow"></div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Discounted Products Section */}
      <DiscountedProducts />

      {/* Featured Categories Section */}
      <FeaturedCategories />

      {/* Best Sellers Section */}
      <BestSellers />

      {/* Newsletter CTA Section */}
      <NewsletterCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}

