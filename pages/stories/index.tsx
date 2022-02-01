import React from 'react'
import type { NextPage } from 'next'
import { Container, Meta, StoryCard, Text } from 'components'
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

const About: NextPage = () => {
  return (
    <>
      <Meta />
      <Container>
        <Text size="3xl">Stories</Text>
        <div style={{ margin: '36px 0' }}>
          <Link href="/stories/wrap-eat-out">
            <a>
              <StoryCard content={Content1} type="content" />
            </a>
          </Link>
          <Link href="/stories/goodies-cake">
            <a>
              <StoryCard content={Content2} type="content" />
            </a>
          </Link>
          <Link href="/stories/samuel-bakes">
            <a>
              <StoryCard content={Content3} type="content" />
            </a>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default About
