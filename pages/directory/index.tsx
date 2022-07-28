/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { ISme } from '@types'
import { getSmes } from 'utils/airtable'
import { Container, Meta, Text } from 'components'
import Router, { useRouter } from 'next/router'
import { useState } from 'react'

export const getStaticProps: GetStaticProps = async () => {
  const smes = JSON.parse(JSON.stringify(await getSmes()))

  return {
    props: {
      smes,
    },
    revalidate: 1,
  }
}

const ALPHABETS = [
  '#',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

interface IDirectory {
  smes: ISme[]
}

const Directory = ({ smes: unfilteredSmes }: IDirectory) => {
  const router = useRouter()
  const { query } = router
  const smes = unfilteredSmes.filter((sme) => sme.fields.name)

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const allCategories = smes.map((sme) => sme.fields.category[0])
  const categories = Array.from(new Set(allCategories))

  const filterSmes = (smes: ISme[]) => {
    if (
      query &&
      Object.keys(query).length === 0 &&
      Object.getPrototypeOf(query) === Object.prototype
    ) {
      return smes
    } else {
      let filteredSmes = smes

      if (query.search) {
        filteredSmes = filteredSmes.filter((sme) =>
          JSON.stringify(sme)
            .toLowerCase()
            .includes(query?.search as string)
        )
      }

      if (query.category !== 'all') {
        filteredSmes = filteredSmes.filter((sme) =>
          sme.fields.category?.includes((query.category as string) || '')
        )
      }

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (query.startsWith) {
        if (query.startsWith !== '#') {
          filteredSmes = filteredSmes.filter(
            (sme) => sme?.fields?.name[0]?.toLowerCase() === query.startsWith
          )
        } else {
          filteredSmes = smes?.filter((sme) =>
            /^[^a-z]/i.test(sme?.fields.name)
          )
        }
      }

      return filteredSmes
    }
  }

  const searchSmes = (category = 'all') => {
    setActiveCategory(category)
    Router.push({
      pathname: '/directory',
      query: {
        category,
        search: searchQuery,
      },
    })
    filterSmes(smes)
  }

  const searchStartQuery = (letter: string) => {
    setSearchQuery('')
    Router.push({
      pathname: '/directory',
      query: {
        startsWith: letter.toLowerCase(),
      },
    })
    filterSmes(smes)
  }

  const resetFilters = () => {
    router.replace('/directory', undefined, { shallow: true })
    filterSmes(smes)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const _handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      searchSmes(activeCategory)
    }
  }

  const filteredSmes = filterSmes(smes)

  return (
    <div>
      <Meta />

      <Container>
        <div>
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
        <div
          className="filter-container"
          style={{
            marginTop: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <Text size="2xl" style={{ fontWeight: 600 }}>
              SMEs Directory
            </Text>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              className="search-container"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#FFF3DB',
                borderRadius: '10px',
                padding: '8px 16px',
                marginRight: '24px',
                minWidth: '300px',
              }}
            >
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  fontSize: '16px',
                  marginRight: '12px',
                  outline: 0,
                  background: 'transparent',
                  border: 'transparent',
                }}
                tabIndex={0}
                onKeyDown={_handleKeyDown}
                placeholder="Search SME here"
                value={searchQuery}
              />
              <img
                src="/icons/search.svg"
                alt="search"
                style={{ cursor: 'pointer' }}
                onClick={() => searchSmes(activeCategory)}
              />
            </div>
            <div
              className="select-category-container"
              style={{
                display: 'flex',
                alignItems: 'center',
                background: '#FFF3DB',
                borderRadius: '10px',
                padding: '8px 16px',
              }}
            >
              <select
                placeholder="All"
                style={{
                  borderRadius: '10px',
                  background: 'transparent',
                  outline: 0,
                  fontSize: '16px',
                  border: 'transparent',
                }}
                value={activeCategory}
                onChange={(e) => {
                  searchSmes(e.target.value)
                }}
              >
                <option value="all">all</option>
                {categories.map((categ) => (
                  <option key={categ as unknown as string} value={categ}>
                    {categ}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          className="alphabets-search"
          style={{
            marginTop: '56px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {ALPHABETS.map((letter) => (
            <Text
              size="2xl"
              style={{ color: '#CE8800', fontWeight: 600, cursor: 'pointer' }}
              key={letter}
              onClick={() => searchStartQuery(letter)}
            >
              {letter}
            </Text>
          ))}
        </div>
        <div style={{ marginTop: '48px' }}>
          <Text size="5xl" style={{ color: '#CE8800', fontWeight: 600 }}>
            {(query?.startsWith as string)?.toUpperCase() || 'All'} (
            {filteredSmes.length})
          </Text>
          <div
            style={{ marginTop: '12px', color: '#7E7E7E', cursor: 'pointer' }}
            onClick={resetFilters}
          >
            Remove filters
          </div>
        </div>
        <div style={{ marginTop: '48px' }}>
          {filteredSmes.map((sme) => {
            if (sme.fields.name) {
              return (
                <Link key={sme.id} href={`/directory/${sme.id}`}>
                  <a>
                    <div
                      className="block-sm"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '36px',
                      }}
                    >
                      <div
                        className="block-sm"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          width: '60%',
                          marginRight: '36px',
                        }}
                      >
                        {sme.fields?.logo?.length && (
                          <div
                            className="sme-listing-sm"
                            style={{
                              marginRight: '48px',
                              backgroundImage: `url('${sme.fields?.logo[0]?.url}')`,
                              height: '150px',
                              width: '25%',
                              backgroundSize: 'contain',
                              borderRadius: '10px',
                              backgroundRepeat: 'no-repeat',
                            }}
                          />
                        )}
                        <div className="block-sm" style={{ width: '75%' }}>
                          <div style={{ marginBottom: '8px' }}>
                            <Text size="2xl" style={{ fontWeight: 600 }}>
                              {sme.fields.name}
                            </Text>
                          </div>
                          <div style={{ marginBottom: '8px' }}>
                            <Text size="xl" style={{ color: '#7E7E7E' }}>
                              {sme.fields.description}
                            </Text>
                          </div>
                          <div
                            style={{
                              background: '#FFF3DB',
                              padding: '4px 8px',
                              display: 'inline-block',
                              borderRadius: '10px',
                            }}
                          >
                            <span style={{ fontSize: '14px' }}>Food</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="block-sm"
                        style={{ textAlign: 'right', width: '40%' }}
                      >
                        <div style={{ marginTop: '4px' }}>
                          <Text>{sme.fields.location}</Text>
                        </div>
                        <div>
                          <Text style={{ color: '#7E7E7E' }}>
                            {sme.fields.contactNumber}
                          </Text>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              )
            }
          })}
        </div>
      </Container>
    </div>
  )
}

export default Directory
