import { styled } from 'stitches.config'

const Flex = styled('div', {
  display: 'flex',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
    alignment: {
      centered: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      'space-between': {
        justifyContent: 'center',
      },
      'flex-end': {
        justifyContent: 'flex-end',
      },
      'vertical-centered': {
        alignItems: 'center',
      },
      'horizontal-centered': {
        justifyContent: 'center',
      },
    },
  },

  defaultVariants: {
    direction: 'row',
  },
})

export default Flex
