import { BgWrapper, Text } from 'components'

const Header = () => (
  <BgWrapper
    style={{
      height: '15vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 94px',
      color: 'white',
    }}
  >
    <h1>Pasikatan</h1>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Text
        size="2xl"
        style={{ fontWeight: 600, marginRight: '48px', color: 'white' }}
      >
        SMEs
      </Text>
      <Text
        size="2xl"
        style={{ fontWeight: 600, marginRight: '48px', color: 'white' }}
      >
        Stories
      </Text>
      <Text size="2xl" style={{ fontWeight: 600, color: 'white' }}>
        About
      </Text>
    </div>
  </BgWrapper>
)

export default Header
