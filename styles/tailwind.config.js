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
        secondary:'#FF6A67',
        uidark: '#493866',
        ui: '#664f8d',
      },
    },
  },
  variants: {},
  plugins: [],
}

//e35653
//#953b3a
