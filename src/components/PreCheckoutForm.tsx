"use client";

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';

type CustomerDetails = {
  name: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  pincode: string;
  notes?: string;
};

type PreCheckoutFormProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: CustomerDetails) => void;
  initialData?: Partial<CustomerDetails>;
};

const STORAGE_KEY = 'vga_customer_details';

export function loadStoredCustomerDetails(): Partial<CustomerDetails> | undefined {
  if (typeof window === 'undefined') return undefined;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw) as CustomerDetails;
  } catch {
    return undefined;
  }
}

export default function PreCheckoutForm({ isOpen, onClose, onSubmit, initialData }: PreCheckoutFormProps) {
  const stored = useMemo(() => loadStoredCustomerDetails() || {}, []);
  const [rememberMe, setRememberMe] = useState(true);
  const [details, setDetails] = useState<CustomerDetails>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const base = {
      name: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      pincode: '',
      notes: '',
    };
    setDetails({
      ...base,
      ...stored,
      ...initialData,
    });
  }, [stored, initialData]);

  if (!isOpen) return null;

  const handleChange = (field: keyof CustomerDetails, value: string) => {
    setDetails(prev => ({ ...prev, [field]: value }));
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!details.name.trim()) next.name = 'Name is required';
    if (!details.phone.trim()) next.phone = 'Phone is required';
    if (!/^\+?\d[\d\s-]{7,15}$/.test(details.phone.trim())) next.phone = next.phone || 'Enter a valid phone number';
    if (!details.address.trim()) next.address = 'Address is required';
    if (!details.city.trim()) next.city = 'City is required';
    if (!details.pincode.trim()) next.pincode = 'Pincode is required';
    if (details.email && details.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim())) {
      next.email = 'Enter a valid email';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    try {
      if (rememberMe) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(details));
      }
    } catch {}
    onSubmit(details);
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 md:inset-auto md:right-6 md:top-1/2 md:-translate-y-1/2 md:w-full md:max-w-lg bg-background border border-border rounded-t-2xl md:rounded-2xl shadow-2xl mx-auto">
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-serif font-bold">Your Details</h3>
            <p className="text-sm text-muted-foreground">We will include this with your WhatsApp order.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="text-sm text-muted-foreground">Name</label>
              <input value={details.name} onChange={e => handleChange('name', e.target.value)} className={`mt-1 w-full rounded-lg border px-3 py-2 bg-background ${errors.name ? 'border-destructive' : 'border-border'}`} placeholder="Full name" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-muted-foreground">Phone</label>
              <input value={details.phone} onChange={e => handleChange('phone', e.target.value)} className={`mt-1 w-full rounded-lg border px-3 py-2 bg-background ${errors.phone ? 'border-destructive' : 'border-border'}`} placeholder="Phone number" />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-muted-foreground">Email (optional)</label>
              <input value={details.email || ''} onChange={e => handleChange('email', e.target.value)} className={`mt-1 w-full rounded-lg border px-3 py-2 bg-background ${errors.email ? 'border-destructive' : 'border-border'}`} placeholder="name@example.com" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-muted-foreground">Address</label>
              <textarea value={details.address} onChange={e => handleChange('address', e.target.value)} className={`mt-1 w-full rounded-lg border px-3 py-2 bg-background ${errors.address ? 'border-destructive' : 'border-border'}`} rows={2} placeholder="Street, area" />
              {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-muted-foreground">City</label>
              <input value={details.city} onChange={e => handleChange('city', e.target.value)} className={`mt-1 w-full rounded-lg border px-3 py-2 bg-background ${errors.city ? 'border-destructive' : 'border-border'}`} placeholder="City" />
              {errors.city && <p className="text-xs text-destructive mt-1">{errors.city}</p>}
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-muted-foreground">Pincode</label>
              <input value={details.pincode} onChange={e => handleChange('pincode', e.target.value)} className={`mt-1 w-full rounded-lg border px-3 py-2 bg-background ${errors.pincode ? 'border-destructive' : 'border-border'}`} placeholder="Pincode" />
              {errors.pincode && <p className="text-xs text-destructive mt-1">{errors.pincode}</p>}
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-muted-foreground">Notes (optional)</label>
              <textarea value={details.notes || ''} onChange={e => handleChange('notes', e.target.value)} className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background" rows={2} placeholder="Any specific instructions or preferences" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />
              Remember my details on this device
            </label>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white">Continue to WhatsApp</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}

export type { CustomerDetails };


