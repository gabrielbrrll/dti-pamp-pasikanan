import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Container, Meta, Text } from 'components'
import { getStory } from 'utils/airtable'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const story = JSON.parse(
    JSON.stringify(await getStory(context.query.id as string))
  )

  return {
    props: {
      story,
    },
  }
}

// interface IDirectoryContent {
//   sme: {
//     url: {
//       logo: string
//     }
//     title: string
//     preparedBy: string
//     content: string
//   }
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Story = ({ story }: any) => {
  return (
    <div>
      <Meta />

      <Container className="blog-container" style={{ margin: '40px 120px' }}>
        <div style={{ marginBottom: '36px' }}>
          <Link href="/stories">
            <a>
              <span style={{ textDecoration: 'underline' }}>
                Go back to stories list
              </span>
            </a>
          </Link>
        </div>
        <div>
          <div>
            {story?.fields?.headerImage?.[0]?.url ? (
              <img
                style={{ width: '100%', borderRadius: '10px' }}
                src={story?.fields?.headerImage?.[0]?.url}
                alt={story?.fields?.title}
              />
            ) : (
              <img
                height="360px"
                src="/images/pasikatan-logo-black.png"
                alt="pasikatan dti pampanga"
              />
            )}
          </div>
        </div>
        <h1 style={{ marginTop: '48px' }}>{story?.fields?.title}</h1>
        <Text size="sm" style={{ color: '#7E7E7E' }}>
          Prepared By {story?.fields?.writer}
        </Text>
        <div style={{ margin: '36px 0' }}>
          <Text size="sm" format="preformatted">
            {story?.fields?.content}
          </Text>
        </div>
      </Container>
    </div>
  )
}

export default Story
