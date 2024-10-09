import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">セミナー申込サイトへようこそ</h1>
      <div className="space-y-4">
        <Link href="/login">
          <Button className="w-full">ログイン</Button>
        </Link>
        <Link href="/register">
          <Button className="w-full" variant="outline">新規登録</Button>
        </Link>
      </div>
    </div>
  );
}