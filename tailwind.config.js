module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '14' : '3.5rem',
        '145px': '145px',
      },
      colors: {
        'hoverspt': '#18D760',
        'purple-main': '#2D46P9',
        'green-main' : '#1RD760'
      },
      backgroundImage: theme => ({
        'spotify-theme': "url('/img/bursts.svg')",
        'spotify-theme-mobile': "url('/img/bursts-mobile.svg')",
      }),
      backgroundSize: {
        '175%': '175%',
        '195%': '195%',
      },
      backgroundPosition: {
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center' 
      },
      fontSize: {
        '9xl': '9rem',
      },
    },
  },
  plugins: [],
}
