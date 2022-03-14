import Link from 'next/link'
import { getSme } from 'utils/airtable'
import { ISme } from '@types'
import { GetServerSideProps } from 'next'
import { Container, Meta, Text } from 'components'
import { Key, useState } from 'react'
import { XCircle, ChevronLeft, ChevronRight } from 'react-feather'

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
  const [activeImageUrlIdx, setActiveImageUrlIdx] = useState<
    undefined | number
  >()

  const openFullImage = (imageIdx: number) => {
    setActiveImageUrlIdx(imageIdx)
    setIsPhotoOpen(true)
  }

  const moveImage = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setActiveImageUrlIdx(activeImageUrlIdx! - 1)
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setActiveImageUrlIdx(activeImageUrlIdx! + 1)
    }
  }

  return (
    <div>
      <Meta />

      <Container className="sme-container" style={{ margin: '40px 120px' }}>
        <div style={{ marginBottom: '48px', zIndex: 100 }}>
          <Link href="/directory">
            <a>
              <Text>Go back to directory list</Text>
            </a>
          </Link>
        </div>
        <div
          className="block-sm"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div style={{ zIndex: 1 }}>
            {fields.logo?.length > 0 && (
              <img
                style={{ width: '420px', borderRadius: '10px' }}
                src={fields.logo[0].url}
                alt={fields.name}
              />
            )}
          </div>
          <div className="sme-details" style={{ marginLeft: '72px' }}>
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
        <div style={{ marginTop: '56px' }}>
          <h1>About the business</h1>
        </div>
        <div
          style={{
            marginTop: '48px',
            wordBreak: 'break-all',
            overflowWrap: 'break-word',
          }}
        >
          <Text size="xl" format="preformatted">
            {fields.introduction}
          </Text>
        </div>
        <div style={{ marginTop: '48px' }}>
          <h1>Gallery</h1>
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            <>
              {fields?.gallery?.length > 0 && (
                <>
                  {fields?.gallery.map(
                    (
                      image: {
                        id: Key | null | undefined
                        thumbnails: { large: { url: string } }
                        url: string
                      },
                      idx: number
                    ) => {
                      return (
                        <div
                          onClick={() => openFullImage(idx)}
                          key={image.id}
                          className="hover-opaque gallery-image"
                          style={{
                            cursor: 'pointer',
                            flex: '1 0 21%',
                            marginRight: '20px',
                            height: '250px',
                            marginBottom: '12px',
                            backgroundImage: `url('${image?.thumbnails?.large?.url}')`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '10px',
                          }}
                        />
                      )
                    }
                  )}
                </>
              )}
            </>
          </div>
        </div>
      </Container>
      {isPhotoOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            background: 'rgba(0, 0, 0, 0.9)',
            height: '100vh',
            width: '100vw',
            zIndex: 999,
          }}
        >
          <div
            style={{
              width: '75%',
              margin: '40px auto 0 auto',
              textAlign: 'right',
            }}
          >
            <button
              type="button"
              style={{
                background: 'none',
                outline: 0,
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => {
                setIsPhotoOpen(false)
                setActiveImageUrlIdx(undefined)
              }}
            >
              <XCircle className="hover-opaque" size={32} color="white" />
            </button>
          </div>
          <div
            className="preview-container"
            style={{ margin: '20px auto', width: '70%' }}
          >
            <img
              className="preview-image"
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              src={fields.gallery[activeImageUrlIdx!]?.url}
              alt="image"
              style={{ width: '100%', height: '75vh' }}
            />
          </div>
          <div style={{ justifyContent: 'center', display: 'flex' }}>
            {activeImageUrlIdx !== 0 && (
              <ChevronLeft
                onClick={() => moveImage('left')}
                color="white"
                size={36}
                style={{ cursor: 'pointer' }}
                className="hover-opaque"
              />
            )}
            {activeImageUrlIdx !== fields.gallery.length - 1 && (
              <ChevronRight
                onClick={() => moveImage('right')}
                color="white"
                size={36}
                style={{ cursor: 'pointer' }}
                className="hover-opaque"
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default DirectoryContent
