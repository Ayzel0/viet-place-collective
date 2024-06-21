"use server" 

import getInvolvedContentJSON from "./getInvolvedContent.json";
import Image from "next/image";

interface IGetInvolvedContent {
  eventsList: {
    imagePath: string
    title: string
    date: string
  }[],
  pastActionAlerts: {
    imagePath: string
    link?: string
  }[],
  volunteerDonate: {
    volunteer: {
      imagePath: string
      link: string
    },
    donate: {
      imagePath: string
      link: string
    }
  }
}

const page = () => {
  const getInvolvedContent: IGetInvolvedContent = getInvolvedContentJSON as IGetInvolvedContent;

  return (
    <div className='mx-[5%] lg:mx-[10%] xl:mx-[15%]'>
      <h1 className='text-pale-yellow font-semibold text-4xl mt-8'>Events</h1>
      <div className='h-1 w-full bg-pale-yellow rounded my-4' />
      <div className='grid md:grid-cols-2 gap-8 mt-6'>
        {getInvolvedContent.eventsList.map((obj, index) => (
          <a key={index} className='flex flex-col gap-0'>
            <div className='relative flex justify-center'>
              <Image 
                src={obj.imagePath}
                alt={obj.title}
                width={1000}
                height={500}
                className='object-contain'
              />
            </div>
            <h2 className='text-center w-[full] bg-medium-jade bottom-0 px-10 py-2 rounded-b-md text-mint'>{obj.title}</h2>
          </a>
        ))}
      </div>
      <h1 className='text-pale-yellow font-semibold text-4xl mt-8'>Past Action Alerts</h1>
      <div className='h-1 w-full bg-pale-yellow rounded my-4' />
      <div className='grid grid-cols-2 lg:grid-cols-5 gap-8 mt-6 mb-10'>
        {getInvolvedContent.pastActionAlerts.map((obj, index) => (
          <div key={index}>
            {obj.link ?
              <a href={obj.link}>
                <Image 
                  src={obj.imagePath}
                  alt={""}
                  width={500}
                  height={500}
                />
              </a>
              :
              <Image 
                src={obj.imagePath}
                alt={""}
                width={500}
                height={500}
              />
            }
          </div>
        ))}
      </div>
      <div className='grid grid-cols-2 mb-10 gap-x-10 relative'>
        <a className='relative' href='https://docs.google.com/forms/d/e/1FAIpQLSdk5l18D0uwxwLxYXRhZXibiwdYt63wvIPfZ4WtUDaTPrtWwQ/viewform'>
          <Image 
            src={getInvolvedContent.volunteerDonate.volunteer.imagePath}
            alt={'Volunteer'}
            height={1000}
            width={1000}
          />
          <h3 className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-[4rem] font-bold text-pale-yellow text-shadow-md'>Volunteer</h3>
        </a>
        <a className="relative" href='https://givebutter.com/O8i9zl'>
          <Image 
            src={getInvolvedContent.volunteerDonate.donate.imagePath}
            alt={'Volunteer'}
            height={1000}
            width={1000}
          />
          <h3 className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] text-[4rem] font-bold text-pale-yellow text-shadow-md'>Donate</h3>
        </a>
      </div>
    </div>
  )
}

export default page;