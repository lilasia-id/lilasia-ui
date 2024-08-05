/** @type {import('tailwindcss').Config} */
import preset from './src/lilasia-tailwind-preset.ts'

export default {
  content: ['./*.html', './src/**/*.{html,vue,js,ts}'],
  safelist: ['no-scrollbar', 'rounded', 'compact', 'middle', 'switch'],
  presets: [preset],
  theme: {
    extend: {}
  },
  plugins: []
}
