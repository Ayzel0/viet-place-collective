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
      {/* intro text */}
      <p className='text-tan text-lg'>For media inquiries, email hello@avietplace.org.</p>
      <h1 className='text-pale-yellow text-5xl font-bold my-10'>In the Press</h1>
      <div className='h-1 w-full bg-bright-yellow rounded-lg my-10' /> {/* line */}

      {/* featured articles */}
      <h2 className='text-tan text-3xl mb-5'>Featured Articles</h2> {/* header */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'> {/* 3-article feed */}
        {featured.map((link, index) => (
          <div key={index}>
            <NewsletterPanel url={link} />
          </div>
        ))}
      </div>
      <div className='h-1 w-full bg-bright-yellow rounded-lg my-10' /> {/* line */}

      {/* recent articles */}
      <h2 className='text-tan text-3xl mb-5'>Recent Articles</h2> {/* header */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"> {/* feed */}
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