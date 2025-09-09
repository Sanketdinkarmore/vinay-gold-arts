import { NextResponse } from 'next/server';
import { getDb } from '@/lib/mongodb';
import { hashPassword } from '@/lib/auth';

export async function POST(request: Request) {
  const token = process.env.ADMIN_SEED_TOKEN;
  const { username, email, password, providedToken } = await request.json().catch(() => ({}));
  if (!token || providedToken !== token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  if (!username || !email || !password) {
    return NextResponse.json({ message: 'username, email, password required' }, { status: 400 });
  }

  const db = await getDb();
  const users = db.collection('admin_users');

  const exists = await users.findOne({ $or: [{ email }, { username }] });
  if (exists) {
    return NextResponse.json({ message: 'User already exists' }, { status: 409 });
  }

  const hashed = hashPassword(password);
  const now = new Date();
  await users.insertOne({ username, email, password: hashed, role: 'admin', isActive: true, createdAt: now, updatedAt: now });
  return NextResponse.json({ ok: true });
}



