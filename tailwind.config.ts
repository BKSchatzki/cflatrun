import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        cflatblue: 'var(--cflatblue)',
        cflatdarkblue: 'var(--cflatdarkblue)',
        cflatyellow: 'var(--cflatyellow)',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
