import { styled } from 'stitches.config'
import { WrapperProps } from './BgWrapper'

const StyledDiv = styled('div', {
  padding: '24px 36px',

  '@md': {
    padding: '58px 94px',
  },
})

const Container = ({ children, ...rest }: WrapperProps) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>
}

export default Container
