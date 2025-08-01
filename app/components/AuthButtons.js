'use client';

import { Button } from './ui/Button';
import Link from 'next/link';

export const AuthButtons = ({ isAuth, onLogout, className = '' }) => {
  if (!isAuth) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
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
      </div>
    );
  }

  return (
    <Button
      onClick={onLogout}
      className={`bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white ${className}`}
    >
      Logout
    </Button>
  );
};

export default AuthButtons;
