import { text } from 'stream/consumers';
import AboutPageContentJSON from './aboutPageContent.json';

interface IAboutPageContent {
  [language: string]: ITextContent[]
}

interface ITextContent {
  text: string,
  type: string,
  href?: string
}

const Page = () => {
  const aboutPageContent: IAboutPageContent = AboutPageContentJSON as IAboutPageContent;

  const processTextContent = (language: string) => {
    const renderTextContent = (textContent: ITextContent, index: number) => {
      let element;
      switch (textContent.type) {
        case 'normalText': 
          element = <span>{textContent.text}</span>
          break;
        case 'header1':
          element = <h1 id={textContent.text.split(' ').join('')} className='text-pale-yellow text-xl lg:text-3xl xl:text-4xl font-semibold my-8'>{textContent.text}</h1>
          break;
        case 'header2':
          element = <h2 id={textContent.text.split(' ').join('')} className='text-mint text-lg lg:text-2xl xl:text-3xl mt-8 mb-4'>{textContent.text}</h2>
          break;
        case 'link':
          element = <span className='text-mint underline'><a href={textContent.href}>{textContent.text}</a></span>
          break;
      }
      return element;
    }

    return (
      <div>
        {aboutPageContent[language].map((textContent, index) => (
          <span key={index} className='text-tan whitespace-pre-wrap'>
            {renderTextContent(textContent, index)}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className='grid lg:grid-cols-5 mx-[5%] xl:mx-[10%]'>
      <div className='lg:mx-[10%]'>
        <div className='lg:sticky top-8 bg-mint rounded-xl mt-8 p-4'>
          <h3 className='text-dark-jade font-semibold text-xl'>Table of Contents</h3>
          {aboutPageContent['english'].map((textContent, index) => (
            (textContent.type === 'header1' || textContent.type === 'header2') &&
            <div key={index} className={`mt-1 hover:underline ${textContent.type === 'header2' ? 'ml-6 italic' : 'ml-3'}`}>
              <a href={`#${textContent.text.split(' ').join('')}`}>{textContent.text}</a>
            </div>
          ))}
        </div>
      </div>

      <div className='lg:col-span-3'>
        {processTextContent('english')}
      </div>
    </div>
  )
}

export default Page;