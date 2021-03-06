import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { Container, Meta, Text } from 'components'
// import { FeaturedStories } from 'components/landing'
// import { getSme } from 'utils/airtable'

export const getServerSideProps: GetServerSideProps = async () => {
  // const sme = JSON.parse(
  //   JSON.stringify(await getSme(context.query.id as string))
  // )

  return {
    props: {
      sme: {},
    },
  }
}

const sme = {
  logo: {
    url: '/images/article-1-logo.png',
  },
  title: "Samuel's Bakes and Delicacies",
  preparedBy: 'DTI Pampanga',
  content: (
    <div>
      <p>
        The business started in 2016 back in Abu Dhabi. However, it was in 2018
        when they started in the Philippines and registered it with DTI with the
        business name SAMUEL’S BAKES AND DELICACIES, owned by Mr. Jamcy P.
        Lingat. Jamcy and his wife Katrina were both in the corporate world and
        at the same time manage their business.
      </p>
      <p>
        They thought of birthing Samuel’s because they want their passion in
        baking be translated into financial opportunity. Mr. Lingat also said,
        “Be the owner of a company or business and not as an employee only.
      </p>
      <p>
        The flagship product is their Queso Pastillas Chiffon Cake. They
        incorporated the Filipino favorite pastillas in a delicate baked
        product-Chiffon. In addition, they established a unique brand of custom
        cakes that are popularly known as #tatakSamuels.
      </p>
      <p>
        Through DTI, their network expanded via Trade Fairs and Bazaar. It was
        through the seminars, workshop and classes especially the Kapatid Mentor
        ME (KMME) Program, where they learned important business concepts in
        improving their business operations and entrepreneurship in general.
      </p>
      <p>
        At this moment, Samuel’s Bakes and Delicacies is not affiliated to any
        registered or recognized association. However, they have baking group
        membership both Provincial and National Level.
      </p>
      <p>
        Because of the traffic of their orders, they hire helpers from the
        community. Especially during the peak seasons, they employ people within
        their area. This serves as their corporate social initiative in
        providing help to people within the area through employment. They also
        support and buy local from suppliers within their town, “Livelihood
        supporting livelihood” he added. As per environment care, they also are
        responsible in their own bakery garbage maintenance and segregation plus
        the implementation of recycling of materials post usage into home items.
      </p>
      <p>
        Resilience and survival amidst the pandemic is their immediate goal.
        Increase in sales, expansion of clients and more unique products to
        target a larger market, which will translate to increasing of their
        income eventually has been their driving motivation. Mr. Lingat stated
        an advise to the aspiring businessman as well, “Find your passion. Excel
        in it. Pray for the Lord’s wisdom and leading. Don’t be afraid of
        calculated risks. Start now!”.
      </p>
    </div>
  ),
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

const DirectoryContent = () => {
  return (
    <div>
      <Meta />

      <Container style={{ margin: '40px 120px' }}>
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
            {sme?.logo.url && (
              <img
                style={{ width: '100%', borderRadius: '10px' }}
                src={sme.logo.url}
                alt={sme.title}
              />
            )}
          </div>
        </div>
        <h1 style={{ marginTop: '48px' }}>{sme?.title}</h1>
        <Text size="sm" style={{ color: '#7E7E7E' }}>
          Prepared By {sme?.preparedBy}
        </Text>
        <div style={{ margin: '36px 0' }}>
          <Text size="sm" style={{ lineHeight: '36px' }}>
            {sme?.content}
          </Text>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{
              backgroundImage: "url('/images/article-3-1.jpeg')",
              backgroundSize: 'cover',
              height: '328px',
              width: '30%',
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              backgroundImage: "url('/images/article-3-2.jpeg')",
              backgroundSize: 'cover',
              height: '328px',
              width: '30%',
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              backgroundImage: "url('/images/article-3-3.jpeg')",
              backgroundSize: 'cover',
              height: '328px',
              width: '30%',
              borderRadius: '10px',
            }}
          />
        </div>
        {/* <div style={{ marginTop: '56px' }}>
          <h2>Related stories</h2>
        </div> */}
      </Container>
    </div>
  )
}

export default DirectoryContent
