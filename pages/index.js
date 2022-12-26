import Head from 'next/head'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-hero w-100 h-100">
      <Head>
        <title>Home Page</title>
      </Head>

      <main className="">
          <h1 className="text-3xl font-bold underline">
              Hello world!
          </h1>
      </main>
    </div>
  )
}
