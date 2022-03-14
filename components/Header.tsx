import { BgWrapper, Text } from 'components'
import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'react-feather'

const Header = () => {
  const [isMiniMenuOpen, setIsMiniMenuOpen] = useState(false)
  return (
    <BgWrapper
      style={{
        height: '15vh',
        color: 'white',
        padding: 0,
      }}
    >
      <div
        className="header-nav-items"
        style={{
          height: '15vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="/">
          <a>
            <div>
              <img
                className="pasikatan-logo-header"
                alt="pasikatan-logo"
                src="/images/pasikatan-logo-white.png"
                style={{ zIndex: 1 }}
              />
            </div>
          </a>
        </Link>
        <div className="mini-menu">
          <Menu onClick={() => setIsMiniMenuOpen(true)} />
        </div>
        {isMiniMenuOpen && (
          <div
            className="mini-menu"
            style={{
              height: '100%',
              width: '100vw',
              position: 'fixed',
              background: '#e4cf89',
              top: 0,
              left: 0,
              padding: 24,
              zIndex: 9999,
            }}
          >
            <div style={{ display: 'block' }}>
              <div style={{ display: 'block' }}>
                <h1 onClick={() => setIsMiniMenuOpen(false)}>Go back</h1>
              </div>
              <div style={{ marginTop: '24px', fontSize: '24px' }}>
                <Link href="/directory">
                  <a onClick={() => setIsMiniMenuOpen(false)}>
                    <Text
                      size="2xl"
                      style={{
                        fontWeight: 600,
                        marginRight: '48px',
                        color: 'white',
                      }}
                      className="text-hover"
                    >
                      SMEs
                    </Text>
                  </a>
                </Link>
              </div>
              <div style={{ marginTop: '24px', fontSize: '24px' }}>
                <Link href="/stories">
                  <a onClick={() => setIsMiniMenuOpen(false)}>
                    <Text
                      size="2xl"
                      style={{
                        fontWeight: 600,
                        marginRight: '48px',
                        color: 'white',
                      }}
                      className="text-hover"
                    >
                      Stories
                    </Text>
                  </a>
                </Link>
              </div>
              <div style={{ marginTop: '24px', fontSize: '24px' }}>
                <Link href="/about">
                  <a onClick={() => setIsMiniMenuOpen(false)}>
                    <Text
                      size="2xl"
                      style={{
                        fontWeight: 600,
                        color: 'white',
                        marginRight: '48px',
                      }}
                      className="text-hover"
                    >
                      About
                    </Text>
                  </a>
                </Link>
              </div>
              <div style={{ marginTop: '24px', fontSize: '24px' }}>
                <Link href="/resources">
                  <a onClick={() => setIsMiniMenuOpen(false)}>
                    <Text
                      size="2xl"
                      style={{ fontWeight: 600, color: 'white' }}
                      className="text-hover"
                    >
                      Resources
                    </Text>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
        <div
          style={{ display: 'flex', alignItems: 'center' }}
          className="header-links"
        >
          <Link href="/directory">
            <a>
              <Text
                size="2xl"
                style={{ fontWeight: 600, marginRight: '48px', color: 'white' }}
                className="text-hover"
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
                className="text-hover"
              >
                Stories
              </Text>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <Text
                size="2xl"
                style={{ fontWeight: 600, color: 'white', marginRight: '48px' }}
                className="text-hover"
              >
                About
              </Text>
            </a>
          </Link>
          <Link href="/resources">
            <a>
              <Text
                size="2xl"
                style={{ fontWeight: 600, color: 'white' }}
                className="text-hover"
              >
                Resources
              </Text>
            </a>
          </Link>
        </div>
      </div>
    </BgWrapper>
  )
}

export default Header
