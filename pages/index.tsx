import React from 'react'
import type { NextPage } from 'next'
import { Banner, Categories, FeaturedStories, Info } from 'components/landing'
import { Meta } from 'components'

const Home: NextPage = () => {
  return (
    <>
      <Meta />
      <Banner />
      <Info />
      <Categories />
      <FeaturedStories />
    </>
  )
}

export default Home
