"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
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
  Plus
} from "lucide-react";
import Link from "next/link";

// Mock data - will be replaced with real data from database
const mockProduct = {
  id: 1,
  name: "Elegant Gold Ring",
  slug: "elegant-gold-ring",
  price: 45000,
  originalPrice: 55000,
  discountPercentage: 18,
  category: "Rings",
  purity: "22K",
  weight: 8.5,
  images: ["/ring1.jpg", "/ring2.jpg", "/ring3.jpg"],
  mainImage: "/ring1.jpg",
  isNew: true,
  isBestSeller: false,
  isDiscounted: true,
  isFeatured: true,
  rating: 4.8,
  reviews: 124,
  shortDescription: "Beautiful handcrafted gold ring with intricate design",
  description: "This exquisite gold ring is meticulously crafted by our skilled artisans using traditional techniques passed down through generations. The intricate design features delicate patterns that catch the light beautifully, making it perfect for special occasions or everyday elegance. Made from pure 22K gold, this ring promises durability and timeless beauty.",
  specifications: {
    material: "22K Gold",
    weight: "8.5 grams",
    purity: "22 Karat",
    finish: "Polished",
    warranty: "Lifetime Polish Service",
    origin: "Handcrafted in India"
  },
  features: [
    "Handcrafted with traditional techniques",
    "22K pure gold construction",
    "Intricate design patterns",
    "Lifetime polish service included",
    "Comes with authenticity certificate",
    "Perfect for special occasions"
  ]
};

const relatedProducts = [
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
  }
];

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize] = useState("");

  const product = mockProduct; // In real app, fetch by slug

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in this product:

*${product.name}*
Price: ₹${product.price.toLocaleString()}
${product.originalPrice ? `Original Price: ₹${product.originalPrice.toLocaleString()}` : ''}
${product.discountPercentage ? `Discount: ${product.discountPercentage}%` : ''}
Quantity: ${quantity}
${selectedSize ? `Size: ${selectedSize}` : ''}

Can you provide more details and help me place an order?`;
    
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0123456789";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
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
                  <span className="text-8xl">💍</span>
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
                {product.images.map((image, index) => (
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
                      <span className="text-2xl">💍</span>
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
                  onClick={handleWhatsAppOrder}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">🛒</span>
                  Order via WhatsApp
                </Button>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1 flex items-center gap-2">
                    <Heart className="w-4 h-4" />
                    Add to Wishlist
                  </Button>
                  <Button variant="outline" className="flex-1 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share
                  </Button>
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
                {product.features.map((feature, index) => (
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
                {Object.entries(product.specifications).map(([key, value]) => (
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
            {relatedProducts.map((product) => (
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

                    <Link href={`/product/${product.slug}`}>
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
