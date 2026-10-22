import type { Faq } from './types';

// Extra content for school pages, keyed by school id (see schools.ts).
// Every school has a one-sentence definition that opens its page. The longer sections
// (key ideas, key texts, influence today, FAQ) are being added a few schools at a time,
// starting with the schools that already get search impressions.

export interface SchoolDetail {
  definition: string;
  keyIdeas?: { title: string; text: string }[];
  keyTexts?: string[];
  today?: string;
  faq?: Faq[];
}

export const schoolDetails: Record<string, SchoolDetail> = {
  Stoicism: {
    definition: 'Stoicism is a school of philosophy founded in Athens around 300 BCE that teaches that virtue is the only true good and that peace of mind comes from accepting what we cannot control.',
  },
  Platonism: {
    definition: 'Platonism is the philosophy of Plato and his followers, built on the view that the most real things are eternal, unchanging Forms that the physical world only imperfectly copies.',
    keyIdeas: [
      {
        title: 'The theory of Forms',
        text: 'Plato held that behind every beautiful thing stands Beauty itself, and behind every just act stands Justice itself. These Forms are perfect, eternal and unchanging. Physical things are what they are because they share in them, the way a drawn circle is a rough copy of the circle a geometer reasons about.',
      },
      {
        title: 'The allegory of the cave',
        text: 'In the Republic, Plato pictures prisoners chained in a cave who take shadows on the wall for reality. Philosophy is the hard climb out into daylight, where the soul can see the Forms and, above them all, the Form of the Good. Someone who makes the climb and goes back down will look foolish to those still watching shadows.',
      },
      {
        title: 'Knowledge as recollection',
        text: 'Plato suggested that learning is a kind of remembering. The soul knew the Forms before birth, and good questioning helps it recover what it already knows. In the Meno, Socrates draws a geometry proof out of an enslaved boy who has never studied geometry, simply by asking him questions.',
      },
      {
        title: 'The just soul and the just city',
        text: 'Plato divided the soul into reason, spirit and appetite, and argued that a person is just when each part does its own work with reason in charge. The Republic mirrors this in an ideal city with three classes, ruled by philosopher-kings who have seen the Good.',
      },
    ],
    keyTexts: [
      'Plato, Apology',
      'Plato, Meno',
      'Plato, Phaedo',
      'Plato, Symposium',
      'Plato, Republic',
      'Plotinus, Enneads (3rd century CE)',
    ],
    today: 'Platonism shaped Christian, Jewish and Islamic theology through Augustine, the Neoplatonists and later medieval thinkers, and it returned in force during the Renaissance. Today the word also names a live position in the philosophy of mathematics: the view that numbers and other abstract objects exist independently of us. Alfred North Whitehead called the European philosophical tradition "a series of footnotes to Plato," and the line is still quoted because it is hard to argue with.',
    faq: [
      {
        question: 'What is Platonism in simple terms?',
        answer: 'Platonism is the belief that the most real things are not physical objects but eternal ideas, which Plato called Forms, such as Justice, Beauty and Equality. The senses show us changing copies; reason lets us grasp the originals.',
      },
      {
        question: 'What is the difference between Platonism and Neoplatonism?',
        answer: 'Neoplatonism is a later development begun by Plotinus in the 3rd century CE. It organized Plato\'s ideas into a single system in which all of reality flows from one source, the One, and gave that system a more mystical and religious character.',
      },
      {
        question: 'Do people still hold Platonist views today?',
        answer: 'Yes, especially in mathematics. Many philosophers and mathematicians hold that numbers and mathematical truths exist independently of human minds and are discovered rather than invented. That view is called mathematical Platonism.',
      },
    ],
  },
  Aristotelianism: {
    definition: 'Aristotelianism is the tradition that follows Aristotle in grounding knowledge in observation and logic and in treating the good life as the full development of human nature.',
  },
  Epicureanism: {
    definition: 'Epicureanism is a school founded by Epicurus around 307 BCE that teaches that the goal of life is pleasure understood as tranquility: freedom from pain in the body and from fear in the mind.',
  },
  Skepticism: {
    definition: 'Skepticism is the philosophical position that certain knowledge is hard or impossible to reach and, in its ancient form, the practice of suspending judgment to find peace of mind.',
    keyIdeas: [
      {
        title: 'Suspending judgment',
        text: 'The ancient Pyrrhonists found that for every argument there is an opposing argument of equal force. Rather than pick a side, they suspended judgment, which they called epoché. What followed, they reported, was not anxiety but calm, the peace of mind they called ataraxia.',
      },
      {
        title: 'The modes',
        text: 'Sextus Empiricus collected standard patterns of argument, called modes, that show how appearances vary. Things look different to different animals, to different people, to different senses and in different circumstances. If appearances conflict, no single one can be trusted as the way things really are.',
      },
      {
        title: 'Academic and Pyrrhonian skepticism',
        text: 'Two ancient strands took different lines. Academic skeptics in Plato\'s later Academy, such as Arcesilaus and Carneades, argued that certain knowledge cannot be had, though Carneades allowed that some beliefs are more persuasive than others. Pyrrhonists would not assert even that much and suspended judgment across the board.',
      },
      {
        title: 'Modern doubt',
        text: 'Descartes used radical doubt as a method, imagining an evil demon deceiving him so he could find what survived. Hume turned skepticism on causation, induction and the self, and concluded that we live by custom and natural belief far more than by proof.',
      },
    ],
    keyTexts: [
      'Cicero, Academica (45 BCE)',
      'Sextus Empiricus, Outlines of Pyrrhonism (2nd century CE)',
      'Michel de Montaigne, "Apology for Raymond Sebond" (1580)',
      'René Descartes, Meditations on First Philosophy (1641)',
      'David Hume, An Enquiry Concerning Human Understanding (1748)',
    ],
    today: 'Skeptical arguments still drive epistemology. The brain-in-a-vat scenario is a modern version of Descartes\' demon, and philosophers continue to argue over whether, and how, we can know anything about the world outside our own minds. In everyday life skepticism has come to mean the habit of asking for evidence before accepting a claim, which sits close to the spirit of science.',
    faq: [
      {
        question: 'What is philosophical skepticism in simple terms?',
        answer: 'It is the view that we cannot be certain we know what we think we know. Some skeptics doubt only certain kinds of knowledge, such as knowledge of other minds or of the future. The ancient Pyrrhonists suspended judgment about everything and said they found calm in doing so.',
      },
      {
        question: 'What is the difference between skepticism and cynicism?',
        answer: 'Skepticism is about knowledge: it questions whether we can know things. Ancient Cynicism was about how to live: Diogenes and other Cynics rejected wealth and social custom in favor of a simple, natural life. In modern usage a cynic distrusts people\'s motives, while a skeptic wants evidence.',
      },
      {
        question: 'Can a skeptic live a normal life?',
        answer: 'Ancient critics said skeptics would be unable to act at all. Pyrrhonists replied that they followed appearances, custom and natural instinct without claiming that these show how things really are. Hume made a similar point centuries later: whatever philosophy concludes, nature makes us go on believing.',
      },
    ],
  },
  Rationalism: {
    definition: 'Rationalism is the view that reason, rather than sense experience, is the main source of knowledge, and that some truths can be known independently of experience.',
  },
  Empiricism: {
    definition: 'Empiricism is the view that all knowledge comes from sense experience, so the mind starts out with no built-in ideas.',
    keyIdeas: [
      {
        title: 'The blank slate',
        text: 'Locke argued that the mind begins like a blank sheet of paper, with no innate ideas. Everything we think comes from two sources: sensation, which gives us ideas of the world outside, and reflection, which gives us ideas of our own thinking, doubting and willing.',
      },
      {
        title: 'Simple and complex ideas',
        text: 'For Locke, experience supplies simple ideas such as red, cold or sweet, and the mind combines them into complex ideas such as an apple, an army or a city. Even our most abstract thoughts are built, step by step, out of that raw material.',
      },
      {
        title: 'Hume\'s problem of induction',
        text: 'Hume pointed out that we never actually observe a cause producing an effect, only one event regularly following another. Our expectation that the future will resemble the past comes from habit, not from any argument, which leaves induction, the basis of everyday and scientific reasoning, without a rational proof.',
      },
      {
        title: 'Answering to experience',
        text: 'Empiricists hold that claims about the world must answer to observation. That principle is the philosophical backbone of experimental science, from Bacon\'s call for careful, methodical observation to modern standards of evidence.',
      },
    ],
    keyTexts: [
      'Francis Bacon, Novum Organum (1620)',
      'John Locke, An Essay Concerning Human Understanding (1689)',
      'George Berkeley, A Treatise Concerning the Principles of Human Knowledge (1710)',
      'David Hume, A Treatise of Human Nature (1739–40)',
      'David Hume, An Enquiry Concerning Human Understanding (1748)',
      'John Stuart Mill, A System of Logic (1843)',
    ],
    today: 'Empiricism shaped the scientific method and remains the working outlook of most scientists. In the 20th century the logical positivists pushed it to an extreme, claiming that a statement is meaningful only if experience could confirm it. Quine later attacked key parts of that program while keeping experience at the center of knowledge. The old question of innate ideas lives on in linguistics and cognitive science, in debates over how much of the mind is built in at birth.',
    faq: [
      {
        question: 'What is the difference between empiricism and rationalism?',
        answer: 'Empiricists say knowledge comes from experience. Rationalists say reason can reach some truths on its own, such as the truths of mathematics, without depending on the senses. Kant tried to settle the dispute by arguing that knowledge needs both experience and concepts the mind supplies.',
      },
      {
        question: 'Who were the British empiricists?',
        answer: 'John Locke, George Berkeley and David Hume, writing between the late 1600s and the mid-1700s. Each took empiricism further than the one before: Locke grounded knowledge in experience, Berkeley concluded that matter cannot be known to exist apart from perception, and Hume questioned causation itself.',
      },
      {
        question: 'Is empiricism the same as the scientific method?',
        answer: 'No, but the two are closely linked. Empiricism is a theory about where knowledge comes from. The scientific method is a practice that puts that theory to work through observation, experiment and testing.',
      },
    ],
  },
  Idealism: {
    definition: 'Idealism is the view that reality is fundamentally mental, so that what exists is either made of mind or shaped by it.',
    keyIdeas: [
      {
        title: 'Mind comes first',
        text: 'Idealists reverse the common-sense picture. Instead of minds being small parts of a material world, the world we know is in some way made of mind or made by it. Versions of idealism differ a great deal in how strongly they put that claim.',
      },
      {
        title: 'Subjective idealism: Berkeley',
        text: 'George Berkeley argued that we never perceive matter itself, only ideas: colors, shapes, sounds, textures. Objects are collections of those ideas, and they go on existing when no person looks at them because God always perceives them. His summary was "to be is to be perceived."',
      },
      {
        title: 'Transcendental idealism: Kant',
        text: 'Kant kept a world outside the mind but argued that we can only know it as it appears to us. Space, time and cause and effect are forms the mind brings to experience, so the world as it is in itself, apart from any mind, stays out of reach.',
      },
      {
        title: 'Absolute idealism: Hegel',
        text: 'Hegel argued that reality as a whole is the unfolding of reason, which he called Spirit. History, art, religion and philosophy are stages in which Spirit comes to know itself, moving forward through conflict and resolution.',
      },
    ],
    keyTexts: [
      'George Berkeley, A Treatise Concerning the Principles of Human Knowledge (1710)',
      'Immanuel Kant, Critique of Pure Reason (1781)',
      'G.W.F. Hegel, Phenomenology of Spirit (1807)',
      'Arthur Schopenhauer, The World as Will and Representation (1818)',
      'F.H. Bradley, Appearance and Reality (1893)',
    ],
    today: 'Idealism lost ground in the early 20th century, when Bertrand Russell and G.E. Moore turned British philosophy against it, and analytic philosophy grew partly out of that rejection. It never disappeared. Debates about consciousness have revived interest in views on which mind is basic to reality, and Kant\'s claim that the mind structures experience still shapes cognitive science and the study of perception.',
    faq: [
      {
        question: 'What is the difference between idealism and materialism?',
        answer: 'Materialism says the basic stuff of reality is matter and that minds arise from it. Idealism says the reverse: mind, or something like mind, is basic, and the material world depends on it. Many debates in the philosophy of mind still sit somewhere between these two positions.',
      },
      {
        question: 'Did idealists think the world is imaginary?',
        answer: 'No. Berkeley insisted that tables and trees are entirely real; he denied only that they are made of a mindless substance called matter. Kant and Hegel also treated the world as real, while arguing that its structure is bound up with mind or reason.',
      },
      {
        question: 'Is philosophical idealism the same as being idealistic?',
        answer: 'No. In everyday speech an idealist is someone guided by high ideals. In philosophy, idealism is a claim about what reality is made of. The two share a root word but answer different questions.',
      },
    ],
  },
  Existentialism: {
    definition: 'Existentialism is a 19th- and 20th-century philosophy that starts from the individual\'s lived experience and holds that people must create meaning through their own free choices.',
  },
  Phenomenology: {
    definition: 'Phenomenology is a philosophical method, founded by Edmund Husserl in the early 20th century, that describes the structures of conscious experience as it is lived, before any theory about it.',
  },
  'Analytic Philosophy': {
    definition: 'Analytic philosophy is the tradition, dominant in English-speaking universities since the early 20th century, that works on philosophical problems through logic, careful argument and the analysis of language.',
  },
  Marxism: {
    definition: 'Marxism is the body of thought begun by Karl Marx and Friedrich Engels that explains history through economic forces and class struggle and predicts that capitalism will give way to communism.',
  },
  'Classical Liberalism': {
    definition: 'Classical liberalism is the political philosophy that defends individual liberty, the rule of law, private property and free markets, with government limited to protecting rights.',
  },
  Conservatism: {
    definition: 'Conservatism is the political philosophy that values tradition, inherited institutions and gradual change, and distrusts plans to remake society from abstract principles.',
  },
  'Social Contract': {
    definition: 'Social contract theory is the view that political authority is legitimate because it rests on an agreement, real or hypothetical, among the people it governs.',
  },
  Objectivism: {
    definition: 'Objectivism is the philosophy of Ayn Rand, which holds that reality exists independently of the mind, that reason is our only means of knowing it, that rational self-interest is the proper moral purpose of life, and that laissez-faire capitalism is the only just social system.',
  },
  Scholasticism: {
    definition: 'Scholasticism is the method of the medieval European universities, which used logic and structured debate, built largely on Aristotle, to work through questions of philosophy and theology.',
    keyIdeas: [
      {
        title: 'Faith and reason together',
        text: 'Scholastics held that reason and revelation cannot truly conflict, because both come from the same God. Reason alone could establish some truths, such as that God exists. Others, such as the Trinity, could be known only through revelation, though reason could still show they were not contradictory.',
      },
      {
        title: 'The disputed question',
        text: 'Scholastic teaching ran on structured debate. A master posed a question, set out the strongest objections to his own view, gave his answer, and then replied to each objection in turn. Aquinas\'s Summa Theologica is built entirely this way, article after article.',
      },
      {
        title: 'Aristotle as "the Philosopher"',
        text: 'When Aristotle\'s works reached Latin Europe in the 12th and 13th centuries, partly through Arabic translations and the commentaries of Avicenna and Averroes, Scholastics adopted his logic, physics and ethics as the framework for organizing knowledge. Aquinas refers to him simply as "the Philosopher."',
      },
      {
        title: 'The problem of universals',
        text: 'A central debate asked whether general terms such as "human" or "red" name something real. Realists said they do, and that a shared nature exists in many individuals. Nominalists, above all William of Ockham, said only individual things exist and universals are names we give to groups of them.',
      },
    ],
    keyTexts: [
      'Anselm of Canterbury, Proslogion (1078)',
      'Peter Abelard, Sic et Non (c. 1120)',
      'Peter Lombard, Sentences (c. 1150)',
      'Thomas Aquinas, Summa Theologica (1265–1274)',
      'John Duns Scotus, Ordinatio (c. 1300)',
      'William of Ockham, Summa Logicae (c. 1323)',
    ],
    today: 'Scholasticism faded during the Renaissance, when humanists mocked its technical Latin and narrow disputes, but it never vanished. In 1879 Pope Leo XIII urged a return to Thomas Aquinas, and the Neo-Scholastic revival that followed made Thomism central to Catholic philosophy; Thomist philosophers remain active today. Its habit of stating the strongest objections fairly before answering them is still a good model for careful argument.',
    faq: [
      {
        question: 'What is Scholasticism in simple terms?',
        answer: 'Scholasticism was the way philosophy and theology were done in medieval universities: pose a question, weigh the arguments on each side, then give a reasoned answer. Its aim was to show that Christian faith and Greek philosophy, especially Aristotle, fit together.',
      },
      {
        question: 'Why is it called Scholasticism?',
        answer: 'The name comes from the Latin scholasticus, meaning a teacher or scholar, because it was the philosophy of the medieval schools and universities, such as Paris and Oxford.',
      },
      {
        question: 'Who were the main Scholastic philosophers?',
        answer: 'Anselm and Abelard laid the groundwork in the 11th and 12th centuries. Thomas Aquinas, Bonaventure, John Duns Scotus and William of Ockham are the major figures of the 13th and 14th centuries.',
      },
    ],
  },
  Humanism: {
    definition: 'Renaissance humanism is the intellectual movement that recovered classical Greek and Latin learning and placed human life, dignity and achievement at the center of study.',
  },
  Utilitarianism: {
    definition: 'Utilitarianism is the ethical theory that the right action is the one that produces the most overall happiness or well-being.',
  },
  Pragmatism: {
    definition: 'Pragmatism is an American philosophy, founded in the 1870s, which holds that the meaning and truth of an idea lie in its practical consequences.',
    keyIdeas: [
      {
        title: 'The pragmatic maxim',
        text: 'Peirce proposed that the meaning of an idea is the sum of the practical effects we would expect if it were true. If two theories lead us to expect exactly the same experiences, there is no real difference between them, however different they sound.',
      },
      {
        title: 'Truth as what works',
        text: 'William James argued that true ideas are the ones that prove themselves in experience: beliefs we can use, test and rely on. Critics read this as "whatever is useful is true." James meant something closer to this: truth is not a static copy of reality but something ideas earn by holding up over time.',
      },
      {
        title: 'Fallibilism',
        text: 'Pragmatists treat every belief, scientific ones included, as open to revision. Certainty is not on offer, but that is no reason for despair, because inquiry corrects itself when people keep testing their ideas against experience and against one another.',
      },
      {
        title: 'Philosophy for real problems',
        text: 'Dewey wanted philosophy to help with problems people actually face, in schools, communities and politics. He saw democracy as a shared way of life built on inquiry and experiment, and he saw education as practice in that way of life, with students learning by doing.',
      },
    ],
    keyTexts: [
      'Charles Sanders Peirce, "How to Make Our Ideas Clear" (1878)',
      'William James, The Will to Believe (1897)',
      'William James, Pragmatism (1907)',
      'John Dewey, Democracy and Education (1916)',
      'John Dewey, Experience and Nature (1925)',
      'Richard Rorty, Philosophy and the Mirror of Nature (1979)',
    ],
    today: 'Pragmatism shaped American education through Dewey, and its habits of mind run through law, public policy and the philosophy of science. After a quiet spell in the middle of the 20th century, Richard Rorty, Hilary Putnam and others revived it, and it remains an active tradition. Many working scientists hold a broadly pragmatist view of theories as tools that are kept as long as they keep working.',
    faq: [
      {
        question: 'What is pragmatism in simple terms?',
        answer: 'Pragmatism says you understand an idea by asking what difference it would make in practice. A belief is worth holding if it helps us predict, act and solve problems, and it should be revised when it stops doing so.',
      },
      {
        question: 'Who founded pragmatism?',
        answer: 'Charles Sanders Peirce founded it in the 1870s, out of discussions with William James and others in Cambridge, Massachusetts. James made it famous, and John Dewey carried it into education and politics.',
      },
      {
        question: 'Does pragmatism mean truth is whatever is useful?',
        answer: 'Not quite. That is the most common criticism of William James. Pragmatists hold that truth shows itself in how well an idea holds up in experience over time. A comforting belief that keeps failing when tested would not count as true.',
      },
    ],
  },
  Postmodernism: {
    definition: 'Postmodernism is a late 20th-century movement in philosophy and culture marked by skepticism toward grand narratives, universal truths and stable meanings.',
    keyIdeas: [
      {
        title: 'Distrust of grand narratives',
        text: 'Jean-François Lyotard defined the postmodern condition as "incredulity toward metanarratives": distrust of big stories that claim to explain everything, such as inevitable progress, the triumph of reason, or history moving toward a final goal.',
      },
      {
        title: 'Deconstruction',
        text: 'Jacques Derrida showed how texts depend on paired opposites, such as speech and writing or nature and culture, in which one side is treated as primary. Read closely, the favored side turns out to depend on the other, so a text\'s meaning is never as settled as it first appears.',
      },
      {
        title: 'Knowledge and power',
        text: 'Michel Foucault studied how fields such as medicine, psychiatry and criminology define what counts as normal, and how those definitions shape the way institutions treat people. For Foucault, knowledge and power grow together rather than standing apart.',
      },
      {
        title: 'Simulation',
        text: 'Jean Baudrillard argued that in societies saturated by media, images and signs stop pointing to a reality behind them. Copies without originals, which he called simulacra, come to stand in for the real.',
      },
    ],
    keyTexts: [
      'Jacques Derrida, Of Grammatology (1967)',
      'Michel Foucault, Discipline and Punish (1975)',
      'Jean-François Lyotard, The Postmodern Condition (1979)',
      'Richard Rorty, Philosophy and the Mirror of Nature (1979)',
      'Jean Baudrillard, Simulacra and Simulation (1981)',
      'Fredric Jameson, Postmodernism, or, the Cultural Logic of Late Capitalism (1991)',
    ],
    today: 'Postmodern ideas spread well beyond philosophy, into literary theory, architecture, art, anthropology and law, and they remain the subject of sharp debate. Supporters credit them with exposing hidden assumptions and making room for perspectives that grand theories ignored. Critics, including many analytic philosophers and scientists, argue that they undermine objective truth and reasoned argument; the Sokal hoax of 1996 became a famous flashpoint. Many of the thinkers usually called postmodernists rejected the label themselves.',
    faq: [
      {
        question: 'What is postmodernism in simple terms?',
        answer: 'Postmodernism is a broad outlook that doubts any single story can explain everything, and that sees truth, meaning and identity as shaped by language, culture and power.',
      },
      {
        question: 'Who are the main postmodern philosophers?',
        answer: 'Jean-François Lyotard, Jacques Derrida, Michel Foucault and Jean Baudrillard are the names most often grouped together, with Richard Rorty as an American relative. Most of them did not call themselves postmodernists.',
      },
      {
        question: 'How is postmodernism different from modern philosophy?',
        answer: 'Postmodernism defines itself against modernity\'s confidence in reason, science and progress. Where modern philosophers looked for universal foundations for knowledge and morality, postmodern thinkers doubt that any such foundations exist.',
      },
    ],
  },
};
