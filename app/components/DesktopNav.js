'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavDropdown from './NavDropdown';

export const DesktopNav = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center">
      {navLinks.map((item) =>
        item.type === 'dropdown' ? (
          <NavDropdown key={item.label} label={item.label} items={item.items} />
        ) : (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 py-2 transition-colors capitalize ${
              pathname === item.path
                ? 'text-pink-600 font-medium'
                : 'text-gray-600 hover:text-pink-600'
            }`}
          >
            {item.label}
          </Link>
        )
      )}
    </nav>
  );
};

export default DesktopNav;
