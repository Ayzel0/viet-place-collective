import ImageCarousel from "./ImageCarousel";
import SupportBox from "./SupportBox";
import TitleBar from "./TitleBar";

import { fraunces } from "./fonts";

export default async function Home() {

  return (
    <main className='mx-[10%]'>
      <TitleBar />
      <ImageCarousel />
      <div className='w-full h-1 bg-medium-gold mt-5' />
      <SupportBox />
      <div className='w-full h-1 bg-medium-gold mt-5' />
      <div className='grid lg:grid-cols-2 my-8 gap-8'>
        <div className='bg-medium-jade rounded-xl px-8 py-4'>
          <h2 className={`${fraunces.className} text-center text-tan text-2xl mb-4`}>Victories</h2>
          <p className='text-tan text-lg'>Recently, we&apos;ve achieved the following goals!</p>
          <ul className='list-disc ml-8 text-white'>
            <li>Inclusion of a part-time Vietnamese-speaking outreach specialist for communicating with businessowners in Eden</li>
            <li>Adding a section to the East End Small Area Plan focusing on anti-displacement strategies</li>
          </ul>
        </div>
        <div className='bg-medium-jade rounded-xl py-4 px-8'>
          <h2 className={`${fraunces.className} text-center text-tan text-2xl mb-4`}>Goals</h2>
          <p className='text-tan text-lg'>Here are the changes we&apos;re still pushing for:</p>
          <ul className='list-disc ml-8 text-white'>
            <li>Get the city of Falls Church to fund a full-time outreach specialist, not just a part-time volunteer</li>
            <li>Fully fund all anti-displacement strategies! Right now, they&apos;re just ideas in the Small Area Plan without funding</li>
          </ul>
        </div>
      </div>

    </main>
  );
}