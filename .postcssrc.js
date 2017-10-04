// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "postcss-px-to-viewport": { 
      viewportWidth: 750, 
      viewportHeight: 1334, 
      unitPrecision: 5, 
      viewportUnit: 'vw', 
      selectorBlackList: [], 
      minPixelValue: 1, 
      mediaQuery: false 
    },
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {}
  }
}
