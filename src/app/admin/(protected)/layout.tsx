import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const authed = cookieStore.get('admin_auth')?.value === 'true';
  if (!authed) {
    redirect('/admin/login');
  }
  return (
    <>{children}</>
  );
}


