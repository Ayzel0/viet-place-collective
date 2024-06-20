import NewsletterPanel from "./NewsletterPanel";
import NewsletterLinks from './newsArticleLinks.json';

interface INewsletterLinks {
  featured: string[],
  other: string[]
};

const Page = () => {
  const newsletterLinks: INewsletterLinks = NewsletterLinks as INewsletterLinks;
  const featured = newsletterLinks.featured;
  const other = newsletterLinks.other;

  return (
    <div className='mx-[5%] lg:mx-[10%] xl:mx-[15%]'>
      <h1 className='text-pale-yellow text-4xl font-semibold mt-8'>In the Press</h1>
      <h2 className='text-mint text-3xl mt-8'>Featured Articles</h2>
      <div className='h-1 w-full bg-pale-yellow rounded my-4' />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {featured.map((link, index) => (
          <div key={index}>
            <NewsletterPanel url={link} />
          </div>
        ))}
      </div>
      <div className='h-1 w-full bg-pale-yellow rounded my-4' />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        {other.map((link, index) => (
          <div key={index}>
            <NewsletterPanel url={link} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;