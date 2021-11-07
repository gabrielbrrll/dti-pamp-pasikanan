import { styled } from 'stitches.config'

const StyledDiv = styled('div', {
  padding: '24px 36px',

  '@md': {
    padding: '58px 94px',
  },
})

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledDiv>{children}</StyledDiv>
}

export default Container
