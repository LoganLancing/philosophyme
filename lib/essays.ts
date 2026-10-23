// Build-time loader for essays. Each essay is one JSON file in content/essays/,
// named YYYY-MM-DD-<id>.json, so publishing an essay means adding one file.
// scripts/check-essays.mjs validates the files before every build.
import fs from 'fs';
import path from 'path';
import { getPhilosopherBySlug } from '@/data/philosophers';
import { formatEssayDate, type Essay, type EssayView } from './essayTypes';

const ESSAY_DIR = path.join(process.cwd(), 'content', 'essays');

function toView(e: Essay): EssayView {
  const displayDate = formatEssayDate(e.date);
  if (e.kind === 'imagined') {
    const p = e.philosopher ? getPhilosopherBySlug(e.philosopher) : undefined;
    const name = p?.name ?? e.philosopher ?? 'Unknown';
    return {
      ...e,
      displayDate,
      philosopherName: name,
      byline: `In the voice of ${name}`,
      bylineNote: 'An imagined essay by PhilosophyMe',
    };
  }
  return { ...e, displayDate, byline: e.author ?? 'Guest author', bylineNote: e.bio ?? '' };
}

export function getEssays(): EssayView[] {
  if (!fs.existsSync(ESSAY_DIR)) return [];
  return fs
    .readdirSync(ESSAY_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(ESSAY_DIR, f), 'utf8')) as Essay)
    .sort((a, b) => b.date.localeCompare(a.date))
    .map(toView);
}

export function getEssayById(id: string): EssayView | undefined {
  return getEssays().find((e) => e.id === id);
}
