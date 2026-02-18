import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        crimson: ['var(--font-crimson)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        pm: {
          bg: '#0d0b08',
          gold: '#c0a172',
          text: '#b0a090',
          heading: '#f4f4f4',
          dim: '#78909c',
          card: 'rgba(22,18,14,0.8)',
          'card-border': 'rgba(192,161,114,0.1)',
        },
        era: {
          ancient: '#8B6914',
          medieval: '#6B4226',
          renaissance: '#8B4513',
          enlightenment: '#2E5A4C',
          modern: '#4A2545',
          contemporary: '#1a5276',
        },
      },
    },
  },
  plugins: [],
};

export default config;
