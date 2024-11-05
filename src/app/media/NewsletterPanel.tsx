"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface IMetadata {
  image: string,
  title: string,
  description: string,
  siteName: string,
  author: string
}

const NewsletterPanel = ({url}: {url: string}) => {
  const [articleData, setArticleData] = useState<IMetadata>({image: '', title: '', description: '', siteName: '', author: ''});

  const handleFetchMetadata = async () => {
    try {
      const response = await fetch(`/api?url=${encodeURIComponent(url)}`);
      if (response.ok) {
        const responseJSON = await response.json()
        setArticleData(responseJSON);
      } else {
        throw new Error('failed to fetch data');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('An error occurred:', error.message);
      } else {
        console.error('An unknown error occurred');
      }
    }
  }

  useEffect(() => {
    handleFetchMetadata();
  }, [url])

  return (
    <div className='h-full bg-mint rounded-xl p-5'>
      {articleData.title !== '' ?
        <a href={url} target='_blank'>
          <div>
            {/* <p className='text-dark-jade'>{articleData.author}</p> */}
            <p className='text-lg text-dark-gold mb-2.5'>{articleData.siteName}</p>
            <h3 className='text-2xl text-dark-jade font-bold mb-2.5'>{articleData.title}</h3>
            <img src={articleData.image}/>
            <p className='text-sm text-dark-jade mt-2.5'>{articleData.description}</p>
          </div>
        </a>
        :
        <div>
          <h3>Loading...</h3>
        </div>
      }
    </div>
  )
}

export default NewsletterPanel;