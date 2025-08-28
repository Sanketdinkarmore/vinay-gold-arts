import { Button } from "./ui/button";
import { SectionHeader } from "./SectionHeader";

const discountedProducts = [
    {
        id: 1,
        name: "Wedding Collection Ring",
        originalPrice: "$3,999",
        discountedPrice: "$2,999",
        discount: "25% OFF",
        category: "Wedding Collection"
    },
    {
        id: 2,
        name: "Diamond Necklace Set",
        originalPrice: "$2,499",
        discountedPrice: "$1,874",
        discount: "25% OFF",
        category: "Wedding Collection"
    },
    {
        id: 3,
        name: "Gold Bracelet",
        originalPrice: "$1,299",
        discountedPrice: "$974",
        discount: "25% OFF",
        category: "Wedding Collection"
    }
];

export function DiscountedProducts() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    eyebrow="Special Offers"
                    title="Up to 25% Off"
                    subtitle="Wedding Collection picks with limited-time discounts"
                    className="mb-12"
                />

                {/* Mobile horizontal scroll */}
                <div className="md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 mb-10">
                    {discountedProducts.map((item) => (
                        <div key={item.id} className="min-w-[78%] snap-start">
                            <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-2xl">
                                <div className="relative">
                                    <div className="w-full h-56 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                        <span className="text-4xl">💍</span>
                                    </div>
                                    <span className="absolute top-3 left-0 bg-secondary text-secondary-foreground px-3 py-1 rounded-r-full text-sm font-semibold shadow-sm">
                                        {item.discount}
                                    </span>
                                    <span className="absolute top-3 right-3 glass-surface px-3 py-1 rounded-full text-sm font-semibold text-primary">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{item.name}</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="font-bold text-xl text-primary">{item.discountedPrice}</span>
                                        <span className="text-muted-foreground line-through">{item.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop grid */}
                <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {discountedProducts.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card border border-border rounded-xl overflow-hidden relative"
                        >
                            <div className="relative overflow-hidden">
                                <div className="w-full h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <span className="text-5xl">💍</span>
                                </div>
                                <span className="absolute top-3 left-0 bg-secondary text-secondary-foreground px-3 py-1 rounded-r-full text-sm font-semibold shadow-sm">
                                    {item.discount}
                                </span>
                                <span className="absolute top-3 right-3 glass-surface px-3 py-1 rounded-full text-sm font-semibold text-primary">
                                    {item.category}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="font-bold text-2xl text-primary">{item.discountedPrice}</span>
                                    <span className="text-muted-foreground line-through">{item.originalPrice}</span>
                                </div>
                                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                                    Add to Cart
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                        View All Offers
                    </Button>
                </div>
            </div>
        </section>
    );
}
