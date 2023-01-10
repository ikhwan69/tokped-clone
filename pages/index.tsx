import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="text-center">
        <h1>Home Page</h1>
      </div>
    </div>
  )
}


