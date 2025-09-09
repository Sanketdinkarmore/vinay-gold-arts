"use client";

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

function LoginForm() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const next = searchParams.get('next') || '/admin';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data?.message || 'Invalid password');
        return;
      }
      router.replace(next);
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-background border border-border rounded-2xl p-6 shadow-lg space-y-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-serif font-bold text-foreground">Admin Login</h1>
          <p className="text-sm text-muted-foreground">Enter the admin password to continue.</p>
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Username or Email</label>
          <input
            className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            placeholder="admin or admin@example.com"
            autoComplete="username"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground">Password</label>
          <input
            type="password"
            className="mt-1 w-full rounded-lg border border-border px-3 py-2 bg-background"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
          />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <button type="submit" className="w-full bg-primary text-primary-foreground rounded-lg py-2 font-semibold hover:bg-primary/90">Login</button>
      </form>
    </main>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}


