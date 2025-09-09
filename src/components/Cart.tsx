"use client";

import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import PreCheckoutForm, { type CustomerDetails } from '@/components/PreCheckoutForm';
import { generateOrderId, formatOrderTimestamp } from '@/lib/utils';
import { 
  ShoppingCart, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  MessageCircle,
  Crown,
  Gem
} from 'lucide-react';
import Link from 'next/link';

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);

  const handleWhatsAppOrder = () => {
    if (state.items.length === 0) return;
    setShowForm(true);
  };

  const sendWhatsAppWithDetails = (details: CustomerDetails) => {
    const orderId = generateOrderId();
    const timestamp = formatOrderTimestamp();
    const itemsText = state.items.map(item => 
      `• ${item.name} (${item.purity} Gold, ${item.weight}g)\n  Qty: ${item.quantity}\n  Price: ₹${item.price.toLocaleString()}\n  Line Total: ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n\n');

    const headerText = `Order ID: ${orderId}\nDate: ${timestamp}`;
    const customerText = `Customer Details:\nName: ${details.name}\nPhone: ${details.phone}${details.email ? `\nEmail: ${details.email}` : ''}\nAddress: ${details.address}, ${details.city} - ${details.pincode}${details.notes ? `\nNotes: ${details.notes}` : ''}`;

    const message = `${headerText}\n\n${customerText}\n\nOrder Items:\n${itemsText}\n\nTotal Items: ${state.totalItems}\nTotal Amount: ₹${state.totalPrice.toLocaleString()}${state.totalSavings > 0 ? `\nTotal Savings: ₹${state.totalSavings.toLocaleString()}` : ''}`;

    const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "0123456789";
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setShowForm(false);
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Shopping cart"
      >
        <ShoppingCart className="w-6 h-6" />
        {state.totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {state.totalItems}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-bold text-foreground">Shopping Cart</h2>
                    <p className="text-sm text-muted-foreground">{state.totalItems} items</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {state.items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4">
                      <ShoppingCart className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Your cart is empty</h3>
                    <p className="text-muted-foreground mb-6">Add some beautiful jewelry to get started!</p>
                    <Link href="/collections">
                      <Button 
                        onClick={() => setIsOpen(false)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Crown className="w-4 h-4 mr-2" />
                        Browse Collections
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="flex gap-4 p-4 bg-muted/30 rounded-xl border border-border">
                        {/* Product Image */}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">💍</span>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                            <Gem className="w-3 h-3" />
                            <span>{item.purity} • {item.weight}g</span>
                          </div>
                          
                          {/* Price */}
                          <div className="flex items-center gap-2 mt-2">
                            <span className="font-bold text-foreground">₹{item.price.toLocaleString()}</span>
                            {item.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ₹{item.originalPrice.toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center border border-border rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:bg-muted transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1 text-sm font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:bg-muted transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {state.items.length > 0 && (
                <div className="border-t border-border p-6 space-y-4">
                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹{state.totalPrice.toLocaleString()}</span>
                    </div>
                    {state.totalSavings > 0 && (
                      <div className="flex justify-between text-sm text-green-600">
                        <span>You Save</span>
                        <span className="font-semibold">₹{state.totalSavings.toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-lg font-bold border-t border-border pt-2">
                      <span>Total</span>
                      <span>₹{state.totalPrice.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      onClick={handleWhatsAppOrder}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-semibold rounded-xl"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Order via WhatsApp
                    </Button>
                    
                    <div className="flex gap-2">
                      <Button
                        onClick={clearCart}
                        variant="outline"
                        className="flex-1"
                      >
                        Clear Cart
                      </Button>
                      <Link href="/cart" className="flex-1">
                        <Button
                          onClick={() => setIsOpen(false)}
                          variant="outline"
                          className="w-full"
                        >
                          View Cart
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <PreCheckoutForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={sendWhatsAppWithDetails}
      />
    </>
  );
}
