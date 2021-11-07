import { styled } from 'stitches.config'

const StyledDiv = styled('div', {
  background:
    "linear-gradient(rgba(94, 94, 94, 0.5), rgba(94, 94, 94, 0.5)), url('/images/placeholder.jpeg')",
  height: '100vh',
  width: '100%',
  backgroundSize: 'cover',
  position: 'relative',
})

const BgWrapper = ({ children }: { children: React.ReactNode }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default BgWrapper
