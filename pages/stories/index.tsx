/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Container, Meta, StoryCard, Text } from 'components'
import Link from 'next/link'

import { getStories } from 'utils/airtable'

export const getStaticProps: GetStaticProps = async () => {
  const stories = JSON.parse(JSON.stringify(await getStories()))

  return {
    props: {
      stories,
    },
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const About: NextPage = ({ stories }: any) => {
  const strs = stories?.filter((story: any) => story.fields?.title) || []
  const content = strs.map((s: any) => ({
    id: s?.id,
    title: s.fields?.title,
    description: s.fields?.content,
    url:
      s.fields?.headerImage?.[0]?.thumbnails?.large.url ||
      '/images/pasikatan-logo-black.png',
  }))

  return (
    <>
      <Meta />
      <Container>
        <div style={{ marginBottom: '36px' }}>
          <Link href="/">
            <a>
              <span
                style={{ textDecoration: 'underline' }}
                className="text-hover"
              >
                Back to homepage
              </span>
            </a>
          </Link>
        </div>
        <Text size="3xl">Stories</Text>
        <div style={{ margin: '36px 0' }}>
          {content.map((c: any) => {
            return (
              <Link key={c.id} href={`/stories/${c.id}`}>
                <a>
                  <StoryCard content={c} type="content" />
                </a>
              </Link>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default About
