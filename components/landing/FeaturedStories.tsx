import React from 'react'
import { Container, StoryCard, Text } from 'components'

const FeaturedStories = () => {
  return (
    <Container>
      <h3 style={{ fontSize: '32px', margin: '12px 0', padding: 0 }}>
        Featured Stories
      </h3>
      <span style={{ fontSize: '18px' }}>Get to know our SMEs</span>
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
      <div style={{ display: 'flex', marginTop: '24px', alignItems: 'center' }}>
        <Text>View all stories</Text>
        <img alt="arrow-right" src="/icons/arrow-right-black.svg" />
      </div>
    </Container>
  )
}

export default FeaturedStories
