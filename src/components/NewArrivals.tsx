import { Button } from "./ui/button";

const newArrivals = [
    {
        id: 1,
        name: "Diamond Stud Earrings",
        price: "$1,299",
        image: "/placeholder.svg?height=300&width=300",
        badge: "New"
    },
    {
        id: 2,
        name: "Gold Chain Necklace",
        price: "$899",
        image: "/placeholder.svg?height=300&width=300",
        badge: "New"
    },
    {
        id: 3,
        name: "Emerald Ring",
        price: "$2,199",
        image: "/placeholder.svg?height=300&width=300",
        badge: "New"
    },
    {
        id: 4,
        name: "Pearl Bracelet",
        price: "$699",
        image: "/placeholder.svg?height=300&width=300",
        badge: "New"
    }
];

export function NewArrivals() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Just Arrived
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover our latest additions, fresh from the workshop
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {newArrivals.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-card border border-border rounded-lg overflow-hidden"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                        {item.badge}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-lg text-primary">{item.price}</span>
                                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                        View All New Arrivals
                    </Button>
                </div>
            </div>
        </section>
    );
}
