/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Banner, Categories, FeaturedStories, Info } from 'components/landing'
import { Meta } from 'components'

import { getStories } from 'utils/airtable'

export const getStaticProps: GetStaticProps = async () => {
  const stories = JSON.parse(JSON.stringify(await getStories()))

  return {
    props: {
      stories,
    },
    revalidate: 1,
  }
}

const Home: NextPage = ({ stories }: any) => {
  return (
    <>
      <Meta />
      <Banner />
      <Info />
      <Categories />
      <FeaturedStories stories={stories} />
    </>
  )
}

export default Home
