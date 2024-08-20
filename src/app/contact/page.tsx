import Image from "next/image";

const Page = () => {
  return (
    <div>
      <div className='relative h-[40vh] w-full'>
        <div className='absolute bg-dark-jade z-10 w-full h-full opacity-50 hover:opacity-25 transition-[opacity]' />
        <Image
          src={'/eden-lanterns-scaled_kimoconnell.jpg'}
          alt={'Lanterns at the Eden Center'}
          fill
          className='object-cover'
        />
        <h1 className='z-20 text-[4rem] text-shadow-md font-bold text-white absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'>Connect With Us</h1>
      </div>
      <div className='mx-[5%] lg:mx-[20%] xl:mx-[25%] my-10'>
        <h2 className='text-white mt-8 text-2xl'>We&apos;re most active on <a href="https://www.facebook.com/avietplace/" target='_blank' className='underline text-mint'>Facebook</a> and <a href="https://www.instagram.com/avietplace" target='_blank' className='underline text-mint'>Instagram</a>.</h2>
        <h2 className='text-white mt-8 text-2xl'>Reach us via email at hello@avietplace.org.</h2>
      </div>
    </div>
  );
}

export default Page;