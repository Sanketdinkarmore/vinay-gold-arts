import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "Rings",
        description: "Elegant rings for every occasion",
        count: "150+ Pieces",
        href: "/collections/rings"
    },
    {
        id: 2,
        name: "Necklaces",
        description: "Timeless necklaces and chains",
        count: "200+ Pieces",
        href: "/collections/necklaces"
    },
    {
        id: 3,
        name: "Bracelets",
        description: "Beautiful bracelets and bangles",
        count: "120+ Pieces",
        href: "/collections/bracelets"
    },
    {
        id: 4,
        name: "Earrings",
        description: "Stunning earrings and studs",
        count: "180+ Pieces",
        href: "/collections/earrings"
    }
];

export function FeaturedCategories() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-3">
                        Shop by Category
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore our curated collections organized by your preferences
                    </p>
                </div>

                {/* Mobile horizontal scroll */}
                <div className="md:hidden -mx-4 px-4 overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4">
                    {categories.map((category) => (
                        <Link key={category.id} href={category.href} className="min-w-[78%] snap-start">
                            <div className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-2xl">
                                <div className="relative">
                                    <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                        <span className="text-4xl">💍</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"></div>
                                </div>
                                <div className="p-5 text-center">
                                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                        {category.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">{category.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Desktop grid */}
                <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card border border-border rounded-xl overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    <span className="text-4xl">💍</span>
                                </div>
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
