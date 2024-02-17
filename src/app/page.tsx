import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  return (
    <div className="w-full min-h-screen relative bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex items-center">
            <h1 className="text-5xl font-semibold">JoyLike</h1>
          </div>
          <div className="mt-2">
            {isAuth && (
              <Link href="/dashboard">
                <Button>Get Started</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
