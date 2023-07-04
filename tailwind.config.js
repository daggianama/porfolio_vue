
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': "#585858",
        'danger': '#e3342f',
      },
      width: {
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
        '80vw': '80vw',
        '90vw': '90vw',
        '100vw': '100vw',
      },
      height: {
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
      },

    },
    fontFamily: {
      roboto: ['Roboto, sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
    }
  },

  plugins: [],
}

