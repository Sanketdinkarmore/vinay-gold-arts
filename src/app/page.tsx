import { NewArrivals } from "../components/NewArrivals";
import { DiscountedProducts } from "../components/DiscountedProducts";
import { FeaturedCategories } from "../components/FeaturedCategories";
import { BestSellers } from "../components/BestSellers";
import { NewsletterCTA } from "../components/NewsletterCTA";
import { Footer } from "../components/Footer";
import { Button } from "../components/ui/button";
import { ShieldCheck, Gem, HeartHandshake } from "lucide-react";
import { HeroMarquee } from "../components/hero-marquee";

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
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:py-16">
            {/* Image above on mobile, right on desktop */}
            <div className="relative order-1 aspect-[4/3] w-full overflow-hidden rounded md:order-2 group">
              <HeroMarquee />
            </div>

            {/* Text content */}
            <div className="order-2 text-center md:order-1 md:text-left">
              <h1 className="text-pretty text-4xl leading-tight text-foreground md:text-5xl font-serif font-bold mb-6">
                Make milestones <span className="text-primary">memorable</span>
              </h1>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed text-lg">
                Celebrate with handmade, custom jewelry crafted for life&apos;s most meaningful moments.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

