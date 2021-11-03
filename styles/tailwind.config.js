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
        primary: '#fff',
        secondary:'#e83d43',
        uidark: '#4a4545',
        ui: '#e83d43',
        uialt: '#333',
      },
    },
  },
  variants: {},
  plugins: [],
}

//e35653
//#953b3a
