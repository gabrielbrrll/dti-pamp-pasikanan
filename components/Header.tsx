import { BgWrapper, Text } from 'components'
import Link from 'next/link'

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
    <Link href="/">
      <a>
        <div>
          <img
            width="380"
            alt="pasikatan-logo"
            src="/images/pasikatan-logo-white.png"
            style={{ zIndex: 1 }}
          />
        </div>
      </a>
    </Link>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Link href="/directory">
        <a>
          <Text
            size="2xl"
            style={{ fontWeight: 600, marginRight: '48px', color: 'white' }}
          >
            SMEs
          </Text>
        </a>
      </Link>
      <Link href="/stories">
        <a>
          <Text
            size="2xl"
            style={{ fontWeight: 600, marginRight: '48px', color: 'white' }}
          >
            Stories
          </Text>
        </a>
      </Link>
      <Link href="/about">
        <a>
          <Text size="2xl" style={{ fontWeight: 600, color: 'white' }}>
            About
          </Text>
        </a>
      </Link>
    </div>
  </BgWrapper>
)

export default Header
