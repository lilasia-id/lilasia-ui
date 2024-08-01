/** @type {import('tailwindcss').Config} */
// import { preset } from 'lilasia-ui'
import preset from './src/lilasia-tailwind-preset.ts'

export default {
  content: ['./*.html', './src/**/*.{html,vue,js,ts}'],
  presets: [preset],
  theme: {
    extend: {}
  },
  plugins: []
}
