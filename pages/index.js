import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TabContent from '../components/tabcontent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mantine Component Testing</title>
        <meta name="description" content="Mantine Component Testing Michael Simon AZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TabContent />
      </main>

    </div>
  )
}
