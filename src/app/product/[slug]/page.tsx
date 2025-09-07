"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { mockProducts, getCategoryEmoji, getRelatedProducts } from "@/lib/products";
import { shareProduct, shareToWhatsApp, shareToFacebook, shareToTwitter, shareToInstagram } from "@/lib/share";
import { 
  Star, 
  Heart, 
  Share2, 
  Shield, 
  Truck, 
  RotateCcw,
  Gem,
  Crown,
  Sparkles,
  Check,
  Minus,
  Plus,
  MessageCircle,
  Facebook,
  Twitter,
  Instagram
} from "lucide-react";
import Link from "next/link";


export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<typeof mockProducts[0] | null>(null);
  const [loading, setLoading] = useState(true);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { addToCart, isInCart, getItemQuantity } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const params = useParams();

  // Find product by slug
  useEffect(() => {
    const slug = params.slug as string;
    const foundProduct = mockProducts.find(p => p.slug === slug);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [params.slug]);

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showShareMenu) {
        const target = event.target as Element;
        if (!target.closest('.share-menu-container')) {
          setShowShareMenu(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareMenu]);

  if (loading) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading product...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">The product you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/collections">
              <Button>Browse Collections</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const handleAddToCart = () => {
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

    // Add the item to cart with the selected quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(cartItem);
    }
  };

  const handleWishlistToggle = () => {
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

  const handleShare = async () => {
    await shareProduct(product);
  };

  const handleShareToPlatform = (platform: string) => {
    switch (platform) {
      case 'whatsapp':
        shareToWhatsApp(product);
        break;
      case 'facebook':
        shareToFacebook(product);
        break;
      case 'twitter':
        shareToTwitter(product);
        break;
      case 'instagram':
        shareToInstagram(product);
        break;
      default:
        handleShare();
    }
    setShowShareMenu(false);
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-foreground">{product.category}</span>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl">{getCategoryEmoji(product.category)}</span>
                </div>
                
                {/* Product Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      NEW
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">
                      BEST SELLER
                    </span>
                  )}
                  {product.isDiscounted && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      -{product.discountPercentage}%
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-3">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === index 
                        ? 'border-primary' 
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 flex items-center justify-center">
                      <span className="text-2xl">{getCategoryEmoji(product.category)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">{product.category}</span>
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold text-lg">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  {product.shortDescription}
                </p>
              </div>

              {/* Pricing */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through">
                      ₹{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {product.discountPercentage && (
                  <p className="text-green-600 font-semibold">
                    You save ₹{(product.originalPrice! - product.price).toLocaleString()} ({product.discountPercentage}% off)
                  </p>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Gem className="w-5 h-5" />
                    <span>{product.purity} Gold</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Weight: {product.weight}g</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">Quantity</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-xl">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 font-semibold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-muted transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Total: ₹{(product.price * quantity).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  onClick={handleAddToCart}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">🛒</span>
                  {isInCart(product.id) ? `Add More to Cart (${getItemQuantity(product.id)} in cart)` : 'Add to Cart'}
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    className={`flex-1 flex items-center gap-2 ${
                      isInWishlist(product.id) 
                        ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
                        : 'hover:bg-red-50 hover:border-red-200 hover:text-red-600'
                    }`}
                    onClick={handleWishlistToggle}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                    {isInWishlist(product.id) ? 'In Wishlist' : 'Add to Wishlist'}
                  </Button>
                  <div className="relative flex-1 share-menu-container">
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center gap-2"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                    >
                      <Share2 className="w-4 h-4" />
                      Share
                    </Button>
                    
                    {/* Share Menu Dropdown */}
                    {showShareMenu && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <div className="p-2">
                          <button
                            onClick={() => handleShareToPlatform('whatsapp')}
                            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <span>WhatsApp</span>
                          </button>
                          <button
                            onClick={() => handleShareToPlatform('facebook')}
                            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <Facebook className="w-4 h-4 text-blue-600" />
                            <span>Facebook</span>
                          </button>
                          <button
                            onClick={() => handleShareToPlatform('twitter')}
                            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <Twitter className="w-4 h-4 text-blue-400" />
                            <span>Twitter</span>
                          </button>
                          <button
                            onClick={() => handleShareToPlatform('instagram')}
                            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <Instagram className="w-4 h-4 text-pink-600" />
                            <span>Instagram</span>
                          </button>
                          <button
                            onClick={handleShare}
                            className="w-full flex items-center gap-3 px-3 py-2 text-left hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <Share2 className="w-4 h-4 text-gray-600" />
                            <span>Copy Link</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Authentic</p>
                    <p className="text-muted-foreground">Certified Gold</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Free Delivery</p>
                    <p className="text-muted-foreground">All Orders</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <RotateCcw className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Lifetime Polish</p>
                    <p className="text-muted-foreground">Free Service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description & Specifications */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]: [string, string | number]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-border last:border-b-0">
                    <span className="font-medium text-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Related Products</h2>
            <p className="text-muted-foreground">You might also like these beautiful pieces</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getRelatedProducts(product).map((relatedProduct) => (
              <Reveal key={relatedProduct.id} y={20} once>
                <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
                  {/* Product Badges */}
                  <div className="absolute top-3 left-3 flex gap-2 z-10">
                    {relatedProduct.isNew && (
                      <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold">
                        NEW
                      </span>
                    )}
                    {relatedProduct.isBestSeller && (
                      <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-bold">
                        BEST SELLER
                      </span>
                    )}
                    {relatedProduct.isDiscounted && (
                      <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        -{relatedProduct.discountPercentage}%
                      </span>
                    )}
                  </div>

                  {/* Product Image */}
                  <div className="relative mb-4 overflow-hidden rounded-xl aspect-square bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 flex items-center justify-center">
                    <span className="text-6xl">{getCategoryEmoji(relatedProduct.category)}</span>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">{relatedProduct.category}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold">{relatedProduct.rating}</span>
                        <span className="text-xs text-muted-foreground">({relatedProduct.reviews})</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedProduct.shortDescription}
                    </p>

                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-foreground">₹{relatedProduct.price.toLocaleString()}</span>
                      {relatedProduct.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ₹{relatedProduct.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Gem className="w-4 h-4" />
                      <span>{relatedProduct.purity} • {relatedProduct.weight}g</span>
                    </div>

                    <Link href={`/product/${relatedProduct.slug}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:shadow-lg transition-all duration-300 rounded-xl py-3 text-lg font-semibold">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
