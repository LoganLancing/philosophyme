// Extra detail for the Branches hub (/branches/): a one-sentence definition,
// the questions each branch asks, and the main areas inside it.

export interface BranchDetail {
  definition: string;
  questions: string[];
  areas: string[];
}

export const branchDetails: Record<string, BranchDetail> = {
  Metaphysics: {
    definition: 'Metaphysics is the study of what exists and what reality is ultimately like.',
    questions: ['Is the mind separate from the body?', 'Do we have free will?', 'What is time?', 'Does God exist?'],
    areas: ['Ontology (the study of being)', 'Philosophy of mind', 'Free will and causation', 'Philosophy of religion'],
  },
  Epistemology: {
    definition: 'Epistemology is the study of knowledge: what it is, where it comes from, and how far it reaches.',
    questions: ['What separates knowledge from belief?', 'Can we trust our senses?', 'Is anything certain?', 'Does knowledge come from reason or experience?'],
    areas: ['Rationalism and empiricism', 'Skepticism', 'Theories of justification', 'Philosophy of science'],
  },
  Ethics: {
    definition: 'Ethics is the study of right and wrong, and of how a person should live.',
    questions: ['What makes an action right or wrong?', 'What is a good life?', 'Are moral truths real or made up?', 'What do we owe other people?'],
    areas: ['Virtue ethics', 'Duty-based ethics (deontology)', 'Consequentialism and utilitarianism', 'Applied ethics and metaethics'],
  },
  'Political Philosophy': {
    definition: 'Political philosophy is the study of government, justice, rights and the state.',
    questions: ['What gives a government the right to rule?', 'How much liberty should people have?', 'What is a just society?', 'Who should own property?'],
    areas: ['Social contract theory', 'Theories of justice', 'Liberty and rights', 'Philosophy of law'],
  },
  Logic: {
    definition: 'Logic is the study of correct reasoning: what makes an argument good, and what makes one fail.',
    questions: ['What makes an argument valid?', 'What is a fallacy?', 'How do we reason when we cannot be certain?', 'Can every truth be proved?'],
    areas: ['Deductive (formal) logic', 'Inductive reasoning', 'Informal logic and fallacies', 'Philosophy of logic and language'],
  },
  Aesthetics: {
    definition: 'Aesthetics is the study of beauty, art and taste.',
    questions: ['What is art?', 'Is beauty in the eye of the beholder?', 'Why do we enjoy sad stories?', 'Can one judgment of taste be better than another?'],
    areas: ['Philosophy of art', 'Theories of beauty', 'Taste and aesthetic judgment', 'Art and morality'],
  },
};

// Questions for the Branches hub. Shown on the page and sent as FAQPage data.
export const branchFaq: { question: string; answer: string }[] = [
  {
    question: 'What are the main branches of philosophy?',
    answer:
      'The six main branches of philosophy are metaphysics (what exists), epistemology (what we can know), ethics (how we should live), political philosophy (how society should be governed), logic (how to reason well) and aesthetics (what beauty and art are).',
  },
  {
    question: 'How many branches of philosophy are there?',
    answer:
      'There is no fixed number. Most introductions teach five or six core branches. Five-branch lists usually fold political philosophy into ethics. Longer lists add fields that grew out of the core six, such as philosophy of mind, philosophy of science, philosophy of religion, philosophy of language and philosophy of law.',
  },
  {
    question: 'What are the types of philosophy?',
    answer:
      'People use "types of philosophy" for three different things. Branches are fields of questions, like ethics or logic. Schools are traditions that answer those questions in their own way, like Stoicism or Existentialism. Eras are periods of history, from ancient Greece to today. PhilosophyMe covers all three.',
  },
  {
    question: 'Which branch of philosophy should I start with?',
    answer:
      'Ethics is the easiest way in, because its questions come up in everyday life. Epistemology and metaphysics follow naturally, since every ethical argument rests on claims about what we can know and what is real. Logic helps with all of them, because it teaches you to test an argument before you accept it.',
  },
  {
    question: 'What is the difference between a branch and a school of philosophy?',
    answer:
      'A branch is a field of questions, such as ethics, epistemology or metaphysics. A school is a tradition that gives its own answers to those questions, usually across several branches at once. The Stoics, for example, divided their philosophy into logic, physics and ethics, and had distinctive views in each.',
  },
];
