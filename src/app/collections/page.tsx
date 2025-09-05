"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { 
  Search, 
  Grid, 
  List, 
  SlidersHorizontal,
  Star,
  Heart,
  ShoppingCart,
  Sparkles,
  Crown,
  Gem
} from "lucide-react";

// Mock data - will be replaced with real data from database
const mockProducts = [
  {
    id: 1,
    name: "Elegant Gold Ring",
    slug: "elegant-gold-ring",
    price: 45000,
    originalPrice: 55000,
    discountPercentage: 18,
    category: "Rings",
    purity: "22K",
    weight: 8.5,
    images: ["/ring1.jpg"],
    mainImage: "/ring1.jpg",
    isNew: true,
    isBestSeller: false,
    isDiscounted: true,
    isFeatured: true,
    rating: 4.8,
    reviews: 124,
    shortDescription: "Beautiful handcrafted gold ring with intricate design"
  },
  {
    id: 2,
    name: "Diamond Necklace",
    slug: "diamond-necklace",
    price: 125000,
    originalPrice: 150000,
    discountPercentage: 17,
    category: "Necklaces",
    purity: "18K",
    weight: 25.2,
    images: ["/necklace1.jpg"],
    mainImage: "/necklace1.jpg",
    isNew: false,
    isBestSeller: true,
    isDiscounted: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 89,
    shortDescription: "Stunning diamond necklace perfect for special occasions"
  },
  {
    id: 3,
    name: "Pearl Earrings",
    slug: "pearl-earrings",
    price: 35000,
    originalPrice: 42000,
    discountPercentage: 17,
    category: "Earrings",
    purity: "22K",
    weight: 12.8,
    images: ["/earrings1.jpg"],
    mainImage: "/earrings1.jpg",
    isNew: true,
    isBestSeller: false,
    isDiscounted: true,
    isFeatured: false,
    rating: 4.7,
    reviews: 67,
    shortDescription: "Classic pearl earrings with gold setting"
  },
  {
    id: 4,
    name: "Gold Bracelet",
    slug: "gold-bracelet",
    price: 28000,
    originalPrice: 35000,
    discountPercentage: 20,
    category: "Bracelets",
    purity: "22K",
    weight: 15.5,
    images: ["/bracelet1.jpg"],
    mainImage: "/bracelet1.jpg",
    isNew: false,
    isBestSeller: true,
    isDiscounted: true,
    isFeatured: true,
    rating: 4.6,
    reviews: 156,
    shortDescription: "Elegant gold bracelet with traditional patterns"
  },
  {
    id: 5,
    name: "Sapphire Ring",
    slug: "sapphire-ring",
    price: 75000,
    originalPrice: 90000,
    discountPercentage: 17,
    category: "Rings",
    purity: "18K",
    weight: 10.2,
    images: ["/ring2.jpg"],
    mainImage: "/ring2.jpg",
    isNew: false,
    isBestSeller: false,
    isDiscounted: true,
    isFeatured: false,
    rating: 4.8,
    reviews: 92,
    shortDescription: "Exquisite sapphire ring with diamond accents"
  },
  {
    id: 6,
    name: "Ruby Pendant",
    slug: "ruby-pendant",
    price: 55000,
    originalPrice: 65000,
    discountPercentage: 15,
    category: "Pendants",
    purity: "22K",
    weight: 18.7,
    images: ["/pendant1.jpg"],
    mainImage: "/pendant1.jpg",
    isNew: true,
    isBestSeller: true,
    isDiscounted: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 78,
    shortDescription: "Beautiful ruby pendant with gold chain"
  }
];

const categories = ["All", "Rings", "Necklaces", "Earrings", "Bracelets", "Pendants"];
const purities = ["All", "18K", "22K", "24K"];
const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "best-seller", label: "Best Sellers" },
  { value: "rating", label: "Highest Rated" }
];

export default function CollectionsPage() {
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPurity, setSelectedPurity] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Purity filter
    if (selectedPurity !== "All") {
      filtered = filtered.filter(product => product.purity === selectedPurity);
    }

    // Price range filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "best-seller":
        filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, selectedPurity, priceRange, sortBy]);

  const handleWhatsAppOrder = (product: typeof mockProducts[0]) => {
    const message = `Hi! I'm interested in this product:

*${product.name}*
Price: ₹${product.price.toLocaleString()}
${product.originalPrice ? `Original Price: ₹${product.originalPrice.toLocaleString()}` : ''}
${product.discountPercentage ? `Discount: ${product.discountPercentage}%` : ''}

Can you provide more details and help me place an order?`;
    
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0123456789";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-secondary/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-primary/15 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Crown className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Premium Collection</span>
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Our <span className="text-primary">Collections</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our exquisite collection of handcrafted gold jewelry, each piece telling a unique story of elegance and tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jewelry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
            </div>

            {/* Filter Toggle & Sort */}
            <div className="flex items-center gap-4 w-full lg:w-auto">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-muted/50 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background text-foreground border border-border hover:border-primary/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Purity Filter */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">Purity</label>
                  <div className="flex flex-wrap gap-2">
                    {purities.map(purity => (
                      <button
                        key={purity}
                        onClick={() => setSelectedPurity(purity)}
                        className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                          selectedPurity === purity
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background text-foreground border border-border hover:border-primary/50'
                        }`}
                      >
                        {purity}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Reveal key={product.id} y={20} once>
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                    {/* Product Badges */}
                    <div className="absolute top-3 left-3 flex gap-2 z-10">
                      {product.isNew && (
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                          NEW
                        </span>
                      )}
                      {product.isBestSeller && (
                        <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-bold">
                          BEST SELLER
                        </span>
                      )}
                      {product.isDiscounted && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          -{product.discountPercentage}%
                        </span>
                      )}
                    </div>

                    {/* Product Image */}
                    <div className="relative mb-4 overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 flex items-center justify-center">
                      <span className="text-6xl">💍</span>
                      
                      {/* Quick Actions */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                          <Heart className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={() => handleWhatsAppOrder(product)}
                          className="w-10 h-10 bg-primary/80 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                        >
                          <ShoppingCart className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground font-medium">{product.category}</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-semibold">{product.rating}</span>
                          <span className="text-xs text-muted-foreground">({product.reviews})</span>
                        </div>
                      </div>

                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.shortDescription}
                      </p>

                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ₹{product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Gem className="w-4 h-4" />
                        <span>{product.purity} • {product.weight}g</span>
                      </div>

                      <Button 
                        onClick={() => handleWhatsAppOrder(product)}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300 rounded-xl py-3 text-lg font-semibold"
                      >
                        <span className="mr-2">🛒</span>
                        Order via WhatsApp
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredProducts.map((product) => (
                <Reveal key={product.id} y={20} once>
                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Product Image */}
                      <div className="relative w-full md:w-48 h-48 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <span className="text-6xl">💍</span>
                        
                        {/* Product Badges */}
                        <div className="absolute top-3 left-3 flex gap-2">
                          {product.isNew && (
                            <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                              NEW
                            </span>
                          )}
                          {product.isBestSeller && (
                            <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-bold">
                              BEST SELLER
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors mb-2">
                              {product.name}
                            </h3>
                            <p className="text-muted-foreground mb-3">
                              {product.shortDescription}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="font-semibold">{product.rating}</span>
                            <span className="text-sm text-muted-foreground">({product.reviews})</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-xl text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                          {product.discountPercentage && (
                            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              -{product.discountPercentage}%
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Gem className="w-4 h-4" />
                            <span>{product.purity} • {product.weight}g</span>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">{product.category}</span>
                        </div>

                        <Button 
                          onClick={() => handleWhatsAppOrder(product)}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300 rounded-xl py-3 px-8 text-lg font-semibold"
                        >
                          <span className="mr-2">🛒</span>
                          Order via WhatsApp
                        </Button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
