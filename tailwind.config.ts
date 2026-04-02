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
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        tighter: '-0.03em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
