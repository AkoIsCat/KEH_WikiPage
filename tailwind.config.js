/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        btncolor: '#ccd0e7',
        hovercolor: '#b2b6c9',
        borderColor: '#cdd2ed',
        backgroundColor: '#edeef3',
        modalBGColor: 'rgba(40, 40, 40, 0.7)',
        page: '#a0a3b4',
      },
      fontSize: {
        mysize: '14px',
        title: '50px',
        page: '25px',
        asize: '15px',
      },
      width: {
        btnsize: '7%',
        contents: '70vw',
        modalW: '800px',
      },
      height: {
        myHeight: '50px',
        itemHeight: '70px',
        textHeight: '300px',
        headerHeight: '12vh',
      },
      padding: {
        itemPadding: '10px 20px',
      },
      borderRadius: {
        myRadius: '5px',
        page: '50%',
      },
      margin: {
        close: '5px',
        page: '50px auto',
      },
      boxShadow: {
        modal: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
      },
    },
  },
  plugins: [require('postcss-nesting'), require('tailwindcss')],
};
