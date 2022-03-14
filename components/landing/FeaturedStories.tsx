/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Container, StoryCard, Text } from 'components'
import Link from 'next/link'

const FeaturedStories = ({
  isDescriptionHidden = false,
  stories = [],
}: {
  isDescriptionHidden?: boolean
  stories: any
}) => {
  const strs = stories?.filter((story: any) => story.fields?.title)
  const fullContent = strs.map((s: any) => ({
    id: s?.id,
    title: s.fields?.title,
    description: s.fields?.content,
    url: s.fields?.headerImage?.[0]?.thumbnails?.large.url,
  }))

  const content = fullContent.splice(0, 3)

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
        className="featured-stories-container"
        style={{
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {content.map((c: any) => {
          return (
            <div
              className="featured-story-container"
              key={c.id}
              style={{ flex: 1, marginRight: '20px' }}
            >
              <Link href={`/stories/${c.id}`}>
                <a>
                  <StoryCard content={c} type="card" />
                </a>
              </Link>
            </div>
          )
        })}
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
              <Text className="text-hover">View all stories</Text>
              <img alt="arrow-right" src="/icons/arrow-right-black.svg" />
            </div>
          </a>
        </Link>
      )}
    </Container>
  )
}

export default FeaturedStories
