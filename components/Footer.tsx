import Link from 'next/link'

const Footer = () => (
  <div
    style={{
      background: 'rgba(255, 243, 219, 0.9)',
      borderRadius: '10px 10px 0px 0px',
      padding: '60px 100px',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div>
          <div>
            <img
              width="380"
              alt="pasikatan-logo"
              src="/images/pasikatan-logo-black.png"
            />
          </div>
          <span>Pampanga SMEs Directory</span>
        </div>
        <div>
          <img alt="DTI logo" src="/images/dti-logo.png" />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ marginRight: '64px' }}>
          <Link href="/stories">
            <a>
              <div style={{ fontSize: '22px' }}>Stories</div>
            </a>
          </Link>
          <Link href="/directory">
            <a>
              <div style={{ fontSize: '22px', marginTop: '16px' }}>
                Directory
              </div>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <div style={{ fontSize: '22px', marginTop: '16px' }}>About</div>
            </a>
          </Link>
          <Link href="/resources">
            <a>
              <div style={{ fontSize: '22px', marginTop: '16px' }}>
                Resources
              </div>
            </a>
          </Link>
        </div>
        <div>
          <div style={{ fontSize: '22px', fontWeight: 600 }}>Contact Us</div>
          <div style={{ fontSize: '18px', marginTop: '12px' }}>
            +63 929 333 0381
          </div>
          <div style={{ fontSize: '18px', marginTop: '4px' }}>
            (045) 9000 293
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Footer
