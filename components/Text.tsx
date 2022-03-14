import { styled } from 'stitches.config'

const StyledText = styled('span', {
  variants: {
    color: {
      white: {
        color: '#fff',
      },
      default: {
        color: '$charleston',
      },
    },
    size: {
      '6xl': {
        fontSize: '48px',
      },
      '5xl': {
        fontSize: '38px',
      },
      '4xl': {
        fontSize: '32px',
      },
      '3xl': {
        fontSize: '28px',
      },
      '2xl': {
        fontSize: '24px',
      },
      xl: {
        fontSize: '18px',
      },
      base: {
        fontSize: '16px',
      },
      sm: {
        fontSisze: '14px',
      },
    },
    textAlign: {
      left: {
        textAlign: 'left',
      },
      right: {
        textRight: 'right',
      },
    },
    format: {
      preformatted: {
        whiteSpace: 'pre-wrap',
        lineHeight: '32px',
      },
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

export default StyledText
