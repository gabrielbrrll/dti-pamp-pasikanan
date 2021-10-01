import type { GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Airtable from 'airtable'
import styles from '../../styles/Home.module.css'

export const base = new Airtable({apiKey: 'keyjJLAqGtpqOUwLN'}).base('app3i1GM4OWL0VVZq');

const getSmes = () => {
  const smes = [] as any

  return new Promise((resolve, reject) => {
    base('Table 1').select({
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            smes.push(record)
        });

        fetchNextPage();

    }, 
    function done(err) {
      if (err) return reject(err);

      return resolve(smes);
    });
  });
}

export async function getStaticProps() {
  return {
    props: {
      smes: JSON.stringify(await getSmes()),
    },
  };
}

type TThumbnail = {
  height: number
  url: string
  width: number
}

type TLogo = {
  filename: string
  height: number
  id: string
  size: number
  thumbnails: {
    full: TThumbnail,
    large: TThumbnail,
    small: TThumbnail
  },
  type: string
  url: string
  width: number
}

type TFields = {
  'Contact No.': number,
  Description: string,
  Email: string,
  Introduction: string,
  Location: string,
  Logo: TLogo[],
  Name: string
}

export interface ISme {
  id: string
  fields: TFields
  _rawJson: {
    id: string
    createdTime: string
    fields: TFields
  }
  _table: {
    id?: string
    name: string
    _base: {
      _airtable?: {},
      _id: string
    }
  }
}

const Home: NextPage = (props: any) => {
  const smes = JSON.parse(props.smes)
  return (
    <div className={styles.container}>
      <Head>
        <title>DTI Pasikanan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Link href="/">
          <a>
            <span style={{textDecoration: 'underline'}}>Back to homepage</span>
          </a>
        </Link>
        <h3 className={styles.title}>
          SME Names here
        </h3>
        {smes.map((sme: ISme) => (  
          <Link key={sme.id} href={`/directory/${sme.id}`}>
            <a>
              <span style={{textDecoration: 'underline'}}>{sme.fields.Name}</span>
            </a>
          </Link>
        ))}
      </main>

      <footer className={styles.footer}>
        Copyright 2020 DTI / Gulis Digital
      </footer>
    </div>
  )
}

export default Home