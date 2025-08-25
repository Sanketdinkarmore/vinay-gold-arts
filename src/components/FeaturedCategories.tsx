import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "Rings",
        description: "Elegant rings for every occasion",
        image: "/placeholder.svg?height=300&width=300",
        count: "150+ Pieces",
        href: "/collections/rings"
    },
    {
        id: 2,
        name: "Necklaces",
        description: "Timeless necklaces and chains",
        image: "/placeholder.svg?height=300&width=300",
        count: "200+ Pieces",
        href: "/collections/necklaces"
    },
    {
        id: 3,
        name: "Bracelets",
        description: "Beautiful bracelets and bangles",
        image: "/placeholder.svg?height=300&width=300",
        count: "120+ Pieces",
        href: "/collections/bracelets"
    },
    {
        id: 4,
        name: "Earrings",
        description: "Stunning earrings and studs",
        image: "/placeholder.svg?height=300&width=300",
        count: "180+ Pieces",
        href: "/collections/earrings"
    }
];

export function FeaturedCategories() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Shop by Category
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our curated collections organized by your preferences
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card border border-border rounded-lg overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm font-medium">{category.count}</span>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-muted-foreground text-sm">{category.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
