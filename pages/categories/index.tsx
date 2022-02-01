import React from 'react'
import type { NextPage } from 'next'
import { Container, Meta, Text } from 'components'
import { useRouter } from 'next/router'

const SECTORS = [
  { label: 'Food', value: 'food' },
  { label: 'Delicacies', value: 'delicacies' },
  { label: 'Metalcraft', value: 'metalcraft' },
  { label: 'Herbal', value: 'herbal' },
  { label: 'Soap Manufacturing', value: 'soap manufacturing' },
]

const About: NextPage = () => {
  const router = useRouter()

  const searchByCategory = (category: string) => {
    router.push({
      pathname: '/directory',
      query: {
        search: '',
        category,
      },
    })
  }
  return (
    <>
      <Meta />
      <Container>
        <div style={{ margin: '4em 16em' }}>
          <div
            style={{
              marginBottom: '48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Text size="4xl" style={{ fontWeight: 600 }}>
              Categories
            </Text>
            {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: '#FFF3DB',
                  borderRadius: '10px',
                  padding: '8px 16px',
                  marginRight: '24px',
                  minWidth: '350px',
                }}
              >
                <input
                  style={{
                    fontSize: '16px',
                    marginRight: '12px',
                    outline: 0,
                    background: 'transparent',
                    border: 'transparent',
                  }}
                  placeholder="search for a sector..."
                />
                <img src="/icons/search.svg" alt="search" />
              </div>
            </div> */}
          </div>
          <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap' }}>
            {SECTORS.map((sector) => (
              <div
                onClick={() => searchByCategory(sector.value)}
                key={sector.value}
                style={{ flex: '50%', marginBottom: '20px', cursor: 'pointer' }}
              >
                <Text size="3xl">{sector.label}</Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
