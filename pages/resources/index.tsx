import React from 'react'
import type { NextPage } from 'next'
import { Container, Meta, Text, YoutubeEmbed } from 'components'

const Resources: NextPage = () => {
  return (
    <>
      <Meta />
      <Container>
        <h2 style={{ fontWeight: 600 }}>Resources</h2>
        <h3 style={{ fontWeight: 600, marginTop: '64px' }}>
          Coffeetable Books
        </h3>
        <div style={{ marginBottom: '12px' }}>
          <a
            href="https://drive.google.com/file/d/1SAaPwV-t46gT-rLbuIJSKYHMH6uYPlxA/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'aqua',
              textDecoration: 'underline',
            }}
          >
            <Text>Coffeetable Book Issue 1 - Spread 7-05-21</Text>
          </a>
        </div>
        <div style={{ marginBottom: '12px' }}>
          <a
            href="https://drive.google.com/file/d/1ivpFiJY3Si47T8KKw1OWQ8JTvX7KjhM7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'aqua',
              textDecoration: 'underline',
            }}
          >
            <Text>Coffeetable Book Issue 1 - Spread 8-16-21</Text>
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/file/d/1oJl00SGiNneE0UNWQU1suro9346yB9eU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'aqua',
              textDecoration: 'underline',
            }}
          >
            <Text>Coffeetable Book Issue 2</Text>
          </a>
        </div>

        <h3 style={{ fontWeight: 600, marginTop: '64px' }}>Shows</h3>
        <div style={{ marginBottom: '24px' }}>
          <Text>DTI Pampanga Show in partnership with Where in Pampanga</Text>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <YoutubeEmbed embedId="Zk_1YX3oWeE" />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <YoutubeEmbed embedId="MDuYxm_zFcE" />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <YoutubeEmbed embedId="6VCmMLjLKSs" />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <YoutubeEmbed embedId="6VCmMLjLKSs" />
        </div>
      </Container>
    </>
  )
}

export default Resources
