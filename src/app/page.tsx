import { NewArrivals } from "../components/NewArrivals";
import { DiscountedProducts } from "../components/DiscountedProducts";
import { FeaturedCategories } from "../components/FeaturedCategories";
import { BestSellers } from "../components/BestSellers";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ShieldCheck, Gem, HeartHandshake, Sparkles, Star, Crown, Zap } from "lucide-react";
import { HeroMarquee } from "../components/hero-marquee";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden pt-18">
        {/* Enhanced Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted">
          {/* Animated decorative circles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 border border-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-32 w-24 h-24 border border-primary/40 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 border border-primary/25 rounded-full animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 border border-primary/35 rounded-full animate-pulse delay-1500"></div>
            <div className="absolute top-1/2 left-10 w-20 h-20 border border-secondary/30 rounded-full animate-pulse delay-500"></div>
            <div className="absolute top-1/3 right-10 w-16 h-16 border border-secondary/25 rounded-full animate-pulse delay-3000"></div>
          </div>
          
          {/* Floating sparkles and stars */}
          <div className="absolute inset-0 pointer-events-none">
            <Sparkles className="absolute top-32 left-1/4 w-6 h-6 text-primary/40 animate-bounce delay-700" />
            <Star className="absolute top-48 right-1/3 w-5 h-5 text-secondary/50 animate-pulse delay-1200" />
            <Crown className="absolute bottom-40 left-1/3 w-7 h-7 text-primary/30 animate-bounce delay-2000" />
            <Zap className="absolute top-1/2 right-1/4 w-5 h-5 text-secondary/40 animate-pulse delay-800" />
            <Gem className="absolute bottom-1/3 right-1/5 w-6 h-6 text-primary/35 animate-bounce delay-1500" />
            <Sparkles className="absolute top-1/4 left-1/2 w-4 h-4 text-secondary/45 animate-pulse delay-2500" />
          </div>
          
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-secondary/5"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:py-16">
            {/* Image above on mobile, right on desktop */}
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded-2xl md:order-2 group glass-surface shadow-2xl border border-white/20">
              <HeroMarquee />
              {/* Floating decorative elements around the marquee */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-bounce delay-1000">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center animate-pulse delay-2000">
                <Star className="w-3 h-3 text-secondary" />
              </div>
            </div>

            {/* Text content */}
            <div className="order-2 text-center md:order-1 md:text-left relative">
              {/* Decorative header badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <Crown className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Premium Collection</span>
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              </div>
              
              <h1 className="text-pretty text-4xl leading-tight text-foreground md:text-5xl font-serif font-bold mb-6 relative">
                Make milestones <span className="text-primary relative">
                  memorable
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary/20 rounded-full animate-bounce"></div>
                </span>
              </h1>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed text-lg">
                Celebrate with handmade, custom jewelry crafted for life&apos;s most meaningful moments.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    <Gem className="w-5 h-5" />
                    Explore Collection
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
                <Button variant="outline" className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg rounded-full font-semibold bg-transparent glass-surface hover:shadow-lg transition-all duration-300 transform hover:scale-105 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Book Appointment
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </div>
              {/* Trust Badges (Desktop Only) */}
              <div className="hidden lg:flex items-center justify-center lg:justify-start gap-6 mt-12">
                <div className="flex items-center gap-2 text-muted-foreground glass-surface px-4 py-2 rounded-full border border-white/20 hover:border-primary/30 transition-all duration-300">
                  <ShieldCheck className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-sm font-medium">Certified 22K Gold</span>
                </div>

                
                <div className="flex items-center gap-2 text-muted-foreground glass-surface px-4 py-2 rounded-full border border-white/20 hover:border-primary/30 transition-all duration-300">
                  <Gem className="w-5 h-5 text-primary animate-pulse delay-500" />
                  <span className="text-sm font-medium">Handcrafted Detail</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground glass-surface px-4 py-2 rounded-full border border-white/20 hover:border-primary/30 transition-all duration-300">
                  <HeartHandshake className="w-5 h-5 text-primary animate-pulse delay-1000" />
                  <span className="text-sm font-medium">Lifetime Polish</span>
                </div>
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

