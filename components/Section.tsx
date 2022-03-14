import { styled } from 'stitches.config'

const Section = styled('div', {
  variants: {
    width: {
      auto: {
        width: 'auto',
      },
      '1-2': {
        width: '50%',
      },
      '1-4': {
        width: '25%',
      },
      '1-8': {
        width: '12.5%',
      },
      '3-4': {
        width: '75%',
      },
      full: {
        width: '100%',
      },
    },
    background: {
      cornsilk: {
        background: '$cornsilk',
      },
    },
    display: {
      block: {
        display: 'block',
      },
      'inline-block': {
        display: 'inline-block',
      },
    },
    opacity: {
      'opacity-90': {
        opacity: 0.9,
      },
    },
    borderRadius: {
      default: {
        borderRadius: '10px',
      },
    },
    padding: {
      'p-48': {
        padding: '48px',
      },
      'p-24': {
        padding: '24px',
      },
    },
    textAlign: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
    },
    margin: {
      'mt-48': {
        marginTop: '48px',
      },
      'm-0': {
        margin: 0,
      },
    },
  },

  defaultVariants: {
    borderRadius: 'default',
    display: 'inline-block',
  },
})

export default Section
