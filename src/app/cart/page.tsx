"use client";

import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle,
  Crown,
  Gem,
  Sparkles,
  ArrowLeft,
  Heart,
  Share2
} from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (state.items.length === 0) return;

    const itemsText = state.items.map(item => 
      `• ${item.name} (${item.purity} Gold, ${item.weight}g)
       Quantity: ${item.quantity}
       Price: ₹${item.price.toLocaleString()} each
       Total: ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n\n');

    const message = `Hi! I'm interested in placing an order for these items:

${itemsText}

Total Items: ${state.totalItems}
Total Amount: ₹${state.totalPrice.toLocaleString()}
${state.totalSavings > 0 ? `Total Savings: ₹${state.totalSavings.toLocaleString()}` : ''}

Can you help me complete this order?`;
    
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0123456789";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link 
              href="/collections"
              className="p-2 hover:bg-muted rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-foreground">Shopping Cart</h1>
                <p className="text-muted-foreground">{state.totalItems} items in your cart</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-6 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {state.items.length === 0 ? (
            <div className="text-center py-8 sm:py-16">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-3 sm:mb-4">Your cart is empty</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-md mx-auto px-4">
                Discover our beautiful collection of handcrafted gold jewelry and add some pieces to your cart.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/collections">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full font-semibold">
                    <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Browse Collections
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline" className="w-full sm:w-auto border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full font-semibold">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Go Home
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                    {/* Product Image */}
                    <div className="w-full sm:w-24 h-32 sm:h-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl sm:text-3xl">💍</span>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 truncate">{item.name}</h3>
                          <p className="text-sm sm:text-base text-muted-foreground mb-2">{item.category}</p>
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                            <Gem className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{item.purity} Gold • {item.weight}g</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors flex-shrink-0"
                        >
                          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                        <span className="text-xl sm:text-2xl font-bold text-foreground">₹{item.price.toLocaleString()}</span>
                        {item.originalPrice && (
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                            <span className="text-base sm:text-lg text-muted-foreground line-through">
                              ₹{item.originalPrice.toLocaleString()}
                            </span>
                            <span className="text-xs sm:text-sm text-green-600 font-semibold">
                              Save ₹{(item.originalPrice - item.price).toLocaleString()}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="flex items-center border border-border rounded-xl w-fit">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 sm:p-3 hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                          <span className="px-3 sm:px-4 py-2 sm:py-3 font-semibold text-sm sm:text-base">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 sm:p-3 hover:bg-muted transition-colors"
                          >
                            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                        
                        <div className="text-left sm:text-right">
                          <p className="text-xs sm:text-sm text-muted-foreground">Total</p>
                          <p className="text-lg sm:text-xl font-bold text-foreground">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-4">
                        <Button variant="outline" size="sm" className="flex-1 sm:flex-none flex items-center gap-2 text-xs sm:text-sm">
                          <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                          Wishlist
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 sm:flex-none flex items-center gap-2 text-xs sm:text-sm">
                          <Share2 className="w-3 h-3 sm:w-4 sm:h-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-4 sm:mb-6">Order Summary</h3>
                    
                    {/* Summary Details */}
                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Items ({state.totalItems})</span>
                        <span className="font-semibold">₹{state.totalPrice.toLocaleString()}</span>
                      </div>
                      
                      {state.totalSavings > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Total Savings</span>
                          <span className="font-semibold">₹{state.totalSavings.toLocaleString()}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Delivery</span>
                        <span className="font-semibold text-green-600">FREE</span>
                      </div>
                      
                      <div className="border-t border-border pt-3 sm:pt-4">
                        <div className="flex justify-between text-lg sm:text-xl font-bold">
                          <span>Total</span>
                          <span>₹{state.totalPrice.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <Button
                        onClick={handleWhatsAppOrder}
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Order via WhatsApp
                      </Button>
                      
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="w-full text-sm sm:text-base"
                      >
                        Clear Cart
                      </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <span>Certified 22K Gold</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <span>Handcrafted Quality</span>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Gem className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                        </div>
                        <span>Lifetime Polish Service</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
