import ImageCarousel from "./ImageCarousel";
import SupportBox from "./SupportBox";
import TitleBar from "./TitleBar";
import { fraunces } from "./fonts";
import FrontPageContentJSON from './frontPageContent.json';

interface IFrontPageContent {
  supportBox: {
    [boxTitle: string]: {
      title: string,
      text: string,
      link: string,
      linkText: string,
    }
  },
  byTheNumbers: {
    amount: string,
    type: string
  }[]
}

export default async function Home() {
  const frontPageContent = FrontPageContentJSON as IFrontPageContent;
  const byTheNumbers = frontPageContent.byTheNumbers;

  return (
    <main className='mx-[10%]'>
      <TitleBar />
      <div className='w-full h-1 bg-medium-gold my-5' />
      <ImageCarousel />
      <div className='w-full h-1 bg-medium-gold mt-5' />
      <h2 className='text-pale-yellow mt-8 text-3xl font-semibold'>By the Numbers</h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
        {byTheNumbers.map((obj, i) => (
          <div key={i} className='bg-medium-jade py-4 px-6 flex gap-8 items-center'>
            <h3 className='text-pale-yellow text-[6rem] font-bold'>{obj.amount}</h3>
            <p className='text-pink text-2xl'>{obj.type}</p>
          </div>
        ))}
      </div>
      <div className='w-full h-1 bg-medium-gold my-5' />
    </main>
  );
}