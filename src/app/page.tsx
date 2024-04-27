import ImageCarousel from "./ImageCarousel";
import SupportBox from "./SupportBox";

export default async function Home() {

  return (
    <main className='mx-[10%]'>
      <ImageCarousel />
      <div className='w-full h-1 bg-medium-gold mt-5' />
      <SupportBox />
      <div className='w-full h-1 bg-medium-gold mt-5' />

    </main>
  );
}