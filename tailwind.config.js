import typography from '@tailwindcss/typography'
import preset from './src/lilasia-tailwind-preset.ts'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{html,vue,js,ts}'],
  safelist: ['no-scrollbar', 'rounded', 'compact', 'middle', 'switch'],
  presets: [preset],
  theme: {
    extend: {}
  },
  plugins: [typography]
}
