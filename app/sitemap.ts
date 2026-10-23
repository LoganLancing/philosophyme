import type { MetadataRoute } from 'next';
import { philosophers } from '@/data/philosophers';
import { eras } from '@/data/eras';
import { branches } from '@/data/branches';
import { schools, schoolSlug } from '@/data/schools';
import { getEssays } from '@/lib/essays';

const BASE = 'https://philosophyme.co';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE}/`, priority: 1.0 },
    { url: `${BASE}/philosophers/`, priority: 0.9 },
    { url: `${BASE}/eras/`, priority: 0.9 },
    { url: `${BASE}/branches/`, priority: 0.9 },
    { url: `${BASE}/schools/`, priority: 0.9 },
    { url: `${BASE}/guides/`, priority: 0.9 },
    { url: `${BASE}/community/`, priority: 0.6 },
  ];

  const philosopherPages = philosophers.map((p) => ({
    url: `${BASE}/philosophers/${p.id}/`,
    priority: 0.8,
  }));

  const eraPages = eras.map((e) => ({
    url: `${BASE}/eras/${e.id.toLowerCase().replace(/\s+/g, '-')}/`,
    priority: 0.8,
  }));

  const branchPages = branches.map((b) => ({
    url: `${BASE}/branches/${b.id.toLowerCase().replace(/\s+/g, '-')}/`,
    priority: 0.7,
  }));

  const schoolPages = schools.map((s) => ({
    url: `${BASE}/schools/${schoolSlug(s.id)}/`,
    priority: 0.7,
  }));

  const essayPages = getEssays().map((e) => ({
    url: `${BASE}/essays/${e.id}/`,
    priority: 0.7,
  }));

  // No lastModified: stamping every page with the build date tells search engines
  // that every page changed on every deploy, so they learn to ignore the date.
  return [
    ...staticPages,
    ...philosopherPages,
    ...eraPages,
    ...branchPages,
    ...schoolPages,
    ...essayPages,
  ].map((entry) => ({
    ...entry,
    changeFrequency: 'monthly' as const,
  }));
}
