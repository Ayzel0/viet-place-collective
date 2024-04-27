import NewsletterPanel from "./NewsletterPanel";
import NewsletterLinks from './newsArticleLinks.json';

type INewsletterLinks = string[];

const Page = () => {
  const newsletterLinks: INewsletterLinks = NewsletterLinks as INewsletterLinks;

  return (
    <div className='mx-[5%] lg:mx-[10%] xl:mx-[15%]'>
      <h1 className='text-mint text-4xl mt-8'>Our Newsletter</h1>
      <div className='h-1 w-full bg-pale-yellow rounded my-4' />

      <h1 className='text-mint text-4xl mt-8'>In the Press</h1>
      <div className='h-1 w-full bg-pale-yellow rounded my-4' />
      <div className="grid gap-8 grid-cols-3 mb-8">
        {newsletterLinks.map((link, index) => (
          <div key={index}>
            <NewsletterPanel url={link} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;