import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0EB',
        'cream-dark': '#EDE8E2',
        ink: '#1A1A1A',
        muted: '#888888',
        subtle: '#D5CFC8',
        accent: '#C0654A',
        'accent-light': '#E8A090',
        white: '#FFFFFF',
        rust: '#C4704E',
        sage: '#7A9E7E',
        charcoal: '#282828',
        'hero-blue': '#4E8098',
        'hero-yellow': '#CFDE3B',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.03em',
        widest: '0.2em',
      },
      keyframes: {
        first: {
          '0%': { transform: 'rotate(0deg) translate(-5%, -5%)' },
          '50%': { transform: 'rotate(180deg) translate(-5%, -5%)' },
          '100%': { transform: 'rotate(360deg) translate(-5%, -5%)' },
        },
        second: {
          '0%': { transform: 'rotate(0deg) translate(-15%, 5%)' },
          '50%': { transform: 'rotate(-180deg) translate(-15%, 5%)' },
          '100%': { transform: 'rotate(-360deg) translate(-15%, 5%)' },
        },
        third: {
          '0%': { transform: 'rotate(0deg) translate(5%, -10%)' },
          '50%': { transform: 'rotate(180deg) translate(5%, -10%)' },
          '100%': { transform: 'rotate(360deg) translate(5%, -10%)' },
        },
        fourth: {
          '0%': { transform: 'rotate(0deg) translate(-5%, 15%)' },
          '50%': { transform: 'rotate(-180deg) translate(-5%, 15%)' },
          '100%': { transform: 'rotate(-360deg) translate(-5%, 15%)' },
        },
        fifth: {
          '0%': { transform: 'rotate(0deg) translate(10%, 5%)' },
          '50%': { transform: 'rotate(180deg) translate(10%, 5%)' },
          '100%': { transform: 'rotate(360deg) translate(10%, 5%)' },
        },
      },
      animation: {
        first: 'first 8s linear infinite',
        second: 'second 10s linear infinite',
        third: 'third 12s linear infinite',
        fourth: 'fourth 9s linear infinite',
        fifth: 'fifth 11s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
