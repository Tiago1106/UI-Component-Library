import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        slate: {
          50: 'var(--slate-50)',
          100: 'var(--slate-100)',
          200: 'var(--slate-200)',
          300: 'var(--slate-300)',
          400: 'var(--slate-400)',
          500: 'var(--slate-500)',
          600: 'var(--slate-600)',
          700: 'var(--slate-700)',
          800: 'var(--slate-800)',
          900: 'var(--slate-900)',
        },
        indigo: {
          50: 'var(--indigo-50)',
          100: 'var(--indigo-100)',
          200: 'var(--indigo-200)',
          300: 'var(--indigo-300)',
          400: 'var(--indigo-400)',
          500: 'var(--indigo-500)',
          600: 'var(--indigo-600)',
          700: 'var(--indigo-700)',
          800: 'var(--indigo-800)',
          900: 'var(--indigo-900)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          light: 'var(--color-success-light)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          light: 'var(--color-warning-light)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          light: 'var(--color-error-light)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          light: 'var(--color-info-light)',
        },
      },
      fontFamily: {
        sans: 'var(--font-sans)',
      },
      fontSize: {
        xs: ['var(--text-xs)', { lineHeight: 'var(--text-xs--line-height)' }],
        sm: ['var(--text-sm)', { lineHeight: 'var(--text-sm--line-height)' }],
        base: ['var(--text-base)', { lineHeight: 'var(--text-base--line-height)' }],
        lg: ['var(--text-lg)', { lineHeight: 'var(--text-lg--line-height)' }],
        xl: ['var(--text-xl)', { lineHeight: 'var(--text-xl--line-height)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--text-2xl--line-height)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--text-3xl--line-height)' }],
      },
      borderRadius: {
        md: 'var(--radius-md)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
} satisfies Config
