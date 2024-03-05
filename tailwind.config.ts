import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import withMT from '@material-tailwind/react/utils/withMT';
import { screenSizes } from './lib/utils';

const config: Config = withMT({
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--foreground))',
        },
      },
    },
    button: {
      defaultProps: {
        color: 'primary',
      },
      valid: {
        colors: ['primary', 'secondary'],
      },
      styles: {
        variants: {
          filled: {
            primary: {
              backgroud: 'bg-primary',
              color: 'text-white',
            },
          },
          outlined: {
            primary: {
              border: 'border border-primary',
              color: 'text-primary',
            },
          },
          gradient: {
            primary: {
              backgroud: 'bg-primary',
              color: 'text-white',
            },
          },
          text: {
            primary: {
              color: 'text-primary',
            },
          },
        },
      },
      width: { 'screen/50': '50vw' },
    },
  },
  safelist: [
    'bg-primary',
    {
      pattern: /bg-(primary|secondary|accent|destructive)/,
    },
    {
      pattern: /border-(primary|secondary|accent|destructive)/,
    },
  ],
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'w-screen': width => ({ width: `${width}vw` }) },
        { values: Object.assign(screenSizes, theme('screenSize', {})) }
      ),
        matchUtilities(
          {
            'h-screen': height => ({
              height: `${height}vh`,
            }),
          },
          { values: Object.assign(screenSizes, theme('screenSize', {})) }
        );
    }),
  ],
}) as Config;

export default config;
