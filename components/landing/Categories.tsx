import React from 'react'
import { BgWrapper } from 'components'

const CATEGORIES = [
  { label: 'Food', value: 'food' },
  { label: 'Hospitality', value: 'hospitality' },
  { label: 'Marketing', value: 'marketing' },
  { label: 'Arts & Crafts', value: 'arts-and-crafts' },
  { label: 'Graphics & Design', value: 'graphics-and-design' },
]

const Categories = () => {
  return (
    <BgWrapper style={{ height: '50vh', padding: '72px 112px' }}>
      <h2 style={{ color: 'white', fontSize: '32px', fontWeight: 600 }}>
        Find the right business for your needs
      </h2>
      <div style={{ display: 'flex', marginTop: '40px' }}>
        {CATEGORIES.map((cg) => (
          <div
            style={{
              marginRight: '32px',
              color: 'white',
              fontSize: '26px',
              background: 'rgba(255, 255, 255, 0.2)',
              border: '2px solid #FFFFFF',
              borderRadius: '10px',
              padding: '8px 20px',
            }}
            key={cg.value}
          >
            {cg.label}
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '24px',
        }}
      >
        <h2 style={{ color: 'white', fontSize: '32px', fontWeight: 600 }}>
          Browse all categories{' '}
        </h2>
        <img alt="arrow-right" src="/icons/arrow-right.svg" />
      </div>
    </BgWrapper>
  )
}

export default Categories
