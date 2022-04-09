module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        bgDesktop: "url('/src/assets/bg-desktop.png')",
        bgMobile: "url('/src/assets/bg-mobile.png')",
      },
      colors: {
        Primary: {
          first: 'hsl(6, 100%, 80%)',
          second: 'hsl(335, 100%, 65%)'
        },
        PaleBlue: 'hsl(243, 100%, 93%)',
        GrayishBlue: 'hsl(229, 7%, 55%)',
        DarkBlue: 'hsl(228, 56%, 26%)',
        VeryDarkBlue: 'hsl(229, 57%, 11%)',
      }
    },
  },
  plugins: [],
}
