import React from 'react'
import { BgWrapper } from 'components'
import Link from 'next/link'

const CATEGORIES = [
  { label: 'Food', value: 'food' },
  { label: 'Delicacies', value: 'delicacies' },
  { label: 'Metalcraft', value: 'metalcraft' },
  { label: 'Herbal', value: 'herbal' },
  { label: 'Soap Manufacturing', value: 'soap manufacturing' },
]

const Categories = () => {
  return (
    <BgWrapper>
      <div className="categories-wrapper" style={{ padding: '72px 112px' }}>
        <h2 style={{ color: 'white', fontSize: '32px', fontWeight: 600 }}>
          Find the right business for your needs
        </h2>
        <div
          className="categories-container"
          style={{ display: 'flex', marginTop: '40px' }}
        >
          {CATEGORIES.map((cg) => (
            <Link
              href={`/directory?search=&category=${cg.value}`}
              key={cg.value}
            >
              <a target="_blank">
                <div
                  className="background-hover category-homepage"
                  style={{
                    marginRight: '32px',
                    color: 'white',
                    fontSize: '26px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    border: '2px solid #FFFFFF',
                    borderRadius: '10px',
                    padding: '8px 20px',
                  }}
                >
                  {cg.label}
                </div>
              </a>
            </Link>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '24px',
          }}
        >
          <Link href="/categories">
            <a style={{ display: 'flex' }}>
              <h2
                style={{ color: 'white', fontSize: '32px', fontWeight: 600 }}
                className="underline-hover"
              >
                Browse all categories{' '}
              </h2>
              <img alt="arrow-right" src="/icons/arrow-right.svg" />
            </a>
          </Link>
        </div>
      </div>
    </BgWrapper>
  )
}

export default Categories
