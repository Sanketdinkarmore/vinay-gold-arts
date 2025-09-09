import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// Generates a compact, sortable order id like VGA-20240908-7M3X2K
export function generateOrderId(prefix: string = 'VGA'): string {
    const now = new Date();
    const yyyy = now.getFullYear().toString();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    const datePart = `${yyyy}${mm}${dd}`;
    const rand = Math.random().toString(36).toUpperCase().replace(/[^A-Z0-9]/g, '').slice(2, 8);
    return `${prefix}-${datePart}-${rand}`;
}

export function formatOrderTimestamp(date: Date = new Date()): string {
    return date.toLocaleString(undefined, { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' });
}