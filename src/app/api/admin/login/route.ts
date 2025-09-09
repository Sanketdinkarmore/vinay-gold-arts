import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { verifyPassword } from '@/lib/auth';

export async function POST(request: Request) {
  const { password, identifier } = await request.json().catch(() => ({ password: '', identifier: '' }));

  const db = await getDb();
  const users = db.collection('admin_users');
  // If no admin users exist yet, create the first one using the provided credentials
  const total = await users.countDocuments({});
  if (total === 0) {
    if (!identifier || !password) {
      return NextResponse.json({ message: 'Identifier and password required' }, { status: 400 });
    }
    const now = new Date();
    const isEmail = /@/.test(identifier);
    const doc: {
      username: string;
      email: string;
      password: string;
      role: string;
      isActive: boolean;
      createdAt: Date;
      updatedAt: Date;
    } = {
      username: isEmail ? identifier.split('@')[0] : identifier,
      email: isEmail ? identifier : `${identifier}@example.com`,
      password: '',
      role: 'admin',
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };
    const { hashPassword } = await import('@/lib/auth');
    doc.password = hashPassword(password);
    await users.insertOne(doc);
  }

  const user = await users.findOne({ $or: [{ email: identifier }, { username: identifier }] });
  if (!user || !user.password || user.isActive === false) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }
  const ok = verifyPassword(password, user.password);
  if (!ok) {
    return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set('admin_auth', 'true', {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 6, // 6 hours
  });
  return res;
}


