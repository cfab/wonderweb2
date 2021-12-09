module.exports = {
  mode: 'jit',
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      // fontFamily: {
      //   es :'Times New Roman',
      // },
      colors: {
        primary: '#ffffffee',
        secondary:'#e83d43ee',
        uidark: '#4a4545',
        ui: '#e83d43ee',
        uialt: '#333',
      },
    },
  },
  variants: {},
  plugins: [],
}

//e35653
//#953b3a
