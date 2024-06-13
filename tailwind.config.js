/** @type {import('tailwindcss').Config} */
import { preset } from 'lilasia-ui'
// import preset from './src/lilasia-tailwind-preset.ts'

export default {
  content: ['./index.html', './src/*.{html,vue,ts}'],
  presets: [preset],
  theme: {
    extend: {}
  },
  plugins: []
}
