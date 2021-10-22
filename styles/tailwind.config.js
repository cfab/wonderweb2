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
        primary: '#556271',
        secondary:'#FF6A67',
        uidark: '#7B8898',
        ui: '#d3dbe4',
      },
    },
  },
  variants: {},
  plugins: [],
}
