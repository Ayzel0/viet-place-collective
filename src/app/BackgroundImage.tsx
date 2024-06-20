"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";

export default function BackgroundImage() {
  const pathname = usePathname();

  if (pathname !== '/') {
    return null;
  }

  return (
    <div className='fixed w-[100vw] h-[100vh] z-0 opacity-20'>
      <Image 
        src={'/bg.jpg'}
        alt='bg'
        fill
        className='object-cover'
      />
    </div>
  );
}
