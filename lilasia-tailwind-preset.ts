import type { Config } from 'tailwindcss'

export default {
  theme: {
    colors: {
      black: {
        5: '#F3F3F4',
        10: '#DEDEDE',
        20: '#CFD6E1',
        30: '#B0B8C5',
        40: '#919AA9',
        60: '#727C8C',
        80: '#535E70',
        100: '#344054',
        DEFAULT: '#344054'
      },

      blue: {
        10: '#F4F8FB',
        20: '#DCEDF2',
        40: '#B9DBE5',
        60: '#97C9D9',
        80: '#74B7CC',
        100: '#51A5BF',
        DEFAULT: '#51A5BF'
      },

      yellow: {
        5: '#FFFBF4',
        10: '#FFF7E5',
        20: '#FFEECC',
        40: '#FFDE99',
        60: '#FFCD66',
        80: '#FFBD33',
        100: '#FFAC00',
        DEFAULT: '#FFAC00'
      },

      green: {
        10: '#F1FAF3',
        20: '#D4F1DC',
        40: '#C6ECD1',
        60: '#A9E3BA',
        80: '#70D08C',
        100: '#4CAB66',
        DEFAULT: '#4CAB66'
      },

      red: {
        10: '#FBE6E6',
        20: '#F7CECD',
        40: '#EF9C9A',
        60: '#EB8381',
        80: '#E76B68',
        100: '#E3524F',
        DEFAULT: '#E3524F'
      }
    },

    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['"Zilla Slab"', 'sans-serif']
    },

    fontSize: {
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      30: '1.875rem',
      32: '2rem',
      40: '2.5rem',
      60: '3.75rem'
    },

    fontWeight: {
      normal: '400',
      500: '500',
      600: '600',
      700: '700'
    },

    lineHeight: {
      14: '0.875rem',
      15: '0.9375rem',
      20: '1.25rem',
      24: '1.5rem',
      25: '1.5625rem',
      29: '1.8125rem',
      30: '1.875rem',
      32: '2rem',
      38: '2.375rem',
      48: '3rem'
    }
  }
} satisfies Partial<Config>
