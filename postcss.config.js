export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
        mergeLonghand: true,
        mergeRules: true,
      }],
    },
  },
} 