import type { Faq } from './types';

// Extra content for school pages, keyed by school id (see schools.ts).
// Every school has a one-sentence definition that opens its page, followed by key ideas,
// key texts, its influence today and a short FAQ. The page renders each section only when
// it is present, so a new school can start with just a definition.

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
    keyIdeas: [
      {
        title: 'The dichotomy of control',
        text: 'Epictetus opens his Handbook by dividing things into what is up to us (our judgments, intentions, desires and aversions) and what is not (our bodies, property, reputation and position). Peace of mind comes from caring about the first and accepting the second.',
      },
      {
        title: 'Virtue is the only good',
        text: 'For the Stoics, wisdom, justice, courage and moderation are the only true goods. Health, wealth and status are "preferred indifferents": reasonable to choose, but unable to make a life good or bad.',
      },
      {
        title: 'Living according to nature',
        text: 'The Stoics believed the universe is ordered by reason, which they called logos. Humans share in that reason, so living well means living rationally and in tune with the order of the whole, including our place in the human community.',
      },
      {
        title: 'Emotions come from judgments',
        text: 'Destructive passions such as anger, fear and grief follow from false judgments about what is good or bad. Examine the judgment and the passion loses its grip. The Stoics did not aim to feel nothing: they welcomed good feelings, such as joy, that rest on sound judgment.',
      },
    ],
    keyTexts: [
      'Cleanthes, Hymn to Zeus (3rd century BCE)',
      'Seneca, Letters to Lucilius (c. 65 CE)',
      'Epictetus, Discourses, recorded by Arrian (early 2nd century CE)',
      'Epictetus, Enchiridion (Handbook)',
      'Marcus Aurelius, Meditations (c. 170–180 CE)',
      'Diogenes Laertius, Lives of the Eminent Philosophers, Book 7 (3rd century CE)',
    ],
    today: 'Stoicism has had a large popular revival in the 21st century through books, podcasts and events such as Stoic Week. Cognitive behavioral therapy draws openly on Stoic ideas: Albert Ellis and Aaron Beck both credited the Stoic insight that our beliefs about events shape our emotional reactions to them. Scholars point out that modern self-help Stoicism often leaves out parts of the ancient system, especially its physics and its emphasis on duty to the wider community.',
    faq: [
      {
        question: 'What is Stoicism in simple terms?',
        answer: 'Stoicism teaches that a good life comes from good character, not from luck or possessions. Focus on what is in your control, your own choices and judgments, and meet everything else with calm acceptance.',
      },
      {
        question: 'Who were the most famous Stoics?',
        answer: 'Zeno of Citium founded the school in Athens around 300 BCE, teaching in the Stoa Poikile, or Painted Porch, which gave the school its name. Cleanthes and Chrysippus developed it. The best-known Stoics today are the Romans: Seneca, a statesman and writer; Epictetus, a formerly enslaved teacher; and Marcus Aurelius, a Roman emperor.',
      },
      {
        question: 'Does Stoicism mean suppressing your emotions?',
        answer: 'No. The everyday word "stoic" suggests a stiff upper lip, but the ancient Stoics aimed to free themselves from emotions built on false judgments, such as rage or panic, while welcoming emotions grounded in good judgment, such as joy.',
      },
    ],
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
    keyIdeas: [
      {
        title: 'Form and matter',
        text: 'Aristotle rejected Plato\'s separate realm of Forms. Every individual thing is a union of matter, what it is made of, and form, what makes it the kind of thing it is. A bronze statue is bronze given the shape of a statue; a living thing\'s form is its soul.',
      },
      {
        title: 'The four causes',
        text: 'To explain anything fully, Aristotle said, we need four answers: what it is made of (the material cause), what it is (the formal cause), what brought it about (the efficient cause) and what it is for (the final cause, or telos).',
      },
      {
        title: 'Logic',
        text: 'Aristotle created the first formal system of logic, built around the syllogism: all humans are mortal; Socrates is a human; therefore Socrates is mortal. His logic remained the standard in Europe for some two thousand years.',
      },
      {
        title: 'Virtue and flourishing',
        text: 'The goal of human life is eudaimonia, often translated as flourishing. We reach it by developing virtues, stable traits of character that lie in a mean between excess and deficiency, such as courage between cowardice and rashness, guided by practical wisdom.',
      },
    ],
    keyTexts: [
      'Aristotle, Categories',
      'Aristotle, Prior Analytics',
      'Aristotle, Physics',
      'Aristotle, Metaphysics',
      'Aristotle, Nicomachean Ethics',
      'Aristotle, Politics',
      'Thomas Aquinas, Summa Theologica (1265–1274)',
    ],
    today: 'Aristotle\'s ethics returned to the center of moral philosophy with the revival of virtue ethics, sparked in part by G.E.M. Anscombe\'s 1958 essay "Modern Moral Philosophy" and Alasdair MacIntyre\'s After Virtue (1981). Martha Nussbaum drew on Aristotle in developing the capabilities approach to human development. His logic, biology and political thought are still studied, and the idea that a thing\'s nature sets the standard for how it should flourish remains a live position.',
    faq: [
      {
        question: 'What is the main idea of Aristotelianism?',
        answer: 'That we understand the world by studying the things in it, and that each thing, a human being included, has a nature and a purpose. A good human life is one in which our capacities, above all reason, are fully developed.',
      },
      {
        question: 'How is Aristotle different from Plato?',
        answer: 'Plato placed true reality in eternal Forms beyond the physical world. Aristotle held that forms exist only in particular things, so knowledge has to begin with observing the world around us.',
      },
      {
        question: 'How did Aristotle influence the Middle Ages?',
        answer: 'His works were preserved and studied by Islamic philosophers such as Avicenna and Averroes and by the Jewish philosopher Maimonides, then translated into Latin in the 12th and 13th centuries. Thomas Aquinas combined Aristotle\'s philosophy with Christian theology, and Aristotle became the backbone of the medieval university curriculum.',
      },
    ],
  },
  Epicureanism: {
    definition: 'Epicureanism is a school founded by Epicurus around 307 BCE that teaches that the goal of life is pleasure understood as tranquility: freedom from pain in the body and from fear in the mind.',
    keyIdeas: [
      {
        title: 'Pleasure as freedom from pain',
        text: 'Epicurus called pleasure the beginning and end of the happy life, but by pleasure he meant freedom from pain in the body and from disturbance in the mind. In his Letter to Menoeceus he insists he does not mean the pleasures of the profligate.',
      },
      {
        title: 'Three kinds of desire',
        text: 'Epicurus sorted desires into natural and necessary ones (food, shelter, friendship), natural but unnecessary ones (fine food), and empty ones (fame, power, endless wealth). Satisfy the first, enjoy the second in moderation, and let go of the third. Friendship, he said, is the greatest thing wisdom provides for a happy life.',
      },
      {
        title: 'Death is nothing to us',
        text: 'Since death is the end of all sensation, it cannot harm us: when we exist, death is not present, and when death is present, we do not exist. Lucretius added that we do not grieve over the endless time before we were born, so we need not grieve over the time after we die.',
      },
      {
        title: 'Atoms and the void',
        text: 'Following Democritus, Epicurus held that everything is made of atoms moving through empty space. The gods exist but live untroubled lives and do not interfere in the world, so there is nothing to fear from them. He added a small, unpredictable swerve in atomic motion, partly to leave room for free will.',
      },
    ],
    keyTexts: [
      'Epicurus, Letter to Herodotus',
      'Epicurus, Letter to Menoeceus',
      'Epicurus, Principal Doctrines',
      'Lucretius, On the Nature of Things (1st century BCE)',
      'Diogenes Laertius, Lives of the Eminent Philosophers, Book 10 (3rd century CE)',
    ],
    today: 'Lucretius\'s poem was rediscovered in 1417 by the Italian humanist Poggio Bracciolini, and its atomism fed into early modern science through thinkers such as Pierre Gassendi. Thomas Jefferson wrote in an 1819 letter, "I too am an Epicurean." Philosophers still debate Epicurus\'s arguments about death, and his advice to want less and value friends has found a new audience alongside the Stoic revival.',
    faq: [
      {
        question: 'Is Epicureanism the same as hedonism?',
        answer: 'It is a form of hedonism, since it holds that pleasure is the good, but not in the modern sense of indulgence. Epicurus taught that simple food, good friends and a calm mind bring more lasting pleasure than luxury or excess.',
      },
      {
        question: 'What did Epicurus believe about the gods?',
        answer: 'He believed the gods exist but live in perfect tranquility, untouched by human affairs. They do not reward or punish us, so fear of them is unnecessary.',
      },
      {
        question: 'How is Epicureanism different from Stoicism?',
        answer: 'Both aimed at peace of mind. Epicureans saw pleasure as the goal of life, while Stoics held that virtue is the only good. Epicureans advised stepping back from politics into a community of friends; Stoics saw public duty as part of living according to nature.',
      },
    ],
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
    keyIdeas: [
      {
        title: 'Innate ideas',
        text: 'Rationalists held that the mind is born with certain ideas or principles, such as the ideas of God, of substance and of mathematical truth, that experience could never supply. Experience may prompt us to notice them, but it does not create them.',
      },
      {
        title: 'The method of doubt',
        text: 'Descartes resolved to doubt everything that could possibly be doubted. One thing survived: in the very act of doubting, he had to exist. "I think, therefore I am" became the foundation from which he tried to rebuild knowledge.',
      },
      {
        title: 'Clear and distinct ideas',
        text: 'Descartes argued that whatever the intellect perceives clearly and distinctly is true, guaranteed by a God who is no deceiver. Truth is reached by reasoning carefully from such ideas, step by step, as in geometry.',
      },
      {
        title: 'Reality as a rational system',
        text: 'Spinoza argued that there is only one substance, which he called God or Nature, and set out his Ethics in geometrical form, with definitions, axioms and proofs. Leibniz held that the world is made of simple substances called monads and that nothing happens without a sufficient reason.',
      },
    ],
    keyTexts: [
      'René Descartes, Discourse on the Method (1637)',
      'René Descartes, Meditations on First Philosophy (1641)',
      'Nicolas Malebranche, The Search After Truth (1674–75)',
      'Baruch Spinoza, Ethics (1677)',
      'Gottfried Wilhelm Leibniz, New Essays on Human Understanding (written 1704, published 1765)',
      'Gottfried Wilhelm Leibniz, Monadology (1714)',
    ],
    today: 'Kant tried to settle the contest between rationalism and empiricism in the Critique of Pure Reason (1781), arguing that knowledge needs both experience and concepts the mind supplies. The rationalists\' question lives on: Noam Chomsky\'s argument that children are born with a capacity for language is often described as a modern rationalist position, and philosophers still debate whether, and how, some truths can be known a priori, independent of experience.',
    faq: [
      {
        question: 'What is rationalism in simple terms?',
        answer: 'Rationalism is the view that reason, not the senses, is our most reliable path to knowledge. Rationalists point to mathematics: we can prove that the angles of a triangle add up to two right angles by reasoning alone, without measuring a single triangle.',
      },
      {
        question: 'Who were the continental rationalists?',
        answer: 'René Descartes, Baruch Spinoza and Gottfried Wilhelm Leibniz, writing in the 17th and early 18th centuries. They are called continental because they worked in mainland Europe, in contrast to the British empiricists Locke, Berkeley and Hume.',
      },
      {
        question: 'Is philosophical rationalism the same as being rational?',
        answer: 'No. Everyone who values reasoning is rational in the everyday sense. Rationalism is a specific claim about where knowledge comes from: that reason can reach important truths independently of experience. Empiricists value reason just as much but deny that claim.',
      },
    ],
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
    keyIdeas: [
      {
        title: 'Existence precedes essence',
        text: 'Sartre\'s slogan means that human beings have no fixed nature or purpose given in advance. We first exist, and then define ourselves through what we choose and do.',
      },
      {
        title: 'Freedom, anguish and bad faith',
        text: 'For Sartre we are "condemned to be free": even refusing to choose is a choice, and we are responsible for who we become. That freedom brings anguish. Bad faith is lying to ourselves about it, for example by claiming we had no choice or by hiding behind a social role.',
      },
      {
        title: 'The individual and the leap of faith',
        text: 'Kierkegaard, often called the first existentialist, argued that the most important truths are lived, not proven. Faith, in his view, is a passionate personal commitment, a leap that reason alone cannot make, and each person must make it for themselves.',
      },
      {
        title: 'Freedom in a situation',
        text: 'Simone de Beauvoir argued that freedom is always exercised in a situation shaped by other people, history and society. In The Second Sex she wrote, "One is not born, but rather becomes, a woman," arguing that womanhood had been defined by others rather than chosen.',
      },
    ],
    keyTexts: [
      'Søren Kierkegaard, Fear and Trembling (1843)',
      'Søren Kierkegaard, Concluding Unscientific Postscript (1846)',
      'Friedrich Nietzsche, Thus Spoke Zarathustra (1883–85)',
      'Martin Heidegger, Being and Time (1927)',
      'Jean-Paul Sartre, Being and Nothingness (1943)',
      'Jean-Paul Sartre, Existentialism Is a Humanism (1946)',
      'Simone de Beauvoir, The Second Sex (1949)',
    ],
    today: 'Existentialism peaked in postwar France, when Sartre and Beauvoir were public figures, and it shaped novels, plays, film and psychotherapy, including the school known as existential therapy. As an academic movement it gave way to structuralism and later French thought, but its questions about freedom, meaning and authenticity remain among the most widely read in philosophy. Its influence also runs through feminist thought by way of Beauvoir and anticolonial thought by way of Frantz Fanon.',
    faq: [
      {
        question: 'What is existentialism in simple terms?',
        answer: 'A philosophy that starts from the individual person facing real choices. It holds that life has no meaning handed to us in advance, so we create meaning through how we choose to live, and we are responsible for those choices.',
      },
      {
        question: 'Who founded existentialism?',
        answer: 'Søren Kierkegaard, writing in the 1840s, is usually called its father, with Nietzsche as another forerunner. The word itself spread in the 1940s, and Sartre was the first major philosopher to embrace it. Heidegger and Albert Camus, often grouped with the existentialists, both rejected the label.',
      },
      {
        question: 'Is existentialism pessimistic?',
        answer: 'Critics often said so, because it dwells on anxiety, death and the absence of built-in meaning. Sartre answered in Existentialism Is a Humanism that it is a philosophy of action and hope, since it holds that people are free to make themselves.',
      },
    ],
  },
  Phenomenology: {
    definition: 'Phenomenology is a philosophical method, founded by Edmund Husserl in the early 20th century, that describes the structures of conscious experience as it is lived, before any theory about it.',
    keyIdeas: [
      {
        title: 'To the things themselves',
        text: 'Husserl called on philosophers to set aside theories and assumptions and describe experience exactly as it presents itself. A careful description of how things appear, he believed, could give philosophy a rigorous foundation.',
      },
      {
        title: 'Intentionality',
        text: 'Consciousness is always consciousness of something. Every act of perceiving, remembering, imagining or wanting is directed at an object, and phenomenology studies the structures of that directedness. Husserl took the idea from his teacher Franz Brentano.',
      },
      {
        title: 'Bracketing',
        text: 'Husserl asked philosophers to suspend, or bracket, the everyday assumption that the world exists independently of us. The point is not to deny the world but to attend to how it appears in experience. He borrowed the Greek skeptics\' word for this suspension, epoché.',
      },
      {
        title: 'Being-in-the-world and the lived body',
        text: 'Heidegger argued that we are not detached minds looking at objects but beings already caught up in a world of tasks, tools and other people. Merleau-Ponty stressed that perception happens through the living body, so we know the world first through movement and touch, not abstract thought.',
      },
    ],
    keyTexts: [
      'Edmund Husserl, Logical Investigations (1900–01)',
      'Edmund Husserl, Ideas I (1913)',
      'Martin Heidegger, Being and Time (1927)',
      'Edmund Husserl, Cartesian Meditations (1931)',
      'Jean-Paul Sartre, Being and Nothingness (1943)',
      'Maurice Merleau-Ponty, Phenomenology of Perception (1945)',
      'Emmanuel Levinas, Totality and Infinity (1961)',
    ],
    today: 'Phenomenology shaped existentialism, hermeneutics and deconstruction, and it remains one of the main traditions of continental philosophy. It has practical uses too: researchers in nursing, psychology and education use phenomenological methods to study lived experience, and cognitive scientists working on embodied cognition draw on Merleau-Ponty.',
    faq: [
      {
        question: 'What is phenomenology in simple terms?',
        answer: 'The careful description of experience from the inside: what it is like to see, remember, feel or act, before we explain it with science or theory.',
      },
      {
        question: 'What is the difference between phenomenology and existentialism?',
        answer: 'Phenomenology is a method for describing experience. Existentialism is a set of views about human freedom, meaning and choice. Many existentialists, including Sartre and Beauvoir, used the phenomenological method to reach their conclusions.',
      },
      {
        question: 'Who founded phenomenology?',
        answer: 'Edmund Husserl, a German philosopher trained in mathematics, in the first years of the 20th century. His student Martin Heidegger took it in a new direction, and French thinkers such as Sartre, Merleau-Ponty and Levinas developed it further.',
      },
    ],
  },
  'Analytic Philosophy': {
    definition: 'Analytic philosophy is the tradition, dominant in English-speaking universities since the early 20th century, that works on philosophical problems through logic, careful argument and the analysis of language.',
    keyIdeas: [
      {
        title: 'Analysis',
        text: 'Philosophical problems are tackled by breaking concepts and claims into their parts and examining each closely. Bertrand Russell\'s theory of descriptions (1905) became a model, showing how a sentence such as "The present King of France is bald" can be meaningful though no such king exists.',
      },
      {
        title: 'The turn to language',
        text: 'Many analytic philosophers held that philosophical puzzles arise from misunderstandings of how language works. The early Wittgenstein looked for the logical structure behind meaningful language; the later Wittgenstein argued that meaning lies in how words are used in ordinary life.',
      },
      {
        title: 'Logic as a tool',
        text: 'Building on Gottlob Frege\'s new logic, analytic philosophers made formal logic a central method, using it to clarify arguments and to study meaning, truth and reasoning.',
      },
      {
        title: 'Common sense and science',
        text: 'G.E. Moore defended common-sense beliefs, such as that he had two hands, against skeptical and idealist arguments. Quine argued that philosophy is continuous with science rather than a separate source of knowledge, and Karl Popper made falsifiability the test of a scientific theory.',
      },
    ],
    keyTexts: [
      'Gottlob Frege, "On Sense and Reference" (1892)',
      'Bertrand Russell, "On Denoting" (1905)',
      'Ludwig Wittgenstein, Tractatus Logico-Philosophicus (1921)',
      'Karl Popper, The Logic of Scientific Discovery (1934)',
      'W.V.O. Quine, "Two Dogmas of Empiricism" (1951)',
      'Ludwig Wittgenstein, Philosophical Investigations (1953)',
      'Saul Kripke, Naming and Necessity (1980)',
    ],
    today: 'Analytic philosophy is the dominant style in universities in the United States, Britain, Australia and Scandinavia, and it has spread widely elsewhere. Its scope has grown far beyond language and logic to ethics, political philosophy, the mind, metaphysics and applied fields such as bioethics. The old divide with continental philosophy has softened, though differences of style and method remain.',
    faq: [
      {
        question: 'What is analytic philosophy in simple terms?',
        answer: 'A style of philosophy that prizes clarity, precise argument and logic. It usually works on one well-defined problem at a time and tries to state every claim so that it can be tested and criticized.',
      },
      {
        question: 'What is the difference between analytic and continental philosophy?',
        answer: 'Analytic philosophy grew mainly in Britain, Austria and the United States, with an emphasis on logic, language and science. Continental philosophy grew mainly in Germany and France, through phenomenology, existentialism and critical theory, with more attention to history, culture and lived experience. Many philosophers today draw on both.',
      },
      {
        question: 'Who founded analytic philosophy?',
        answer: 'Gottlob Frege, Bertrand Russell and G.E. Moore are usually named as its founders, around the turn of the 20th century, with Ludwig Wittgenstein close behind.',
      },
    ],
  },
  Marxism: {
    definition: 'Marxism is the body of thought begun by Karl Marx and Friedrich Engels that explains history through economic forces and class struggle and predicts that capitalism will give way to communism.',
    keyIdeas: [
      {
        title: 'Historical materialism',
        text: 'Marx held that the way a society produces what it needs, its mode of production, shapes its laws, politics, religion and ideas. History moves through stages, such as ancient slave society, feudalism and capitalism, as the forces of production develop.',
      },
      {
        title: 'Class struggle',
        text: '"The history of all hitherto existing society is the history of class struggles," the Communist Manifesto declares. Under capitalism the main classes are the bourgeoisie, who own the means of production, and the proletariat, who must sell their labor to live.',
      },
      {
        title: 'Exploitation and alienation',
        text: 'Marx argued that workers produce more value than they are paid in wages, and that this surplus value is the source of profit. He also described workers under capitalism as alienated: cut off from what they make, from the work itself, from one another and from their own human potential.',
      },
      {
        title: 'Revolution and communism',
        text: 'Marx predicted that capitalism\'s crises and conflicts would lead workers to overthrow it, bringing a classless society in which the means of production are held in common. He said relatively little about how such a society would actually work.',
      },
    ],
    keyTexts: [
      'Karl Marx, Economic and Philosophic Manuscripts of 1844 (published 1932)',
      'Karl Marx and Friedrich Engels, The German Ideology (written 1845–46)',
      'Karl Marx and Friedrich Engels, The Communist Manifesto (1848)',
      'Karl Marx, Capital, Volume I (1867)',
      'Friedrich Engels, Socialism: Utopian and Scientific (1880)',
      'Antonio Gramsci, Prison Notebooks (written 1929–35)',
      'Herbert Marcuse, One-Dimensional Man (1964)',
    ],
    today: 'Marxism inspired mass political movements and the governments of the Soviet Union, China and other states, whose records, including famines, political repression and the deaths of millions, weigh heavily in how it is judged. Defenders often argue that those states departed from Marx\'s own ideas; critics, from Austrian-school economists to the philosopher Karl Popper, argue that its predictions failed and its economic theory is mistaken. In universities, Marxist ideas still influence sociology, history, literary theory and critical theory, and debates over inequality keep its questions about capitalism alive.',
    faq: [
      {
        question: 'What is Marxism in simple terms?',
        answer: 'A theory that explains history and society through economics and the conflict between classes. Marx argued that capitalism divides society into owners and workers, that this conflict would eventually bring capitalism down, and that a classless communist society would follow.',
      },
      {
        question: 'What is the difference between Marxism, socialism and communism?',
        answer: 'Socialism is a broad family of ideas in which the means of production are owned or controlled socially rather than privately, and it includes many non-Marxist forms. Marxism is Marx\'s particular theory of history and capitalism. Communism, in Marx\'s sense, is the classless, stateless society he expected to follow capitalism; the word also names the parties and states that claimed his legacy.',
      },
      {
        question: 'Was Marx a philosopher or an economist?',
        answer: 'Both, as well as a historian, journalist and political activist. He trained in philosophy, wrote his doctoral dissertation on Democritus and Epicurus, and began as a critic of Hegel before turning to political economy in Capital.',
      },
    ],
  },
  'Classical Liberalism': {
    definition: 'Classical liberalism is the political philosophy that defends individual liberty, the rule of law, private property and free markets, with government limited to protecting rights.',
    keyIdeas: [
      {
        title: 'Natural rights',
        text: 'John Locke argued that people have rights to life, liberty and property that exist before any government. The Declaration of Independence echoes this with its "unalienable Rights" to "Life, Liberty and the pursuit of Happiness."',
      },
      {
        title: 'Consent and limited power',
        text: 'Governments are legitimate only with the consent of the governed, and their job is to protect rights. To keep power from being abused, Montesquieu and James Madison argued for dividing it among separate branches that check one another.',
      },
      {
        title: 'Free markets',
        text: 'Adam Smith argued in The Wealth of Nations that when people are free to trade, the pursuit of their own interest, disciplined by competition, tends to promote the wealth of the whole society, as if led by an "invisible hand." In the 20th century, Friedrich Hayek argued that prices carry knowledge that no central planner could ever gather.',
      },
      {
        title: 'Freedom of thought and expression',
        text: 'John Stuart Mill\'s harm principle holds that society may restrict a person\'s liberty only to prevent harm to others. Mill defended free speech on the grounds that silencing an opinion robs everyone of the chance to test it against the truth.',
      },
    ],
    keyTexts: [
      'John Locke, Second Treatise of Government (1689)',
      'Montesquieu, The Spirit of the Laws (1748)',
      'Adam Smith, The Wealth of Nations (1776)',
      'Alexander Hamilton, James Madison and John Jay, The Federalist Papers (1787–88)',
      'John Stuart Mill, On Liberty (1859)',
      'Friedrich Hayek, The Road to Serfdom (1944)',
      'Robert Nozick, Anarchy, State, and Utopia (1974)',
    ],
    today: 'Classical liberal principles shaped the American founding and the constitutions of most modern democracies: rights written into law, elected and limited government, and protected freedoms of speech and religion. In the 20th century, "liberal" came to mean something different in the United States, so thinkers such as Hayek and Ludwig von Mises are now usually described as classical liberals or libertarians. How far governments should regulate markets and provide welfare remains the main dividing line between classical liberals, modern liberals and socialists.',
    faq: [
      {
        question: 'What is classical liberalism in simple terms?',
        answer: 'A political philosophy that puts individual freedom first. Government should protect people\'s rights to life, liberty and property, rule through clear and equal laws, and otherwise leave people free to live, speak, worship and trade as they choose.',
      },
      {
        question: 'How is classical liberalism different from modern liberalism?',
        answer: 'Both value individual rights. Classical liberals want government limited mainly to protecting rights and enforcing contracts. Modern liberals, especially in the United States, support a larger role for government in regulating the economy and providing social services.',
      },
      {
        question: 'Who were the main classical liberal thinkers?',
        answer: 'John Locke, Montesquieu and Adam Smith in the 17th and 18th centuries; American founders such as Thomas Jefferson and James Madison; John Stuart Mill in the 19th century; and Friedrich Hayek, Ludwig von Mises and Robert Nozick in the 20th.',
      },
    ],
  },
  Conservatism: {
    definition: 'Conservatism is the political philosophy that values tradition, inherited institutions and gradual change, and distrusts plans to remake society from abstract principles.',
    keyIdeas: [
      {
        title: 'Inherited wisdom',
        text: 'Edmund Burke argued that institutions and customs that have lasted for generations carry practical knowledge no single person could work out alone. He described society as a partnership "between those who are living, those who are dead, and those who are to be born."',
      },
      {
        title: 'Reform, not revolution',
        text: 'Conservatives do not oppose all change. Burke wrote that "a state without the means of some change is without the means of its conservation." But they favor reform that repairs what exists over plans to rebuild society from scratch, as the French revolutionaries attempted.',
      },
      {
        title: 'Wariness of abstract plans',
        text: 'Michael Oakeshott criticized "rationalism in politics": the belief that society can be run from a blueprint of abstract principles. He argued that political skill, like cooking or carpentry, depends on practical knowledge learned through experience rather than from a book.',
      },
      {
        title: 'Civil society',
        text: 'Alexis de Tocqueville noticed that Americans formed associations for every purpose, and he saw these local institutions as a check on both central power and isolated individualism. Conservatives generally see families, churches, towns and voluntary groups, Burke\'s "little platoons," as the ground of social life.',
      },
    ],
    keyTexts: [
      'Edmund Burke, Reflections on the Revolution in France (1790)',
      'Alexis de Tocqueville, Democracy in America (1835–40)',
      'Michael Oakeshott, "Rationalism in Politics" (1947)',
      'Russell Kirk, The Conservative Mind (1953)',
      'Michael Oakeshott, "On Being Conservative" (1956)',
      'Roger Scruton, The Meaning of Conservatism (1980)',
    ],
    today: 'Conservatism is one of the major political traditions in Western democracies, though conservative parties differ widely, and the label covers traditionalists, free-market conservatives and nationalists who often disagree with one another. Roger Scruton carried the Burkean tradition into the 21st century as a philosopher. Critics argue that conservatism can protect injustice simply because it is long established; conservatives reply that they defend what has proven to work, not everything that happens to exist.',
    faq: [
      {
        question: 'What is conservatism in simple terms?',
        answer: 'A political philosophy that values tradition, stable institutions and careful, gradual change. Conservatives believe the habits and institutions a society has built over time hold wisdom that should not be thrown away for untested theories.',
      },
      {
        question: 'Who is the father of modern conservatism?',
        answer: 'Edmund Burke, the Irish-born British statesman, is usually given that title, mainly for Reflections on the Revolution in France (1790), in which he predicted, years before the Terror, that the revolution would end in violence and military rule.',
      },
      {
        question: 'How is conservatism different from classical liberalism?',
        answer: 'Both defend the rule of law and limited government, and in practice they are often allies. Classical liberals start from individual rights and freedom. Conservatives start from tradition, community and inherited institutions, and are warier of building politics on abstract principles, including principles of liberty.',
      },
    ],
  },
  'Social Contract': {
    definition: 'Social contract theory is the view that political authority is legitimate because it rests on an agreement, real or hypothetical, among the people it governs.',
    keyIdeas: [
      {
        title: 'The state of nature',
        text: 'Social contract theorists ask what life would be like without government. Thomas Hobbes thought it would be a war of all against all, in which life is "solitary, poor, nasty, brutish, and short." John Locke thought people would still have natural rights and a natural law, but no impartial judge to enforce them.',
      },
      {
        title: 'Consent',
        text: 'Government is legitimate because people agree to it, openly or tacitly, in order to escape the problems of the state of nature. Authority comes from the governed, not from divine right or force.',
      },
      {
        title: 'Different contracts, different governments',
        text: 'Hobbes concluded that people should hand nearly all power to a sovereign strong enough to keep the peace. Locke argued that government holds power only in trust and may be resisted if it violates people\'s rights. Rousseau argued that a legitimate state follows the general will of its citizens as a whole.',
      },
      {
        title: 'The veil of ignorance',
        text: 'John Rawls revived the tradition in 1971. He asked what principles of justice people would choose if they did not know their place in society, their talents or their social standing, and argued they would choose equal basic liberties and allow inequalities only when they benefit the least advantaged.',
      },
    ],
    keyTexts: [
      'Thomas Hobbes, Leviathan (1651)',
      'John Locke, Second Treatise of Government (1689)',
      'Jean-Jacques Rousseau, The Social Contract (1762)',
      'John Rawls, A Theory of Justice (1971)',
      'David Gauthier, Morals by Agreement (1986)',
      'T.M. Scanlon, What We Owe to Each Other (1998)',
    ],
    today: 'Social contract thinking runs through modern constitutions, which often present themselves as the act of "We the People." In philosophy, Rawls made the social contract central again to political theory, and contractualists such as T.M. Scanlon apply the idea to morality itself. Critics including Carole Pateman, in The Sexual Contract (1988), and Charles Mills, in The Racial Contract (1997), argue that the classic theories quietly left women and non-white people out of the agreement.',
    faq: [
      {
        question: 'What is social contract theory in simple terms?',
        answer: 'The idea that people agree, in fact or in principle, to give up some freedom and obey a government in exchange for protection and order. That agreement is what makes the government\'s authority legitimate.',
      },
      {
        question: 'Did anyone actually sign a social contract?',
        answer: 'Generally no, and most of the theorists knew it. The contract is usually a thought experiment about what free and reasonable people would agree to, used to test whether a government deserves obedience. Locke appealed to tacit consent, such as living under a government and accepting its protection.',
      },
      {
        question: 'What is the difference between Hobbes and Locke?',
        answer: 'Hobbes thought life without government would be constant war, so people should accept a powerful sovereign. Locke thought people have natural rights even without government, so government exists to protect those rights and can be replaced if it fails to.',
      },
    ],
  },
  Objectivism: {
    definition: 'Objectivism is the philosophy of Ayn Rand, which holds that reality exists independently of the mind, that reason is our only means of knowing it, that rational self-interest is the proper moral purpose of life, and that laissez-faire capitalism is the only just social system.',
    keyIdeas: [
      {
        title: 'Objective reality',
        text: '"Existence exists," Rand wrote. Reality is what it is regardless of anyone\'s wishes or feelings, and the task of the mind is to perceive it, not to create it.',
      },
      {
        title: 'Reason as the only means of knowledge',
        text: 'Rand rejected faith, revelation and feeling as sources of knowledge. Knowledge comes from the senses, organized by concepts that reason forms and checks against reality.',
      },
      {
        title: 'Rational self-interest',
        text: 'In The Virtue of Selfishness, Rand argued that each person\'s own life and happiness is their highest moral purpose, and that people should neither sacrifice themselves to others nor sacrifice others to themselves. She rejected altruism, understood as a duty to live for others.',
      },
      {
        title: 'Laissez-faire capitalism',
        text: 'Rand argued that the only moral political system bans the initiation of physical force and limits government to protecting individual rights through the police, the armed forces and the courts. She saw full laissez-faire capitalism as the system that follows from those rights.',
      },
    ],
    keyTexts: [
      'Ayn Rand, The Fountainhead (1943)',
      'Ayn Rand, Atlas Shrugged (1957)',
      'Ayn Rand, For the New Intellectual (1961)',
      'Ayn Rand, The Virtue of Selfishness (1964)',
      'Ayn Rand, Capitalism: The Unknown Ideal (1966)',
      'Ayn Rand, Introduction to Objectivist Epistemology (1979)',
      'Leonard Peikoff, Objectivism: The Philosophy of Ayn Rand (1991)',
    ],
    today: 'Rand\'s novels have sold millions of copies and are still widely read, and her ideas influenced the American libertarian movement and many people in business and politics. The Ayn Rand Institute and the Atlas Society continue to promote Objectivism. Most academic philosophers have given her work little attention, and critics such as Robert Nozick challenged her arguments for rational egoism, though a small group of scholars study and defend it.',
    faq: [
      {
        question: 'What is Objectivism in simple terms?',
        answer: 'Ayn Rand\'s philosophy, which holds that reality is objective, that reason is how we know it, that each person should pursue their own rational self-interest, and that laissez-faire capitalism is the only just social system.',
      },
      {
        question: 'What is the difference between Objectivism and libertarianism?',
        answer: 'Both support limited government and free markets, and Rand influenced many libertarians. But Objectivism is a complete philosophy, with views on reality, knowledge and ethics, while libertarianism is a political position people reach from many starting points. Rand herself was sharply critical of the libertarian movement.',
      },
      {
        question: 'Did Ayn Rand write philosophy or fiction?',
        answer: 'Both. Her novels The Fountainhead and Atlas Shrugged dramatize her ideas, and she set out the philosophy directly in essays and nonfiction books such as The Virtue of Selfishness.',
      },
    ],
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
    keyIdeas: [
      {
        title: 'Back to the sources',
        text: 'Humanists called for a return ad fontes, to the original texts of Greek and Roman antiquity. They searched monastery libraries for lost manuscripts, learned Greek, and read classical authors in their own words rather than through medieval commentaries.',
      },
      {
        title: 'The studia humanitatis',
        text: 'Humanist education centered on grammar, rhetoric, poetry, history and moral philosophy, the subjects that became known as the humanities. Its aim was to form people who could think, speak and act well in public life.',
      },
      {
        title: 'Human dignity',
        text: 'Pico della Mirandola\'s Oration on the Dignity of Man (1486) pictured human beings as having no fixed place in creation, free to shape what they become. Humanists celebrated human ability while, for the most part, remaining Christian.',
      },
      {
        title: 'Critical scholarship',
        text: 'Lorenzo Valla used close study of Latin to show in 1440 that the Donation of Constantine, a document said to grant the popes authority over the western Roman Empire, was a forgery. Erasmus published an edition of the Greek New Testament in 1516 that set a new standard for textual scholarship.',
      },
    ],
    keyTexts: [
      'Petrarch, Letters on Familiar Matters (14th century)',
      'Lorenzo Valla, On the Donation of Constantine (1440)',
      'Pico della Mirandola, Oration on the Dignity of Man (1486)',
      'Erasmus, The Praise of Folly (1511)',
      'Thomas More, Utopia (1516)',
      'Michel de Montaigne, Essays (1580)',
    ],
    today: 'Renaissance humanism laid the foundations of the humanities as academic subjects and of modern methods for studying historical texts. It also fed the Reformation: Luther used Erasmus\'s Greek New Testament for his German translation. Today "humanism" more often names a secular outlook that grounds ethics in human reason and experience without religion, a later development that differs from the largely Christian humanism of the Renaissance.',
    faq: [
      {
        question: 'What is Renaissance humanism in simple terms?',
        answer: 'A movement of scholars and writers, beginning in 14th-century Italy, who revived the study of ancient Greek and Roman texts and put human beings, their abilities and their moral and civic life at the center of learning.',
      },
      {
        question: 'Was Renaissance humanism against religion?',
        answer: 'No. Most humanists, including Erasmus and Thomas More, were devout Christians. They wanted to renew faith by returning to early sources, such as the Bible in its original languages and the Church Fathers, and they criticized what they saw as the dry methods of Scholasticism.',
      },
      {
        question: 'Who is the father of humanism?',
        answer: 'Petrarch, the 14th-century Italian poet and scholar, is often given that title for his passion for recovering classical texts and his belief that ancient learning could renew his own age.',
      },
    ],
  },
  Utilitarianism: {
    definition: 'Utilitarianism is the ethical theory that the right action is the one that produces the most overall happiness or well-being.',
    keyIdeas: [
      {
        title: 'The principle of utility',
        text: 'Jeremy Bentham held that the right action is the one that produces the greatest happiness for the greatest number. Only consequences matter morally, and each person\'s happiness counts equally.',
      },
      {
        title: 'Pleasure and pain',
        text: '"Nature has placed mankind under the governance of two sovereign masters, pain and pleasure," Bentham wrote. He proposed weighing pleasures and pains by their intensity, duration, certainty and other features, a method later called the felicific calculus.',
      },
      {
        title: 'Higher and lower pleasures',
        text: 'John Stuart Mill argued that some pleasures, such as those of the intellect, are better in kind and not just in amount: "It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied."',
      },
      {
        title: 'Impartiality',
        text: 'Utilitarians insist that everyone\'s well-being counts the same, whoever and wherever they are. Bentham extended concern to animals, writing, "The question is not, Can they reason? nor, Can they talk? but, Can they suffer?" Peter Singer has applied the same reasoning to global poverty and animal welfare.',
      },
    ],
    keyTexts: [
      'Jeremy Bentham, An Introduction to the Principles of Morals and Legislation (1789)',
      'John Stuart Mill, Utilitarianism (1861)',
      'Henry Sidgwick, The Methods of Ethics (1874)',
      'Peter Singer, "Famine, Affluence, and Morality" (1972)',
      'Peter Singer, Animal Liberation (1975)',
      'R.M. Hare, Moral Thinking (1981)',
    ],
    today: 'Utilitarian reasoning runs through public life, from cost-benefit analysis in government to debates about rationing health care, and it is one of the three main approaches to ethics taught today, alongside Kantian ethics and virtue ethics. The effective altruism movement grew partly out of Peter Singer\'s arguments. Critics object that utilitarianism can justify sacrificing individuals for the greater good and leaves too little room for rights, justice and personal commitments; utilitarians have answered with rule-based and other refined versions.',
    faq: [
      {
        question: 'What is utilitarianism in simple terms?',
        answer: 'The view that we should act to produce the most good, usually understood as the most happiness or well-being, for everyone affected, with each person\'s interests counting equally.',
      },
      {
        question: 'What is the difference between act and rule utilitarianism?',
        answer: 'Act utilitarianism judges each action by its own consequences. Rule utilitarianism judges actions by whether they follow rules, such as keeping promises, that would produce the best consequences if everyone followed them.',
      },
      {
        question: 'What is the main objection to utilitarianism?',
        answer: 'That it seems to permit terrible acts if they produce more total happiness, such as punishing an innocent person to stop a riot. Critics say this shows morality must include rights and justice that cannot be traded away; utilitarians reply that such acts rarely produce the best results in practice.',
      },
    ],
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
