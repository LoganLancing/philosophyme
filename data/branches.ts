import type { Branch } from "./types";

export const branchNotables: Record<string, string[]> = {
  "Metaphysics": ["Aristotle","Rene Descartes","Baruch Spinoza","Immanuel Kant","Martin Heidegger"],
  "Epistemology": ["Plato","Rene Descartes","John Locke","David Hume","Immanuel Kant"],
  "Ethics": ["Aristotle","Immanuel Kant","John Stuart Mill","Friedrich Nietzsche","Peter Singer"],
  "Political Philosophy": ["Plato","John Locke","Jean-Jacques Rousseau","Karl Marx","John Rawls"],
  "Logic": ["Aristotle","Gottfried Wilhelm Leibniz","Charles Sanders Peirce","Bertrand Russell","Ludwig Wittgenstein"],
  "Aesthetics": ["Plato","Immanuel Kant","G.W.F. Hegel","Arthur Schopenhauer","Friedrich Nietzsche"]
};

export const branches: Branch[] = [
  { id:"Metaphysics", name:"Metaphysics", icon:"◈", desc:"The study of reality, existence, and the basic structure of the world.", question:"What is real? What exists?" },
  { id:"Epistemology", name:"Epistemology", icon:"◉", desc:"The study of knowledge, including its sources, limits, and justification.", question:"What can we know? How do we know it?" },
  { id:"Ethics", name:"Ethics", icon:"⟡", desc:"The study of right and wrong, virtue and vice, justice and duty.", question:"What should we do? What is good?" },
  { id:"Political Philosophy", name:"Political Philosophy", icon:"△", desc:"The study of government, rights, law, justice, liberty, and the state.", question:"How should society be organized?" },
  { id:"Logic", name:"Logic", icon:"◇", desc:"The study of reasoning, argument structure, and correct inference.", question:"What makes an argument valid?" },
  { id:"Aesthetics", name:"Aesthetics", icon:"○", desc:"The study of beauty, art, taste, and aesthetic experience.", question:"What is beauty? What is art?" }
];

export function getBranch(id: string): Branch | undefined {
  return branches.find(b => b.id === id);
}
