module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },

      minsm: { min: '640px' },
      minmd: { min: '768px' },
      minlg: { min: '1024px' },
      minxl: { min: '1280px' },
      min2xl: { min: '1536px' },
    },

    fontFamily: {
      // elektra: ['elektra', 'sans-serif'],
      folk: ['folkard'],
      life: ['lifecraft'],
    },

    extend: {
      colors: {
        primary: '#00c2ff',
      },
    },
  },
  plugins: [],
};
