import Link from 'next/link'
import { getSme } from 'utils/airtable'
import { ISme } from '@types'
import { GetServerSideProps } from 'next'
import { Container, Meta, Text } from 'components'
import { useState } from 'react'

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

  const [isPhotoOpen, setIsPhotoOpen] = useState(false)

  return (
    <div>
      <Meta />

      <Container style={{ margin: '40px 120px' }}>
        <div style={{ marginBottom: '48px', zIndex: 100 }}>
          <Link href="/directory">
            <a>
              <Text>Go back to directory list</Text>
            </a>
          </Link>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ zIndex: 1 }}>
            {fields.logo?.length > 0 && (
              <img
                style={{ width: '570px', borderRadius: '10px' }}
                src={fields.logo[0].url}
                alt={fields.name}
              />
            )}
          </div>
          <div style={{ marginLeft: '72px' }}>
            <Text size="4xl" style={{ fontWeight: 600, marginBottom: '0.5em' }}>
              {fields.name}
            </Text>
            <div style={{ margin: '12px 0' }}>
              <Text size="xl">{fields.description}</Text>
            </div>
            <div style={{ margin: '24px 0 12px 0' }}>
              <Text size="sm">{fields.email}</Text>
            </div>
            <div style={{ margin: '12px 0' }}>
              <Text size="sm">{fields.location}</Text>
            </div>
            <div style={{ margin: '12px 0' }}>
              <Text size="sm">{fields.contactNumber}</Text>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '64px' }}>{fields.introduction}</div>
        <div style={{ marginTop: '48px' }}>
          <h1>Gallery</h1>
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((x) => (
              <div
                onClick={() => setIsPhotoOpen(true)}
                key={x}
                style={{
                  width: '24%',
                  height: '250px',
                  marginBottom: '12px',
                  backgroundImage: "url('/images/placeholder.jpeg')",
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '10px',
                }}
              />
            ))}
          </div>
        </div>
      </Container>
      {isPhotoOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            height: '100vh',
            width: '100vw',
          }}
        >
          <div
            style={{
              width: '75%',
              margin: '72px auto 0 auto',
              textAlign: 'right',
            }}
          >
            <button type="button" onClick={() => setIsPhotoOpen(false)}>
              Close
            </button>
          </div>
          <div style={{ margin: '20px auto', width: '75%' }}>
            <img
              src="/images/placeholder.jpeg"
              alt="iamge"
              style={{ width: '100%', height: '75vh' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DirectoryContent
