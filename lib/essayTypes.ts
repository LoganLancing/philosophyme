// Shared by the server loader (lib/essays.ts) and client components.

export interface EssaySection {
  heading: string | null;
  text: string;
}

export interface Essay {
  id: string;
  // 'guest' is written and signed by a real person.
  // 'imagined' is written by PhilosophyMe in a historical philosopher's voice.
  kind: 'guest' | 'imagined';
  title: string;
  date: string; // YYYY-MM-DD, or YYYY-MM for older essays
  tags: string[];
  excerpt: string;
  sections: EssaySection[];
  author?: string; // guest essays
  bio?: string; // guest essays
  philosopher?: string; // imagined essays: philosopher id, e.g. "seneca"
  topic?: string; // imagined essays: the contemporary question in a few words
}

// What the pages show, worked out once on the server.
export interface EssayView extends Essay {
  byline: string;
  bylineNote: string;
  displayDate: string;
  philosopherName?: string;
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function formatEssayDate(date: string): string {
  const [y, m, d] = date.split('-').map(Number);
  const month = MONTHS[m - 1];
  return d ? `${month} ${d}, ${y}` : `${month} ${y}`;
}

export function imaginedNotice(name: string): string {
  return `An imagined essay. ${name} did not write this. PhilosophyMe wrote it in ${name}'s voice, drawing only on ideas ${name} actually held, to show how that thinking meets a question we face today. Nothing in it is a quotation.`;
}
