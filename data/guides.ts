import type { GuideProduct, EraId } from './types';

export const guides: GuideProduct[] = [
  {
    id: 'ancient',
    title: 'Ancient Philosophy',
    subtitle: 'The Birth of Reason',
    url: 'https://lancing1.gumroad.com/l/ancient-philosophy',
    pages: 19,
    price: '$4.99',
    era: 'Ancient',
    description:
      'Socrates, Plato, Aristotle, Epicurus, and the Stoics — a structured reading plan through the era that invented philosophy.',
  },
  {
    id: 'medieval',
    title: 'Medieval Philosophy',
    subtitle: 'Faith Meets Reason',
    url: 'https://lancing1.gumroad.com/l/Medieval-Philosophy',
    pages: 21,
    price: '$4.99',
    era: 'Medieval',
    description:
      'Augustine, Avicenna, Aquinas, Al-Ghazali, and the Scholastics — where faith met reason and neither was the same.',
  },
  {
    id: 'renaissance',
    title: 'Renaissance Philosophy',
    subtitle: 'The Rediscovery of Humanity',
    url: 'https://lancing1.gumroad.com/l/Renaissance-Philosophy',
    pages: 21,
    price: '$4.99',
    era: 'Renaissance',
    description:
      'Machiavelli, Montaigne, Bacon, Pascal, and the Humanists — the era that rediscovered the individual.',
  },
  {
    id: 'enlightenment',
    title: 'Enlightenment Philosophy',
    subtitle: 'The Age of Reason',
    url: 'https://lancing1.gumroad.com/l/Enlightenment-Philosophy',
    pages: 20,
    price: '$4.99',
    era: 'Enlightenment',
    description:
      'Descartes, Locke, Hume, Kant, and the American Founding — the age that built the modern world on philosophical arguments.',
  },
  {
    id: 'modern',
    title: 'Modern Philosophy',
    subtitle: 'Revolution and Crisis',
    url: 'https://lancing1.gumroad.com/l/Modern-Philosophy',
    pages: 19,
    price: '$4.99',
    era: 'Modern',
    description:
      'Hegel, Marx, Nietzsche, Mill, and the Existentialists — philosophy confronts industrial society, world wars, and the death of God.',
  },
  {
    id: 'contemporary',
    title: 'Contemporary Philosophy',
    subtitle: 'Freedom and Responsibility',
    url: 'https://lancing1.gumroad.com/l/Contemporary-Philosophy',
    pages: 20,
    price: '$4.99',
    era: 'Contemporary',
    description:
      'Sartre, Arendt, Hayek, Rand, Rawls, and the Postmodernists — the thinkers still shaping how we argue about justice, freedom, and truth.',
  },
  {
    id: 'thought-experiments',
    title: 'Thought Experiments',
    subtitle: "Philosophy's Greatest What-Ifs",
    url: 'https://lancing1.gumroad.com/l/thought-experiments',
    pages: 67,
    price: '$4.99',
    description:
      '25 thought experiments — from the Trolley Problem to the Veil of Ignorance — each with the scenario, major responses, and a YOUR TURN prompt.',
  },
  {
    id: 'complete-collection',
    title: 'The Complete Collection',
    subtitle: 'All Seven Guides',
    url: 'https://lancing1.gumroad.com/l/the-complete-collection',
    pages: 189,
    price: '$19.99',
    description:
      'All seven guides in one volume — six era reading plans plus 25 thought experiments. The complete Philosophy 101 reading plan.',
  },
];

export function getGuideByEra(era: EraId): GuideProduct | undefined {
  return guides.find((g) => g.era === era);
}
