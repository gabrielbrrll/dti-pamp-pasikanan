import { Container, Flex, Section, Text } from 'components'
import Link from 'next/link'

const Info = () => (
  <div style={{ marginTop: '36px' }}>
    <Container>
      <Flex direction={{ '@sm': 'column', '@md': 'row' }}>
        <Section
          width={{ '@sm': 'full', md: '1-2' }}
          style={{ marginRight: '48px' }}
        >
          <img
            style={{
              maxHeight: '454px',
              maxWidth: '100%',
              borderRadius: '10px',
            }}
            src="images/placeholder.jpeg"
            alt="Pasikatan"
          />
        </Section>
        <Section
          width={{ '@sm': 'full', md: '1-2' }}
          style={{ marginTop: '48px' }}
        >
          <Flex direction="column" alignment="horizontal-centered">
            <Text size="4xl">What is Pasikatan?</Text>
            <Text style={{ marginTop: '24px', lineHeight: '32px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              dignissim congue tellus, id hendrerit leo facilisis ut. Aenean
              ornare mollis purus, in feugiat massa suscipit id. Donec a turpis
              et orci porttitor commodo. Nulla ac velit lobortis, semper lorem
              et, ultricies lectus. Sed sit amet cursus diam. Quisque eget
              egestas magna. Morbi imperdiet cursus dolor.{' '}
            </Text>
            <Link href="/about">
              <a>
                <Flex
                  alignment="vertical-centered"
                  style={{ marginTop: '24px' }}
                >
                  <Text size="xl" style={{ marginRight: '8px' }}>
                    Learn more
                  </Text>
                  <img src="icons/arrow-right-black.svg" alt="arrow-right" />
                </Flex>
              </a>
            </Link>
          </Flex>
        </Section>
      </Flex>
    </Container>
  </div>
)

export default Info
