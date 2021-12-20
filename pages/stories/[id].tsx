import Head from 'next/head'
import Link from 'next/link'
import { ISme } from '@types'
import { GetServerSideProps } from 'next'
import { Container, Text } from 'components'
import { FeaturedStories } from 'components/landing'
import { getSme } from 'utils/airtable'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const sme = JSON.parse(
    JSON.stringify(await getSme(context.query.id as string))
  )

  return {
    props: {
      sme,
    },
  }
}

interface IDirectoryContent {
  sme: ISme
}

const DirectoryContent = ({ sme }: IDirectoryContent) => {
  const { fields } = sme

  return (
    <div>
      <Head>
        <title>DTI Pasikanan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container style={{ margin: '40px 120px' }}>
        <div style={{ marginBottom: '36px' }}>
          <Link href="/directory">
            <a>
              <span style={{ textDecoration: 'underline' }}>
                Go back to directory list
              </span>
            </a>
          </Link>
        </div>
        <div>
          <div>
            {fields.logo?.length > 0 && (
              <img
                style={{ width: '100%', borderRadius: '10px' }}
                src={fields.logo[0].url}
                alt={fields.name}
              />
            )}
          </div>
        </div>
        <h1 style={{ marginTop: '48px' }}>
          Why Aling Lucings is still the best!
        </h1>
        <Text size="sm" style={{ color: '#7E7E7E' }}>
          By Gabriel Ocampo
        </Text>
        <div style={{ margin: '36px 0' }}>
          <Text size="sm" style={{ lineHeight: '36px' }}>
            Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
            amet. Lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
            sit amet.Lorem ipsum dolor sit amet, consectetur adip lorem ipsum
            dolor sit ametLorem ipsum dolor sit amet, consectetur adip lorem
            ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adip
            lorem ipsum dolor sit amet
          </Text>
        </div>
        <div style={{ marginTop: '56px' }}>
          <h2>Related stories</h2>
        </div>
      </Container>
      <div style={{ marginTop: '-160px' }}>
        <FeaturedStories isDescriptionHidden />
      </div>
    </div>
  )
}

export default DirectoryContent
