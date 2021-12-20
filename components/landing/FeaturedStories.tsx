import React from 'react'
import { Container, StoryCard, Text } from 'components'
import Link from 'next/link'

const FeaturedStories = ({
  isDescriptionHidden = false,
}: {
  isDescriptionHidden?: boolean
}) => {
  return (
    <Container>
      {!isDescriptionHidden && (
        <>
          <h3 style={{ fontSize: '32px', margin: '12px 0', padding: 0 }}>
            Featured Stories
          </h3>
          <span style={{ fontSize: '18px' }}>Get to know our SMEs</span>
        </>
      )}
      <div
        style={{
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <StoryCard type="card" />
        <StoryCard type="card" />
        <StoryCard type="card" />
      </div>
      {!isDescriptionHidden && (
        <Link href="/stories">
          <a>
            <div
              style={{
                display: 'flex',
                marginTop: '24px',
                alignItems: 'center',
              }}
            >
              <Text>View all stories</Text>
              <img alt="arrow-right" src="/icons/arrow-right-black.svg" />
            </div>
          </a>
        </Link>
      )}
    </Container>
  )
}

export default FeaturedStories
