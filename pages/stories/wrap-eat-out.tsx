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
    url: '/images/article-2-logo.png',
  },
  title: 'Success story of Miss Kathrina Miranda, Owner of Wrap Eat Out',
  preparedBy: 'BC Allan Joseph Cruz',
  content: (
    <div>
      <p>
        Bacolor as we all know is one of the municipalities here in Pampanga
        that was hugely devastated by the eruption of Mt. Pinatubo in the year
        1991. Houses and establishments were buried and sadly many people died
        because of this eruption. As Bacolor rises up from the ashes, so are the
        businesses in the area which is a good sign that the town has woke up
        from the nightmare of the past.
      </p>
      <p>
        One of the businesses that is flourishing in the town of Bacolor is Wrap
        Eat Out Foods, a restaurant that offers wraps and salads from selected
        Japanese, Korean, Thai, Greek, American and Filipino food. It is owned
        by Miss Kathrina Alfonso Miranda, one of recent graduates of Kapatid
        Mentor Me (KMME) Online program of the Department of Trade and Industry.
        Before she decided to enter the world of business, she had been into
        different jobs here and abroad, she also worked in their family-owned
        soft drinks distribution business. One time, her friend offered her to
        be a business partner in a food park business in Angeles City but she
        decided to put up her own business instead and from there she came up
        with her Wrap Eat Out food business. Without any fear of trying
        something new, she opened two stalls in the food park but unfortunately
        sales did not go well, so she decided to close both stalls.
      </p>
      <p>
        Even if she already closed both her stalls in the food park, customers
        would always ask for her products and that is the reason why she decided
        to open up a store in their vacant lot in Bacolor in 2018. Ms. Miranda
        proudly said that they create their own sauces and meats to their
        products which make them unique and healthy that customers would not be
        able to find the same taste from other restaurants. She also proudly
        said that they are the one who first introduced the Bottled Tsokolateng
        Batirol.
      </p>
      <p>
        Being new into business, the Department of Trade and Industry played an
        important role in her journey as an entrepreneur. DTI was able to
        provide assistance from business name registration, to business related
        concerns like Trademark application, referral to partner agencies like
        DOST for their SET-UP program and being one of the mentees in the
        Kapatid Mentor Me (KMME) Online Program where she became the top notcher
        in their batch. As part of their Corporate Social Responsibility, Ms.
        Miranda shared that she hires employees who are living within Bacolor
        and nearby areas to at least help her kababayans earn a living
        especially those who lost their jobs because of the pandemic. As way of
        helping the Mother Nature, Wrap Eat Out uses environment friendly
        materials in their packaging, a good move to show to everyone their
        concern to the growing environmental problems. They want to encourage
        people and other businesses not to use plastic but rather use
        environment-friendly materials because these are safe to use even if
        these are quite expensive.
      </p>
      <div
        style={{
          backgroundImage: "url('/images/article-2-3.jpeg')",
          backgroundSize: 'cover',
          height: '600px',
          width: '100%',
          borderRadius: '10px',
        }}
      />
      <p>
        This year Ms. Miranda plans to expand the reach of Wrap Eat Out Foods to
        serve more customers by opening a branch in Angeles City because Bacolor
        is quite far to some of her customers. They also have pending
        application to DOST Set-UP Program in compliance with proper handling of
        products and safety precautions in machineries since they are planning
        to have their own production facility.
      </p>
      <p>
        Ms. Miranda fearlessly entered the food business and just like any other
        entrepreneurs, she encountered different problems along the way which
        made her want to close doors of opportunity in the business world. But
        there are a lot of people who believe in her and their products and they
        are the ones who encourage her to open windows to new beginnings.
      </p>
      <p>
        Like the town of Bacolor which had experienced downfall , Wrap Eat Out
        Foods had also its share of struggles and downfall in the business but
        the most important thing is that whatever kind of hurdles they may face,
        they will never let themselves stucked in that situation. They rise up
        and will continue to face every trials they may encounter in order to
        achieve their goals. Finally, Ms, Miranda shared a piece of advice to
        those who wanted to start their own business. She said “Do not be
        afraid, problems are always there but don’t ever give up for you to
        reach your goals.”
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
              backgroundImage: "url('/images/article-2-1.jpeg')",
              backgroundSize: 'cover',
              height: '328px',
              width: '30%',
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              backgroundImage: "url('/images/article-2-2.jpeg')",
              backgroundSize: 'cover',
              height: '328px',
              width: '30%',
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              backgroundImage: "url('/images/article-2-3.jpeg')",
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
