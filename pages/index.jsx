import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Dashboard } from './components/dashboard'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Autocomplete</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main className={styles.main}>
        <h3>Autocomplete</h3>
        <Dashboard/>
      </main>
      <footer className={styles.footer}>
        <p>Test appliction mock up</p>
      </footer>
    </div>
  )
}
