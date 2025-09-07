"use client";

import { useWishlist } from "@/contexts/WishlistContext";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useCart } from "@/contexts/CartContext";
import { getCategoryEmoji } from "@/lib/products";
import { 
  Heart, 
  ShoppingCart, 
  Trash2, 
  ArrowLeft,
  Star,
  Share2,
  Eye
} from "lucide-react";
import Link from "next/link";
import { shareProduct } from "@/lib/share";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, isInCart, getItemQuantity } = useCart();

  const handleAddToCart = (product: typeof wishlist[0]) => {
    const cartItem = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      originalPrice: product.originalPrice,
      discountPercentage: product.originalPrice && product.originalPrice > product.price ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0,
      category: product.category,
      purity: product.purity,
      weight: product.weight,
      image: product.image,
    };
    addToCart(cartItem);
  };

  const handleShare = async (product: typeof wishlist[0]) => {
    await shareProduct(product);
  };

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your Wishlist is Empty</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto px-4">
              Start adding items to your wishlist by clicking the heart icon on any product you love.
            </p>
            <Link href="/collections">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-sm sm:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">My Wishlist</h1>
            <p className="text-sm sm:text-base text-gray-600">{wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Link href="/collections">
              <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <Button 
              variant="outline" 
              onClick={clearWishlist}
              className="w-full sm:w-auto text-red-600 hover:text-red-700 hover:bg-red-50 text-sm sm:text-base"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {wishlist.map((product) => (
            <Reveal key={product.id} y={20} once>
              <div className="group relative bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Product Image */}
                <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 flex items-center justify-center">
                  <span className="text-4xl sm:text-6xl">{getCategoryEmoji(product.category)}</span>
                  
                  {/* Quick Actions */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-4">
                    <Link href={`/product/${product.slug}`}>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                      >
                        <Eye className="w-4 h-4 sm:w-6 sm:h-6" />
                      </button>
                    </Link>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/80 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleShare(product);
                      }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="w-4 h-4 sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 line-clamp-2 group-hover:text-primary transition-colors flex-1">
                      {product.name}
                    </h3>
                    <button 
                      onClick={() => removeFromWishlist(product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0 p-1"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-600">({product.reviews})</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-lg sm:text-2xl font-bold text-gray-900">
                        ₹{product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm sm:text-lg text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {product.originalPrice && product.originalPrice > product.price && (
                      <span className="text-xs sm:text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full w-fit">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                    <span>{product.category}</span>
                    <span>{product.purity}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link href={`/product/${product.slug}`} className="flex-1">
                      <Button 
                        variant="outline" 
                        className="w-full text-xs sm:text-sm"
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      onClick={() => handleAddToCart(product)}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs sm:text-sm"
                    >
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {isInCart(product.id) ? `Add More (${getItemQuantity(product.id)})` : 'Add to Cart'}
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
