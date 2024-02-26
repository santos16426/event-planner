import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  return (
    <div className="sticky z-50 top-0 inset-x-0 h-full bg-white shadow-md">
      <header className="relative">
        <div className="w-full">
          <div className="flex justify-between h-20 items-center mx-4 lg:mx-10">
            {/* TODO: Mobile Nav */}
            <div className="flex">
              <Link href="/dashboard">
                <p className="font-bold text-2xl">JoyLike</p>
              </Link>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
