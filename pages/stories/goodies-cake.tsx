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
    url: '/images/article-3-logo.png',
  },
  title: 'My Tooth Goodies Cakes, Cupcakes and Pastries',
  preparedBy: 'DTI Pampanga',
  content: (
    <div>
      <p>
        Christine Yap Zamora, an HRM graduate, is the owner of My Tooth Goodies
        Cakes, Cupcakes and Pastries. She used to be a regular employee working
        in a private company when she decided to make her dreams into reality,
        that is, putting her passion into business.
      </p>
      <p>
        Way back in 2012, her business started from scratch with only few baking
        tools on hand to be able to bake and sell her products. She sold her
        first products such as cakes and coco macaroons to her friends and
        nearby neighbors with positive feedbacks coming from them. This has
        become the turning point of her business career. In 2016, she decided to
        make her business legal by securing all the necessary business permits,
        which gave birth to her business name My Tooth Goodies Cakes, Cupcakes
        and Pastries. Her products include cakes and pastries with less sugar,
        coco macaroons while her top selling products are carrot cakes and
        banana cakes. She also developed new products like mango pie, Dulce de
        Leche pie and chocolate pie.
      </p>
      <p>
        In 2017, Ms. Zamora was one of the chosen MSMEs to be included in the
        first batch of Kapatid Mentor Me (KMME) program of DTI Pampanga. Through
        KMME, she was able to develop more skills and acquire new knowledge
        about business and entrepreneurship. According to her, the KMME program
        gave her new insights on how to run her business the right way. She was
        thankful that DTI gave her the opportunity to learn the different
        aspects of the business for free. She also attended some seminars and
        joined trade fairs conducted by DTI which help her promote her products.
      </p>
      <p>
        Ms. Zamora also joined different baking competitions in Manila to widen
        her experience. In 2016, two of her cake designs were featured in
        Amazing Cake Ideas, an online cake catalog. Her products were also
        featured in one of the editions of Yummy Magazine.
      </p>
      <p>
        Ms. Zamora was one of the founding members of the Angeles City
        Association of Micro and Small Entrepreneurs (ACAMASE), an association
        of SMEs in Angeles City, Pampanga.
      </p>
      <p>
        Lockdown period, all her branch stores were closed which gave her
        discouragement in running the business. But because of her determination
        to succeed and her deep passion in baking, even the pandemic did not
        stop her from reaching her goals. While on lockdown, she continued
        selling her products online and reorganized her marketing strategies.
        With the help of her family, friends and loyal customers, she was able
        to redeem her business. Her hardwork paid off and her business was back
        on tracked again. In fact, she was able to purchased additional baking
        equipment and machines in her business. Moreover, Ms. Zamora will be
        opening her new shop in Nueva Ecija where she hopes to expand
        operations.
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
              backgroundImage: "url('/images/article-3-1.png')",
              backgroundSize: 'cover',
              height: '328px',
              width: '30%',
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              backgroundImage: "url('/images/article-3-2.png')",
              backgroundSize: 'cover',
              height: '328px',
              width: '30%',
              borderRadius: '10px',
            }}
          />
          <div
            style={{
              backgroundImage: "url('/images/article-3-3.png')",
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
