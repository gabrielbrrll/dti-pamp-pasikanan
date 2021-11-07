import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      mustard: '#CE8800',
      cornsilk: '#FFF3DB',
      charleston: '#292929',
      snow: '#FFF8F8',
    },
  },
  media: {
    sm: '(min-width: 375px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 962px)',
  },
})
