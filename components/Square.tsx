import { styled } from 'stitches.config'

const Square = styled('div', {
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  border: '2px solid #FFFFFF',
  color: 'white',
  fontWeight: 600,
  fontSize: '32px',
  minHeight: '32px',
  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(255, 255, 255, 0.5)',
    color: '$cornsilk',
  },

  '@md': {
    fontSize: '46px',
    height: '25vh',
    width: '15vw',
  },
})

export default Square
