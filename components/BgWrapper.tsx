import { styled } from 'stitches.config'

const StyledDiv = styled('div', {
  background:
    "linear-gradient(rgba(94, 94, 94, 0.5), rgba(94, 94, 94, 0.5)), url('/images/placeholder2.jpeg')",
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  position: 'relative',

  '@sm': {
    height: 'auto',
    padding: 24,
  },
})

export type WrapperProps = React.HTMLAttributes<HTMLDivElement>

const BgWrapper = ({ children, ...rest }: WrapperProps) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>
}

export default BgWrapper
