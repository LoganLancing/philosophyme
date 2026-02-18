// =============================================================
// PhilosophyMe — Type Definitions
// =============================================================

export interface Argument {
    title: string;
    desc: string;
    importance: string;
    expanded?: string;
}

export interface Philosopher {
    id: string;
    name: string;
    birth: number;
    death: number;
    era: EraId;
    branch: string[];
    school: string[];
    thesis: string;
    bio: string;
    works: string[];
    arguments: Argument[];
    influence: string;
    initials: string;
    accent: string | null;
}

export type EraId = 'Ancient' | 'Medieval' | 'Renaissance' | 'Enlightenment' | 'Modern' | 'Contemporary';

export interface Era {
    id: EraId;
    name: string;
    period: string;
    color: string;
    desc: string;
    key: string;
}

export interface Branch {
    id: string;
    name: string;
    icon: string;
    desc: string;
    question: string;
}

export interface School {
    id: string;
    name: string;
    brief: string;
    synopsis: string;
    origin: string;
    thinkers: string[];
}

export interface EraEssay {
    title: string;
    subtitle: string;
    body: string;
}

export interface BranchEssaySection {
    heading: string;
    text: string;
}

export interface BranchEssay {
    title: string;
    sections: BranchEssaySection[];
}

export interface DailyQuote {
    text: string;
    author: string;
}

export interface GuideProduct {
    id: string;
    title: string;
    subtitle: string;
    url: string;
    pages: number;
    price: string;
    era?: EraId;
    description: string;
}

export interface EraGradient {
    colors: [string, string];
}
