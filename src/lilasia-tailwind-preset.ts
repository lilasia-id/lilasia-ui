import type { Config } from 'tailwindcss'
import { fontSizes, lineHeights } from './variables'

export default {
  theme: {
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
        DEFAULT: '#344054'
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

    fontSize: Object.fromEntries(fontSizes.map((size) => [size, `${size / 16}rem`])),

    fontWeight: {
      normal: '400',
      500: '500',
      600: '600',
      700: '700'
    },

    lineHeight: Object.fromEntries(lineHeights.map((size) => [size, `${size / 16}rem`]))
  }
} satisfies Partial<Config>
