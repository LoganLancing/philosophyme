import type { Branch } from "./types";

export const branchNotables: Record<string, string[]> = {
  "Metaphysics": ["Aristotle","René Descartes","Baruch Spinoza","Immanuel Kant","Martin Heidegger"],
  "Epistemology": ["Plato","René Descartes","John Locke","David Hume","Immanuel Kant"],
  "Ethics": ["Aristotle","Immanuel Kant","John Stuart Mill","Friedrich Nietzsche","Peter Singer"],
  "Political Philosophy": ["Plato","John Locke","Jean-Jacques Rousseau","Karl Marx","John Rawls"],
  "Logic": ["Aristotle","Gottfried Wilhelm Leibniz","Charles Sanders Peirce","Bertrand Russell","Ludwig Wittgenstein"],
  "Aesthetics": ["Plato","Immanuel Kant","G.W.F. Hegel","Arthur Schopenhauer","Friedrich Nietzsche"]
};

export const branches: Branch[] = [
  { id:"Metaphysics", name:"Metaphysics", icon:"🌌", desc:"The study of the fundamental nature of reality, existence, and being.", question:"What is real? What exists?" },
  { id:"Epistemology", name:"Epistemology", icon:"🔓", desc:"The study of knowledge —” its nature, sources, limits, and justification.", question:"What can we know? How do we know it?" },
  { id:"Ethics", name:"Ethics", icon:"⚖️", desc:"The study of morality, right and wrong, virtue and vice, justice and injustice.", question:"What should we do? What is good?" },
  { id:"Political Philosophy", name:"Political Philosophy", icon:"🏛️", desc:"The study of government, justice, rights, law, liberty, and the state.", question:"How should we organize society?" },
  { id:"Logic", name:"Logic", icon:"🧩", desc:"The study of valid reasoning, argumentation, and the principles of correct inference.", question:"What makes an argument valid?" },
  { id:"Aesthetics", name:"Aesthetics", icon:"🎨", desc:"The study of beauty, art, taste, and the nature of aesthetic experience.", question:"What is beauty? What is art?" }
];

export function getBranch(id: string): Branch | undefined {
  return branches.find(b => b.id === id);
}
