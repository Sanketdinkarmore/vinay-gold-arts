"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { mockProducts, getCategoryEmoji } from "@/lib/products";
import { shareProduct } from "@/lib/share";
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
  Gem,
  Share2
} from "lucide-react";
import Link from "next/link";

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
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [products] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPurity, setSelectedPurity] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Handle URL parameters for category filtering
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, []);

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

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      originalPrice: product.originalPrice,
      discountPercentage: product.discountPercentage,
      category: product.category,
      purity: product.purity,
      weight: product.weight,
      image: product.mainImage,
    };
    addToCart(cartItem);
  };

  const handleWishlistToggle = (product: typeof mockProducts[0]) => {
    const wishlistItem = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      originalPrice: product.originalPrice,
      category: product.category,
      purity: product.purity,
      weight: product.weight,
      image: product.mainImage,
      rating: product.rating,
      reviews: product.reviews,
    };

    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const handleShare = async (product: typeof mockProducts[0]) => {
    await shareProduct(product);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-24 h-24 border border-secondary/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-primary/15 rounded-full animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Premium Collection</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
              Our <span className="text-primary">Collections</span>
            </h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Discover our exquisite collection of handcrafted gold jewelry, each piece telling a unique story of elegance and tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 sm:py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jewelry..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-sm sm:text-base"
              />
            </div>

            {/* Filter Toggle & Sort */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2"
                >
                  <SlidersHorizontal className="w-3 h-3 sm:w-4 sm:h-4" />
                  Filters
                </Button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 sm:px-4 py-2 sm:py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 text-xs sm:text-sm flex-1 sm:flex-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2"
                >
                  <Grid className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="p-2"
                >
                  <List className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 sm:mt-6 p-4 sm:p-6 bg-muted/50 rounded-xl border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Category</label>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
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
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">Purity</label>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {purities.map(purity => (
                      <button
                        key={purity}
                        onClick={() => setSelectedPurity(purity)}
                        className={`px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
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
                  <label className="block text-xs sm:text-sm font-medium text-foreground mb-2 sm:mb-3">
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
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-muted-foreground">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <Reveal key={product.id} y={20} once>
                  <Link href={`/product/${product.slug}`} className="block">
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                      {/* Product Badges */}
                      <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1 sm:gap-2 z-10">
                        {product.isNew && (
                          <span className="bg-primary text-primary-foreground px-1 sm:px-2 py-1 rounded-full text-xs font-bold">
                            NEW
                          </span>
                        )}
                        {product.isBestSeller && (
                          <span className="bg-secondary text-secondary-foreground px-1 sm:px-2 py-1 rounded-full text-xs font-bold">
                            BEST SELLER
                          </span>
                        )}
                        {product.isDiscounted && (
                          <span className="bg-green-500 text-white px-1 sm:px-2 py-1 rounded-full text-xs font-bold">
                            -{product.discountPercentage}%
                          </span>
                        )}
                      </div>

                      {/* Product Image */}
                      <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 flex items-center justify-center">
                        <span className="text-4xl sm:text-6xl">{getCategoryEmoji(product.category)}</span>
                        
                        {/* Quick Actions */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-4">
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleWishlistToggle(product);
                            }}
                            className={`w-8 h-8 sm:w-10 sm:h-10 backdrop-blur rounded-full flex items-center justify-center transition-colors ${
                              isInWishlist(product.id) 
                                ? 'bg-red-500/80 text-white hover:bg-red-600' 
                                : 'bg-white/20 text-white hover:bg-white/30'
                            }`}
                          >
                            <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleAddToCart(product);
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/80 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                          >
                            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                          <button 
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleShare(product);
                            }}
                            className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                          >
                            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                          </button>
                        </div>
                      </div>

                      {/* Product Info */}
                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs sm:text-sm text-muted-foreground font-medium">{product.category}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                            <span className="text-xs sm:text-sm font-semibold">{product.rating}</span>
                            <span className="text-xs text-muted-foreground">({product.reviews})</span>
                          </div>
                        </div>

                        <h3 className="font-semibold text-sm sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {product.name}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                          {product.shortDescription}
                        </p>

                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="text-lg sm:text-2xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm sm:text-lg text-muted-foreground line-through">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                          <Gem className="w-3 h-3 sm:w-4 sm:h-4" />
                          <span>{product.purity} • {product.weight}g</span>
                        </div>

                        <Button 
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleAddToCart(product);
                          }}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300 rounded-xl py-2 sm:py-3 text-sm sm:text-lg font-semibold"
                        >
                          <span className="mr-2">🛒</span>
                          {isInCart(product.id) ? `In Cart (${getItemQuantity(product.id)})` : 'Add to Cart'}
                        </Button>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {filteredProducts.map((product) => (
                <Reveal key={product.id} y={20} once>
                  <Link href={`/product/${product.slug}`} className="block">
                    <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                        {/* Product Image */}
                        <div className="relative w-full md:w-48 h-32 sm:h-48 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl sm:text-6xl">{getCategoryEmoji(product.category)}</span>
                          
                          {/* Product Badges */}
                          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex gap-1 sm:gap-2">
                            {product.isNew && (
                              <span className="bg-primary text-primary-foreground px-1 sm:px-2 py-1 rounded-full text-xs font-bold">
                                NEW
                              </span>
                            )}
                            {product.isBestSeller && (
                              <span className="bg-secondary text-secondary-foreground px-1 sm:px-2 py-1 rounded-full text-xs font-bold">
                                BEST SELLER
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 space-y-3 sm:space-y-4">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-base sm:text-xl text-foreground group-hover:text-primary transition-colors mb-1 sm:mb-2 line-clamp-2">
                                {product.name}
                              </h3>
                              <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-3 line-clamp-2">
                                {product.shortDescription}
                              </p>
                            </div>
                            <div className="flex items-center gap-1 flex-shrink-0">
                              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                              <span className="text-xs sm:text-sm font-semibold">{product.rating}</span>
                              <span className="text-xs text-muted-foreground">({product.reviews})</span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2 sm:gap-4">
                              <span className="text-xl sm:text-3xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                              {product.originalPrice && (
                                <span className="text-sm sm:text-xl text-muted-foreground line-through">
                                  ₹{product.originalPrice.toLocaleString()}
                                </span>
                              )}
                            </div>
                            {product.discountPercentage && (
                              <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold w-fit">
                                -{product.discountPercentage}%
                              </span>
                            )}
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                              <Gem className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{product.purity} • {product.weight}g</span>
                            </div>
                            <span className="text-xs sm:text-sm text-muted-foreground font-medium">{product.category}</span>
                          </div>

                          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                            <Button 
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleAddToCart(product);
                              }}
                              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300 rounded-xl py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-lg font-semibold"
                            >
                              <span className="mr-2">🛒</span>
                              {isInCart(product.id) ? `In Cart (${getItemQuantity(product.id)})` : 'Add to Cart'}
                            </Button>
                            
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                              <button 
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleWishlistToggle(product);
                                }}
                                className={`flex-1 sm:flex-none p-2 sm:p-3 rounded-xl border transition-colors ${
                                  isInWishlist(product.id) 
                                    ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
                                    : 'bg-background border-border text-foreground hover:border-primary/50'
                                }`}
                              >
                                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                              </button>
                              
                              <button 
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleShare(product);
                                }}
                                className="flex-1 sm:flex-none p-2 sm:p-3 rounded-xl border border-border text-foreground hover:border-primary/50 transition-colors"
                              >
                                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">🔍</div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No products found</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Try adjusting your filters or search terms</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}