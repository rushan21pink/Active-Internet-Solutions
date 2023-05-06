import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      width: {
        fit: 'fit-content',
        half: '50%',
      },
      height: {
        fit: 'fit-content',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'xxs': '.8125rem',
        'xs': '.875rem',
        'sm': '.9375rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.125rem',
        '5xl': '3.125rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      colors: {
        'primary': '#4980EE',
        'secondary': '#6D779D',
        'tertriary': '#8A99B4',
        'hover-card': '#BED4FF',
        'active-card': '#F0F5FF',
        'light-gray': '#F2F6FC',
        'neutral': '#EFF2F6',
        'neutral-2': '#939AA7',
        'muted': '#8991A3',
        'dark': '#2F3B57',
        'light-blue': '#DDE7FB',
        'link': '#2F80ED',
        'hover-text': '#1E477D',
        'success': '#219653',
        'success-tertriary': '#EEFFF3',
        'success-line': '#93DFB3',
        'error': '#EB5757',
        'error-border': '#EB5757',
        'error-bg': '#FFEFEF',
        'warning': '#C27630',
        'warning-bg': '#FEF8EB',
        'warning-border': '#F4DFBF',
      },
      boxShadow: {
        input: '0px 3px 7px #a2c7ff4d',
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
      borderWidth: {
        DEFAULT: '1px',
        none: '0',
        sm: '1.5px',
      },
    },
  },
});
