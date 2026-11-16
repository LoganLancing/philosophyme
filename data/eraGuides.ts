import type { EraId } from './types';

// Extra "at a glance" detail and common questions for era pages with the most
// search interest. Shown near the top of the page (ideas and thinkers) and
// after the essay (questions, also sent as FAQPage data).

export interface EraGuide {
  ideas: { name: string; text: string }[];
  thinkers: string[]; // philosopher ids
  faq: { question: string; answer: string }[];
}

export const eraGuides: Partial<Record<EraId, EraGuide>> = {
  Contemporary: {
    ideas: [
      { name: 'Analytic philosophy', text: 'clear arguments built on logic and the careful study of language.' },
      { name: 'Phenomenology', text: 'describing experience as we actually live it, before theory gets in the way.' },
      { name: 'Existentialism', text: 'freedom, choice and how to make a meaningful life without guarantees.' },
      { name: 'Philosophy of science', text: 'how scientific knowledge grows, and how theories are tested and replaced.' },
      { name: 'Political philosophy', text: 'renewed arguments over justice, liberty, markets and the limits of the state.' },
      { name: 'Postmodernism', text: 'suspicion of grand theories and of claims to neutral, objective truth.' },
      { name: 'Philosophy of mind', text: 'what consciousness is and whether it can be explained in physical terms.' },
    ],
    thinkers: [
      'bertrand-russell', 'ludwig-wittgenstein', 'edmund-husserl', 'martin-heidegger', 'jean-paul-sartre',
      'simone-de-beauvoir', 'albert-camus', 'hannah-arendt', 'karl-popper', 'friedrich-hayek', 'john-rawls', 'michel-foucault',
    ],
    faq: [
      {
        question: 'What is contemporary philosophy?',
        answer:
          'Contemporary philosophy is Western philosophy from about 1900 to the present day. It includes analytic philosophy, phenomenology, existentialism, philosophy of science, postmodernism and a revival of political philosophy, along with newer fields such as applied ethics and philosophy of mind.',
      },
      {
        question: 'When did contemporary philosophy begin?',
        answer:
          'Most histories date it from about 1900, when Bertrand Russell and others recast philosophy around logic and language, and Edmund Husserl founded phenomenology. Those two starting points became the analytic and continental traditions that still divide the field.',
      },
      {
        question: 'What is the difference between modern and contemporary philosophy?',
        answer:
          'Modern philosophy usually means the period from Descartes in the 1600s through the 1800s, including the Enlightenment and thinkers like Kant, Hegel and Nietzsche. Contemporary philosophy is what came after, from about 1900 to today.',
      },
      {
        question: 'What are the analytic and continental traditions?',
        answer:
          'Analytic philosophy, dominant in Britain and America, works through precise arguments, logic and the analysis of language. Continental philosophy, rooted in Germany and France, starts from lived experience, history and culture, and includes phenomenology, existentialism and post-structuralism. The split is a matter of style and focus, and many philosophers draw on both.',
      },
      {
        question: 'Who are the most important contemporary philosophers?',
        answer:
          'Widely studied figures include Bertrand Russell, Ludwig Wittgenstein, Edmund Husserl, Martin Heidegger, Jean-Paul Sartre, Simone de Beauvoir, Albert Camus, Hannah Arendt, Karl Popper, Friedrich Hayek, John Rawls, Robert Nozick and Michel Foucault.',
      },
    ],
  },
  Renaissance: {
    ideas: [
      { name: 'Humanism', text: 'a return to Greek and Roman sources, and the conviction that human life is worth studying for its own sake.' },
      { name: 'Political realism', text: 'Machiavelli looked at power as it actually works, not as moralists wished it worked.' },
      { name: 'Skepticism and the self', text: 'Montaigne used the essay to examine his own mind and the limits of what anyone can know.' },
      { name: 'Conscience against authority', text: 'the Reformation put individual reading of scripture above popes and councils.' },
      { name: 'The new science', text: 'Bacon and Galileo argued that knowledge comes from observation and experiment, not ancient authority.' },
    ],
    thinkers: ['niccolo-machiavelli', 'erasmus', 'thomas-more', 'michel-de-montaigne', 'giordano-bruno', 'francis-bacon', 'galileo-galilei'],
    faq: [
      {
        question: 'What is Renaissance philosophy?',
        answer:
          'Renaissance philosophy is Western philosophy from about 1400 to 1600 CE. Humanists recovered classical learning and turned attention from the afterlife to human life, politics, language and the natural world.',
      },
      {
        question: 'What were the main ideas of Renaissance philosophy?',
        answer:
          'The main ideas were humanism (human dignity and the study of classical texts), political realism (Machiavelli), skepticism and self-examination (Montaigne), the Reformation claim that conscience outranks institutional authority, and the new science of observation and experiment (Bacon and Galileo).',
      },
      {
        question: 'Who were the major Renaissance philosophers?',
        answer:
          'The major figures include Niccolò Machiavelli, Erasmus, Thomas More, Michel de Montaigne, Giordano Bruno, Francis Bacon and Galileo Galilei, along with earlier humanists such as Petrarch and Pico della Mirandola.',
      },
      {
        question: 'How was Renaissance philosophy different from medieval philosophy?',
        answer:
          'Medieval philosophy centered on God and used Aristotle, through the method of Scholasticism, to reconcile faith with reason. Renaissance thinkers went back to the original Greek and Latin sources, wrote for a wider public, and gave far more attention to human life, politics and the observed world.',
      },
      {
        question: 'What is Renaissance humanism?',
        answer:
          'Renaissance humanism was a movement to revive the literature, history and philosophy of ancient Greece and Rome as a guide to living well. It held that human beings have a special dignity and the freedom to shape their own lives, and that this earthly life matters in its own right.',
      },
    ],
  },
};
