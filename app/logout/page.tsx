"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Here you would typically clear the user's session or token
    // For this example, we'll just simulate a logout process
    setTimeout(() => {
      toast({
        title: "ログアウトしました",
        description: "ホームページにリダイレクトします。",
      });
      router.push('/');
    }, 2000);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">ログアウト中...</h1>
        <p>ログアウト処理を行っています。しばらくお待ちください。</p>
      </div>
    </div>
  );
}