import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    borderRadius: Object.fromEntries(
      [4, 8, 12, 16, 24, 9999].map((size) => [size, `${size / 16}rem`])
    ),

    colors: {
      black: {
        5: '#f3f3f4',
        10: '#dedede',
        20: '#cfd6e1',
        30: '#b0b8c5',
        40: '#919aa9',
        60: '#727c8c',
        80: '#535e70',
        100: '#344054',
        DEFAULT: '#000000'
      },

      blue: {
        10: '#f4f8fb',
        20: '#dcedf2',
        40: '#b9dbe5',
        60: '#97c9d9',
        80: '#74b7cc',
        100: '#51a5bf',
        DEFAULT: '#51a5bf'
      },

      green: {
        10: '#f1faf3',
        20: '#d4f1dc',
        40: '#c6ecd1',
        60: '#a9e3ba',
        80: '#70d08c',
        100: '#4cab66',
        DEFAULT: '#4cab66'
      },

      red: {
        10: '#fbe6e6',
        20: '#f7cecd',
        40: '#ef9c9a',
        60: '#eb8381',
        80: '#e76b68',
        100: '#e3524f',
        DEFAULT: '#e3524f'
      },

      white: '#ffffff',

      yellow: {
        5: '#fffbf4',
        10: '#fff7e5',
        20: '#ffeecc',
        40: '#ffde99',
        60: '#ffcd66',
        80: '#ffbd33',
        100: '#ffac00',
        DEFAULT: '#ffac00'
      }
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['"Zilla Slab"', 'sans-serif']
    },

    fontSize: Object.fromEntries(
      [8, 10, 12, 14, 16, 20, 24, 30, 32, 40, 60].map((size) => [size, `${size / 16}rem`])
    ),

    fontWeight: Object.fromEntries([400, 500, 600, 700].map((weight) => [weight, String(weight)])),

    lineHeight: Object.fromEntries(
      [14, 15, 20, 24, 25, 28, 29, 30, 32, 38, 48].map((size) => [size, `${size / 16}rem`])
    ),

    letterSpacing: {
      1: `${1 / 16}rem`
    },

    spacing: Object.fromEntries(Array.from({ length: 16 }, (_, i) => [i * 4, `${(i * 4) / 16}rem`]))
  }
} satisfies Config
