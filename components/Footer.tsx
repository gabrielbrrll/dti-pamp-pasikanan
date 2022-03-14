import Link from 'next/link'

const Footer = () => (
  <div
    className="footer-main-container"
    style={{
      background: 'rgba(255, 243, 219, 0.9)',
      borderRadius: '10px 10px 0px 0px',
      padding: '60px 100px',
    }}
  >
    <div
      className="footer-wrapper"
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      <div
        className="footer-logo-wrapper"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div className="footer-pasikatan-logo">
          <div>
            <img
              width="380"
              alt="pasikatan-logo"
              src="/images/pasikatan-logo-black.png"
            />
          </div>
        </div>
        <div className="footer-dti-logo">
          <img alt="DTI logo" src="/images/dti-logo.png" />
        </div>
      </div>
      <div
        className="footer-info-wrapper"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div
          className="footer-info-wrapper-deep"
          style={{ marginRight: '64px' }}
        >
          <Link href="/stories">
            <a>
              <div style={{ fontSize: '22px' }} className="text-hover">
                Stories
              </div>
            </a>
          </Link>
          <Link href="/directory">
            <a>
              <div
                style={{ fontSize: '22px', marginTop: '16px' }}
                className="text-hover"
              >
                Directory
              </div>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <div
                style={{ fontSize: '22px', marginTop: '16px' }}
                className="text-hover"
              >
                About
              </div>
            </a>
          </Link>
          <Link href="/resources">
            <a>
              <div
                style={{ fontSize: '22px', marginTop: '16px' }}
                className="text-hover"
              >
                Resources
              </div>
            </a>
          </Link>
        </div>
        <div className="footer-contact-wrapper">
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
    {/* <div style={{ display: 'flex', alignItems: 'center' }}>
      <Text size="sm">Powered by</Text>
      <img
        style={{ height: '72px' }}
        src="/images/gulis-logo.png"
        alt="gulis-digital-marketing-services"
      />
    </div> */}
  </div>
)
export default Footer
