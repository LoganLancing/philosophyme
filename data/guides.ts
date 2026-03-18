import type { GuideProduct } from './types';

export const guides: GuideProduct[] = [
  {
    id: 'complete-collection',
    title: 'The Companion Guide',
    subtitle: 'The PhilosophyMe Companion Guide',
    url: 'https://lancing1.gumroad.com/l/the-complete-collection',
    pages: 141,
    price: '$19.99',
    description:
      'Seven eras of Western philosophy in one volume, from the ancient Greeks to contemporary thinkers, plus 25 thought experiments. A reading plan for self-study, book clubs, or use alongside a Philosophy 101 course.',
  },
  {
    id: 'thought-experiments',
    title: 'Thought Experiments',
    subtitle: "Philosophy's Great What-Ifs",
    url: 'https://lancing1.gumroad.com/l/thought-experiments',
    pages: 63,
    price: '$4.99',
    description:
      '25 thought experiments, from the Trolley Problem to the Veil of Ignorance, with the scenario, major responses, and a YOUR TURN prompt.',
    thinkers: "25 thought experiments, from the Trolley Problem to the Veil of Ignorance, with the scenario, major responses, and a YOUR TURN prompt.",
  },
];
