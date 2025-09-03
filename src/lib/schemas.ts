import { z } from "zod"

// Category Schema
export const categorySchema = z.object({
    _id: z.string().optional(),
    name: z.string().min(1, "Category name is required"),
    slug: z.string().min(1, "Category slug is required"),
    description: z.string().optional(),
    image: z.string().optional(),
    isActive: z.boolean().default(true),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

// Product Schema
export const productSchema = z.object({
    _id: z.string().optional(),
    name: z.string().min(1, "Product name is required"),
    slug: z.string().min(1, "Product slug is required"),
    description: z.string().min(1, "Product description is required"),
    shortDescription: z.string().optional(),

    // Pricing
    price: z.number().min(0, "Price must be positive"),
    originalPrice: z.number().min(0).optional(), // For discounted products
    discountPercentage: z.number().min(0).max(100).optional(),

    // Product Details
    weight: z.number().min(0).optional(), // in grams
    purity: z.string().optional(), // e.g., "18K", "22K"
    categoryId: z.string().min(1, "Category is required"),

    // Images
    images: z.array(z.string()).min(1, "At least one image is required"),
    mainImage: z.string().min(1, "Main image is required"),

    // Admin Flags
    isNew: z.boolean().default(false),
    isBestSeller: z.boolean().default(false),
    isDiscounted: z.boolean().default(false),
    isFeatured: z.boolean().default(false),
    isActive: z.boolean().default(true),

    // SEO
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),

    // Timestamps
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

// Order Schema
export const orderSchema = z.object({
    _id: z.string().optional(),
    orderNumber: z.string().min(1, "Order number is required"),

    // Customer Info
    customerName: z.string().min(1, "Customer name is required"),
    customerEmail: z.string().email("Valid email is required"),
    customerPhone: z.string().optional(),

    // Order Details
    items: z.array(z.object({
        productId: z.string(),
        productName: z.string(),
        price: z.number(),
        quantity: z.number().min(1),
        total: z.number(),
    })),

    // Totals
    subtotal: z.number().min(0),
    tax: z.number().min(0).default(0),
    total: z.number().min(0),

    // Status
    status: z.enum(["pending", "confirmed", "shipped", "delivered", "cancelled"]).default("pending"),

    // Shipping
    shippingAddress: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zipCode: z.string().optional(),
        country: z.string().optional(),
    }).optional(),

    // Notes
    notes: z.string().optional(),

    // Timestamps
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

// Admin User Schema
export const adminUserSchema = z.object({
    _id: z.string().optional(),
    username: z.string().min(1, "Username is required"),
    email: z.string().email("Valid email is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["admin", "super_admin"]).default("admin"),
    isActive: z.boolean().default(true),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})

// TypeScript Types
export type Category = z.infer<typeof categorySchema>
export type Product = z.infer<typeof productSchema>
export type Order = z.infer<typeof orderSchema>
export type AdminUser = z.infer<typeof adminUserSchema>

