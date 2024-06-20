import type { NextRequest } from 'next/server';
import fetch from 'node-fetch';
import { load } from 'cheerio';

interface Metadata {
  image: string | undefined;
  title: string | undefined;
  description: string | undefined;
  siteName: string | undefined;
  author: string | undefined;
}

interface CacheEntry {
  data: Metadata;
  expiry: number;
}

const cache: Record<string, CacheEntry> = {};
const TTL = 10000000; // Cache duration in milliseconds (5 minutes)

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get('url');

  if (!url) {
    return new Response(JSON.stringify({ error: 'No URL provided' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  const cachedEntry = cache[url];

  if (cachedEntry && cachedEntry.expiry > Date.now()) {
    return new Response(JSON.stringify(cachedEntry.data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  try {
    const response = await fetch(url as string);
    const html = await response.text();
    const $ = load(html);
    const metadata: Metadata = {
      image: $('meta[property="og:image"]').attr('content'),
      title: $('meta[property="og:title"]').attr('content'),
      description: $('meta[property="og:description"]').attr('content'),
      siteName: $('meta[property="og:site_name"]').attr('content'),
      author: $('meta[name="author"]').attr('content')
    };

    cache[url] = {
      data: metadata,
      expiry: Date.now() + TTL
    };

    return new Response(JSON.stringify(metadata), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch URL data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
