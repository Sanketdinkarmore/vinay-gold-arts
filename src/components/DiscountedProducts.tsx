import { Button } from "./ui/button";

const discountedProducts = [
    {
        id: 1,
        name: "Wedding Collection Ring",
        originalPrice: "$3,999",
        discountedPrice: "$2,999",
        discount: "25% OFF",
        image: "/placeholder.svg?height=300&width=300",
        category: "Wedding Collection"
    },
    {
        id: 2,
        name: "Diamond Necklace Set",
        originalPrice: "$2,499",
        discountedPrice: "$1,874",
        discount: "25% OFF",
        image: "/placeholder.svg?height=300&width=300",
        category: "Wedding Collection"
    },
    {
        id: 3,
        name: "Gold Bracelet",
        originalPrice: "$1,299",
        discountedPrice: "$974",
        discount: "25% OFF",
        image: "/placeholder.svg?height=300&width=300",
        category: "Wedding Collection"
    }
];

export function DiscountedProducts() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Special Offers
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                        Up to 25% Off on Wedding Collection
                    </p>
                    <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full font-semibold">
                        Limited Time Only
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {discountedProducts.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card border border-border rounded-lg overflow-hidden relative"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                        {item.discount}
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                                        {item.category}
                                    </span>
                                </div>
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
