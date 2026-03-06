import type { Era, EraId } from "./types";

export const eras: Era[] = [
  { id:"Ancient", name:"Ancient Philosophy", period:"600 BCE — 500 CE", color:"#8B6914",
    desc:"The birth of Western philosophical thought. From the Pre-Socratics seeking nature's fundamental principles, through Socrates' turn to ethics and self-examination, to the grand systems of Plato and Aristotle, and the practical wisdom of the Stoics and Epicureans.",
    key:"Established many of the major philosophical questions still debated today — the nature of reality, knowledge, virtue, justice, and the good life." },
  { id:"Medieval", name:"Medieval Philosophy", period:"400 — 1500 CE", color:"#6B4226",
    desc:"Philosophy in dialogue with faith. Christian, Islamic, and Jewish thinkers worked to reconcile Greek philosophy with theology, producing rigorous arguments about God, free will, natural law, and the nature of existence.",
    key:"Synthesized Greek philosophy with Abrahamic theology. Developed scholasticism, natural law theory, and preserved classical learning." },
  { id:"Renaissance", name:"Renaissance Philosophy", period:"1400 — 1600 CE", color:"#8B4513",
    desc:"A rebirth of classical learning combined with new humanism. Thinkers challenged medieval authority, emphasizing individual potential, empirical observation, political realism, and honest self-examination.",
    key:"Revived classical learning, established humanism and skepticism, and laid groundwork for modern science and political thought." },
  { id:"Early Modern", name:"Early Modern Philosophy", period:"1600 — 1750 CE", color:"#2C3E6B",
    desc:"The dawn of modern philosophy and the scientific revolution. Descartes rebuilt knowledge from radical doubt; Hobbes grounded politics in materialism; Spinoza unified God and Nature; Leibniz envisioned a rational cosmos of monads; and Locke insisted that all knowledge comes from experience — launching the empiricist tradition that would reshape Western thought.",
    key:"Established the rationalist-empiricist debate, modern epistemology, the mind-body problem, social contract theory, and the philosophical foundations of the scientific revolution." },
  { id:"Enlightenment", name:"Enlightenment Philosophy", period:"1685 — 1815 CE", color:"#2E5A4C",
    desc:"The Age of Reason in full flower. Building on the foundations laid by the early modern rationalists and empiricists, Enlightenment thinkers applied reason systematically to politics, ethics, and society. Kant synthesized rationalism and empiricism in his critical philosophy; social contract theorists reconceived political legitimacy; and reformers championed human rights, religious tolerance, and democratic governance.",
    key:"Produced critical philosophy, political liberalism, the framework for democratic governance, and the philosophical foundations of the American and French Revolutions." },
  { id:"19th Century", name:"19th-Century Philosophy", period:"1800 — 1900 CE", color:"#4A2545",
    desc:"An era of radical challenges to Enlightenment certainties. Hegel's dialectic, Marx's materialism, Nietzsche's revaluation of values, Kierkegaard's existentialism, and pragmatism's practical turn all questioned whether reason, progress, and universal truth were adequate ideals.",
    key:"Developed existentialism, Marxism, pragmatism, utilitarianism, and modern psychology." },
  { id:"Contemporary", name:"Contemporary Philosophy", period:"1900 CE — Present", color:"#1a5276",
    desc:"The most diverse, specialized, and globally interconnected period in philosophy's history. Analytic philosophers pursue precision through logic and language; phenomenologists and existentialists examine lived experience; and feminist, postcolonial, and political philosophers expand the field's horizons in urgent new directions.",
    key:"Analytic philosophy, phenomenology, existentialism, postmodernism, feminism, and applied ethics." }
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
