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
    <div className='h-full bg-mint rounded-xl p-4'>
      {articleData.title !== '' ?
        <a href={url}>
          <div>
            <h2 className='text-xl text-dark-gold'>{articleData.author}</h2>
            <h2 className='text-xl text-dark-gold mt-2'>{articleData.siteName}</h2>
            <h1 className='text-dark-jade text-2xl my-2'>{articleData.title}</h1>
            <img src={articleData.image}/>
            <p className='my-2 text-dark-jade'>{articleData.description}</p>
          </div>
        </a>
        :
        <div>
          <h2>Loading...</h2>
        </div>
      }
    </div>
  )
}

export default NewsletterPanel;