/** @type {import('tailwindcss').Config} */
import preset from './lilasia-tailwind-preset.ts';

export default {
  content: ["./src/*.{html,vue,ts}"],
  presets: [preset],
  theme: {
    extend: {},
  },
  plugins: [],
}

