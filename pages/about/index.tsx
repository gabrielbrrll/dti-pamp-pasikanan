import React from 'react'
import type { NextPage } from 'next'
import { Container, Meta, Text } from 'components'

const About: NextPage = () => {
  return (
    <>
      <Meta />
      <Container>
        <div style={{ margin: '36px 0' }}>
          <div style={{ marginBottom: '48px' }}>
            <Text size="2xl" style={{ fontWeight: 600 }}>
              What is Pasikatan?
            </Text>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Text style={{ lineHeight: '32px' }}>
              Aliquam eu est lacus. Ut aliquam gravida turpis nec placerat.
              Integer egestas arcu rhoncus augue fermentum elementum. Nulla ac
              elit condimentum orci lacinia cursus. Phasellus eu placerat
              mauris. Vestibulum volutpat elementum enim quis elementum.
              Maecenas sem libero, efficitur et sagittis eu, condimentum id ex.
              In hac habitasse platea dictumst. Pellentesque lectus ex,
              malesuada finibus arcu vel, ornare lobortis libero. In sed enim
              mi.
            </Text>
          </div>
          <div style={{ marginTop: '24px' }}>
            <Text style={{ lineHeight: '32px' }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Cras sit amet facilisis ante, aliquet
              fermentum augue. Phasellus accumsan dapibus egestas. Morbi
              porttitor nulla vel metus ultricies ullamcorper. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Curabitur ac orci eget dui
              finibus consectetur nec at lorem. Etiam pellentesque sollicitudin
              lorem quis consequat. Pellentesque eget nibh bibendum, volutpat
              dolor nec, ultricies felis. Aenean sit amet libero vitae purus
              pharetra tempor nec et dolor. Sed pulvinar finibus metus, nec
              bibendum mauris faucibus eu. Morbi tellus lectus, semper ac
              laoreet ut, fermentum a nulla. Proin sagittis purus est, non
              vulputate turpis fermentum in. Praesent aliquam lacinia accumsan.
            </Text>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
