"use client";
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
]

const MobileNav = () => {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleSheetToggle = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button onClick={handleSheetToggle} className='flex justify-center items-center'>
          <CiMenuFries className='text-[32px] text-accent' />
        </button>
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        <div className='mt-32 mb-40 text-center text-2xl'>
          <Link href="/">
            <h1 className='text-4xl font-semibold'>
              Monicah<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        <nav className='flex flex-col justify-center items-center gap-8'>
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleLinkClick}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav;
