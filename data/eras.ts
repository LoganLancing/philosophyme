import type { Era, EraId } from "./types";

export const eras: Era[] = [
  { id:"Ancient", name:"Ancient Philosophy", period:"600 BCE — 500 CE", color:"#8B6914",
    desc:"Ancient philosophy begins with the Pre-Socratics asking what the world is made of. It grows through Socrates, Plato, and Aristotle, then turns toward daily life in schools like Stoicism and Epicureanism.",
    key:"Ancient thinkers raised many of the core questions philosophy still asks about reality, knowledge, virtue, justice, and the good life." },
  { id:"Medieval", name:"Medieval Philosophy", period:"400 — 1500 CE", color:"#6B4226",
    desc:"Medieval philosophy brought Greek thought into conversation with Christianity, Islam, and Judaism. Thinkers in this era asked how faith and reason fit together and wrote serious arguments about God, free will, natural law, and existence.",
    key:"This era joined classical philosophy to religious thought, developed scholasticism, and helped preserve ancient learning." },
  { id:"Renaissance", name:"Renaissance Philosophy", period:"1400 — 1600 CE", color:"#8B4513",
    desc:"Renaissance philosophy returned to classical sources and put new focus on human life, politics, language, and observation. Thinkers challenged old authority and paid closer attention to the world in front of them.",
    key:"The Renaissance revived classical learning, encouraged humanism and skepticism, and helped prepare the way for modern science and politics." },
  { id:"Early Modern", name:"Early Modern Philosophy", period:"1600 — 1750 CE", color:"#2C3E6B",
    desc:"Early modern philosophy grew alongside the scientific revolution. Descartes asked what we can know with certainty. Hobbes, Spinoza, Leibniz, and Locke each built new systems for thinking about knowledge, politics, mind, and nature.",
    key:"This era shaped modern epistemology, the mind-body problem, social contract theory, and the debate between rationalism and empiricism." },
  { id:"Enlightenment", name:"Enlightenment Philosophy", period:"1685 — 1815 CE", color:"#2E5A4C",
    desc:"Enlightenment thinkers applied reason to politics, religion, ethics, and society. They argued about liberty, rights, toleration, government, and the reach of human reason.",
    key:"The Enlightenment helped shape modern liberalism, democratic thought, critical philosophy, and the ideas behind the American and French Revolutions." },
  { id:"19th Century", name:"19th-Century Philosophy", period:"1800 — 1900 CE", color:"#4A2545",
    desc:"Nineteenth-century philosophy pushed back against easy faith in reason and progress. Hegel, Marx, Kierkegaard, Nietzsche, and the pragmatists raised harder questions about history, truth, value, and meaning.",
    key:"This era gave rise to existentialism, Marxism, pragmatism, utilitarianism, and early modern psychology." },
  { id:"Contemporary", name:"Contemporary Philosophy", period:"1900 CE — Present", color:"#1a5276",
    desc:"Contemporary philosophy is wide-ranging and often more specialized. It includes analytic philosophy, phenomenology, existentialism, feminism, postmodernism, applied ethics, and more.",
    key:"This era broadened philosophy into many new areas while pushing older questions about language, knowledge, justice, identity, and experience in new directions." }
];

export function getEra(id: EraId): Era | undefined {
  return eras.find(e => e.id === id);
}

export const eraGradients: Record<EraId, [string, string]> = {
  Ancient: ["#8B6914", "#C49B2C"],
  Medieval: ["#6B4226", "#8B6240"],
  Renaissance: ["#8B4513", "#A0522D"],
  "Early Modern": ["#2C3E6B", "#4C5E8B"],
  Enlightenment: ["#2E5A4C", "#4A7A6C"],
  "19th Century": ["#4A2545", "#6A4565"],
  Contemporary: ["#1a5276", "#3A7296"],
};
