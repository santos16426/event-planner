import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';

async function Header() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="sticky z-50 top-0 inset-x-0 h-full">
      <header className="relative">
        <div className="w-full">
          <div className="flex h-24 items-center">
            {/* TODO: Mobile Nav */}
            <div className="ml-4 flex lg:ml-10">
              <Link href="/">
                <p className="font-bold text-2xl">JoyLike</p>
              </Link>
            </div>
            <div className="hidden z-50 lg:ml-8 lg:flex flex-row justify-between  flex-grow px-8">
              <div className="flex-grow">
                <NavItems />
              </div>
              <div className="flex flex-row gap-2">
                <Link href="/sign-in">
                  <Button variant={'outline'}>Get Started</Button>
                </Link>
                {!isAuth && (
                  <Link href="/sign-in">
                    <Button>Login</Button>
                  </Link>
                )}
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
