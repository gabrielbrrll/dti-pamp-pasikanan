/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import Airtable from 'airtable'
import { ISme } from '.'

const base = new Airtable({apiKey: 'keyjJLAqGtpqOUwLN'}).base('app3i1GM4OWL0VVZq');


export async function getServerSideProps(context: any) {
  
  const getSme = () => {
    return new Promise((resolve, reject) => {
        base('Table 1').find(context.query.id, function(err, record) {
          if (err) { reject(err) }
          return resolve(record)
      });
    });
  }
  return {
      props: {
          sme: JSON.stringify(await getSme())|| null
      },
  }
}

const Home = ({ sme }: {
  sme: any,
}) => {
  const parsedSme = JSON.parse(sme)
  const { fields } = parsedSme
  return (
    <div className={styles.container}>
      <Head>
        <title>DTI Pasikanan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img height="150" src={fields.Logo[0].url} alt={fields.name} />
        <h3 style={{ marginBottom: '0.5em' }} className={styles.title}>
          {fields.Name}
        </h3>
        <div style={{ marginBottom: '1em' }}>{fields.Introduction}</div>
        <div style={{ marginBottom: '1em' }}>{fields.Description}</div>
        <div style={{ marginBottom: '1em' }}>{fields.Location}</div>
        <div style={{ marginBottom: '1em' }}>{fields.Email}</div>
        <div style={{ marginBottom: '1em' }}>{fields['Contact No.']}</div>
        <Link href="/directory">
          <a>
            <span style={{textDecoration: 'underline'}}>Go back to directory list</span>
          </a>
        </Link>
      </main>

      <footer className={styles.footer}>
        Copyright 2020 DTI / Gulis Digital
      </footer>
    </div>
  )
}

export default Home