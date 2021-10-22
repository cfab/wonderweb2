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
      fontFamily: {
        es :'es_face_book_trial',
      },
      colors: {
        primary: '#953b3a',
        secondary:'#FF6A67',
        uidark: '#e35653',
        ui: '#af4e4d',
      },
    },
  },
  variants: {},
  plugins: [],
}

//e35653
//#953b3a
