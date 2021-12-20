import React from 'react'
import { Container, StoryCard, Text } from 'components'
import Link from 'next/link'

const Content1 = {
  title: 'Success story of Miss Kathrina Miranda, Owner of Wrap Eat Out',
  description:
    'One of the businesses that is flourishing in the town of Bacolor is Wrap Eat Out Foods, a restaurant that offers wraps and salads...',
  url: '/images/article-2-logo.png',
}
const Content2 = {
  title: 'My Tooth Goodies Cakes, Cupcakes and Pastries',
  description:
    'Her products include cakes and pastries with less sugar, coco macaroons while her top selling products are carrot cakes and banana cakes...',
  url: '/images/article-3-logo.png',
}

const Content3 = {
  title: 'SAMUEL’s BAKES AND DELICACIES',
  description:
    'The flagship product is their Queso Pastillas Chiffon Cake. They incorporated the Filipino favorite pastillas in a delicate baked product-Chiffon...',
  url: '/images/article-1-logo.png',
}

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
        <Link href="/stories/wrap-eat-out">
          <a>
            <StoryCard content={Content1} type="card" />
          </a>
        </Link>
        <Link href="/stories/goodies-cake">
          <a>
            <StoryCard content={Content2} type="card" />
          </a>
        </Link>
        <Link href="/samuel-bakes">
          <a>
            {' '}
            <StoryCard content={Content3} type="card" />
          </a>
        </Link>
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
