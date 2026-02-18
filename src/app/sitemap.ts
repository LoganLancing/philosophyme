import type { MetadataRoute } from 'next';
import { philosophers } from '@/data/philosophers';
import { branches } from '@/data/branches';
import { schools } from '@/data/schools';

const BASE = 'https://philosophyme.co';

export default function sitemap(): MetadataRoute.Sitemap {
  const eraIds = ['ancient', 'medieval', 'renaissance', 'enlightenment', 'modern', 'contemporary'];

  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE}/philosophers/`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${BASE}/eras/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/branches/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/guides/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${BASE}/community/`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
  ];

  const philosopherPages = philosophers.map((p) => ({
    url: `${BASE}/philosophers/${p.id}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const eraPages = eraIds.map((era) => ({
    url: `${BASE}/eras/${era}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const branchPages = branches.map((b) => ({
    url: `${BASE}/branches/${b.id.toLowerCase().replace(/\s+/g, '-')}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const schoolPages = schools.map((s) => ({
    url: `${BASE}/schools/${s.id.toLowerCase().replace(/\s+/g, '-')}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...philosopherPages, ...eraPages, ...branchPages, ...schoolPages];
}
