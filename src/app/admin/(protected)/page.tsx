"use client";

import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const router = useRouter();

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
  };

  return (
    <main className="min-h-screen pt-20">
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-serif font-bold">Admin Dashboard</h1>
            <button onClick={logout} className="px-4 py-2 rounded-lg border border-border hover:bg-muted">Logout</button>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <a href="#" className="rounded-xl border border-border p-4 hover:bg-muted">
              <h2 className="font-semibold">Products</h2>
              <p className="text-sm text-muted-foreground">Manage your catalog</p>
            </a>
            <a href="#" className="rounded-xl border border-border p-4 hover:bg-muted">
              <h2 className="font-semibold">Orders</h2>
              <p className="text-sm text-muted-foreground">View customer inquiries</p>
            </a>
            <a href="#" className="rounded-xl border border-border p-4 hover:bg-muted">
              <h2 className="font-semibold">Settings</h2>
              <p className="text-sm text-muted-foreground">Store preferences</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}



