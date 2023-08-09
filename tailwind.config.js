/* eslint-env node */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      height: {
        logo: '64px'
      },
      lineHeight: {
        logo: '64px'
      }
    },
  },
};
