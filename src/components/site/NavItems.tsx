import { navlinks } from '@/constants/navlinks';
import Link from 'next/link';

function NavItems() {
  return (
    <div className="flex gap-10 h-full items-center justify-center w-full">
      {navlinks.map((nav) => {
        return (
          <Link key={nav.key} href={nav.href}>
            <p className="font-semibold capitalize">{nav.label}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default NavItems;
