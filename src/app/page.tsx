import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = cookies();
  const language = cookieStore.get('language')?.value as string;

  return (
    <main className="">
      <ImageCarousel />
    </main>
  );
}