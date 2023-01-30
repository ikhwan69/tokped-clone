import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Heroes from '../components/Heroes/Heroes'
import HeroesSlider from '../components/Heroes/HeroesSlider'
import Header from '../components/Navbar/Header'
import Navbar from '../components/Navbar/Navbar'
import TabCategory from '../components/Tab/TabCategory'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <main className='relative h-[200vh] bg-[#ffffff]'>
        <Navbar />
        {/* <Heroes /> */}
        {/* <HeroesSlider /> */}
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]'>
        <div className="py-16 space-y-10">
          <h1 className="text-4xl font-medium  text-center text-white md:text-5xl">
            New Promos
          </h1>
          <TabCategory />
        </div>
      </section>
    </div>
  )
}

// Backend Code

export const getServerSideProps: GetServerSideProps = async () => {

  // const categories = await fetchCategories()
  return {
    props: {},
  }
}


