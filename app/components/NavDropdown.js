'use client';

import * as React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname as usePathName } from 'next/navigation';

export const NavDropdown = ({ label, items }) => {
  const pathname = usePathName();
  const [isOpen, setIsOpen] = React.useState(false);

  // Check if any of the dropdown items are active
  const isActive = items.some(item => pathname === item.path);

  return (
    <DropdownMenu.Root onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
            isActive
              ? 'text-pink-600 font-medium'
              : 'text-gray-600 hover:text-pink-600'
          }`}
        >
          {label}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[200px] bg-white rounded-md p-1 shadow-lg border border-gray-100"
          sideOffset={8}
          align="start"
        >
          {items.map((item) => (
            <DropdownMenu.Item key={item.path} asChild>
              <Link
                href={item.path}
                className={`flex items-center w-full px-3 py-2 text-sm rounded-md transition-colors ${
                  pathname === item.path
                    ? 'bg-pink-50 text-pink-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default NavDropdown;
