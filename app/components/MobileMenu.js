'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';

export const MobileMenu = ({ navLinks, isOpen, onClose, isAuth, onLogout }) => {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 space-y-3">
      <div className="flex flex-col gap-1">
        {navLinks.map((item) =>
          item.type === 'dropdown' ? (
            <div key={item.label} className="border-b border-gray-100 pb-2 mb-2">
              <div className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700">
                {item.label}
              </div>
              <div className="pl-4">
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.path}
                    href={subItem.path}
                    onClick={onClose}
                    className={`block py-2 text-sm rounded-md ${
                      pathname === subItem.path
                        ? 'text-pink-600 font-medium'
                        : 'text-gray-600 hover:text-pink-600'
                    }`}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.path}
              href={item.path}
              onClick={onClose}
              className={`block px-3 py-2 rounded-md text-sm ${
                pathname === item.path
                  ? 'text-pink-600 font-medium'
                  : 'text-gray-700 hover:text-pink-600'
              }`}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
      <div className="mt-3 flex flex-col gap-2">
        {!isAuth ? (
          <>
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            >
              <Link href="/Login">Login</Link>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
            >
              <Link href="/Signup">Signup</Link>
            </Button>
          </>
        ) : (
          <Button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
          >
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
