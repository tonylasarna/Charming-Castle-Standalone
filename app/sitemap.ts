import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/portfolio', '/rentals', '/about', '/blog', '/contact'];
  return routes.map((route) => ({
    url: `https://charming-castle.example.com${route}`,
    lastModified: new Date()
  }));
}
