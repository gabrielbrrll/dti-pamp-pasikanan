/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  BgWrapper,
  Text,
  Flex,
  Section,
  Input,
  Square,
} from 'components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Search } from 'react-feather'

const Banner = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')

  const searchSmes = () => {
    router.push({
      pathname: '/directory',
      query: {
        search: searchQuery,
        category: 'all',
      },
    })
  }

  const _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      searchSmes()
    }
  }

  const browseByCategory = () => {
    router.push({
      pathname: '/categories',
    })
  }

  return (
    <BgWrapper>
      <Container>
        <Flex
          alignment="space-between"
          direction={{ '@sm': 'column', '@md': 'row' }}
        >
          <Section width={{ '@sm': 'full', '@md': '3-4' }}>
            <div className="logo-container" style={{ marginTop: '140px' }}>
              <img
                width="380"
                alt="pasikatan-logo"
                src="/images/pasikatan-logo-white.png"
                className="pasikatan-logo"
              />
            </div>
            <Section
              style={{ marginTop: '24px' }}
              width={{ '@sm': 'full', '@md': '1-2' }}
              padding={{ '@sm': 'p-24', '@md': 'p-48' }}
              background="cornsilk"
              opacity="opacity-90"
            >
              <Text size="2xl">Browse SMEs in Pampanga</Text>
              <Flex style={{ marginTop: '22px' }}>
                <Input
                  placeholder="Aling Lucing's"
                  value={searchQuery}
                  onKeyDown={_handleKeyDown}
                  tabIndex={0}
                  style={{ marginRight: '12px' }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  style={{ cursor: 'pointer', marginTop: '6px' }}
                  onClick={searchSmes}
                  className="text-hover"
                />
              </Flex>
              <Section
                width="full"
                textAlign="right"
                style={{ marginTop: '22px' }}
              >
                <Text
                  className="text-hover"
                  onClick={browseByCategory}
                  style={{ cursor: 'pointer' }}
                >
                  Browse by category
                </Text>
              </Section>
            </Section>
          </Section>
          <Section margin={{ '@sm': 'mt-48', '@md': 'm-0' }}>
            <Link href="/directory">
              <a>
                <Square
                  className="square-menu"
                  style={{ marginBottom: '32px' }}
                >
                  SMEs
                </Square>
              </a>
            </Link>
            <Link href="/stories">
              <a>
                <Square
                  className="square-menu"
                  style={{ marginBottom: '32px' }}
                >
                  Stories
                </Square>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <Square style={{ marginBottom: '60px' }}>About</Square>
              </a>
            </Link>
          </Section>
        </Flex>
      </Container>
    </BgWrapper>
  )
}

export default Banner
