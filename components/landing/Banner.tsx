import {
  Container,
  BgWrapper,
  Text,
  Flex,
  Section,
  Input,
  Square,
} from 'components'

const Banner = () => (
  <BgWrapper>
    <Container>
      <Flex
        alignment="space-between"
        direction={{ '@sm': 'column', '@md': 'row' }}
      >
        <Section width={{ '@sm': 'full', '@md': '3-4' }}>
          {/* <Text as="h1" size="6xl" color="white">
            Pasikatan
          </Text> */}
          <div style={{ marginBottom: '-160px' }}>
            <img
              width="380"
              alt="pasikatan-logo"
              src="/images/pasikatan-logo-white.png"
            />
          </div>
          <Section
            style={{ marginTop: '24px' }}
            width={{ '@sm': 'full', '@md': '1-2' }}
            padding="p-48"
            background="cornsilk"
            opacity="opacity-90"
          >
            <Text size="2xl">Browse SMEs in Pampanga</Text>
            <Flex style={{ marginTop: '22px' }}>
              <Input
                placeholder="Aling Lucing's"
                value=""
                style={{ marginRight: '12px' }}
              />
              <img src="/icons/search.svg" alt="search" />
            </Flex>
            <Section
              width="full"
              textAlign="right"
              style={{ marginTop: '22px' }}
            >
              <Text>Browse by category</Text>
            </Section>
          </Section>
        </Section>
        <Section margin={{ '@sm': 'mt-48', '@md': 'm-0' }}>
          <Square style={{ marginBottom: '32px' }}>SMEs</Square>
          <Square style={{ marginBottom: '32px' }}>Stories</Square>
          <Square>About</Square>
        </Section>
      </Flex>
    </Container>
  </BgWrapper>
)

export default Banner
