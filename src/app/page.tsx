import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import { cookies } from 'next/headers';
import { fraunces } from "./fonts";

export default async function Home() {
  const cookieStore = cookies();
  const language = cookieStore.get('language')?.value as string;

  return (
    <main className='mx-[10%]'>
      <ImageCarousel />
      <div className='w-full h-1 bg-medium-gold mt-5' />
      <h2 className='text-mint mt-5 text-lg lg:text-2xl'>{language === 'english' ? 'Quick Links' : 'đường dẫn nhanh'}</h2>
      <div className='grid grid-cols-3 gap-8'>
        <button className={`rounded-full bg-mint my-5 p-4 hover:brightness-110 text-charcoal ${fraunces.className}`}>Email FC City Council!</button>
        <button className={`rounded-full bg-mint my-5 p-4 hover:brightness-110 text-charcoal ${fraunces.className}`}>Get Involved!</button>
        <button className={`rounded-full bg-mint my-5 p-4 hover:brightness-110 text-charcoal ${fraunces.className}`}>Support us on GoFundMe!</button>
      </div>
    </main>
  );
}