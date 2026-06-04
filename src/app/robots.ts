import { MetadataRoute } from 'next';
import siteData from '@/data/site.json';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteData.url || 'https://kobilanstudios.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'ClaudeBot', 'Applebot-Extended'],
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
