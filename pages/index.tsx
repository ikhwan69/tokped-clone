import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {getSession, useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>
      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}

//Guest
function Guest() {
  return (
    <main className="container py-20 mx-auto text-center">
      <h3 className='text-4xl font-bold'>Guest Homepage</h3>
      <div className='flex justify-center'>
        <Link className='px-10 py-1 mt-5 bg-indigo-500 rounded-sm text-gray-50' href={'/login'}>Sign In</Link>
      </div>
    </main>
  )
}
//Authorize User
function User({ session, handleSignOut }) {
  return (
    <main className="container py-20 mx-auto text-center">
      <h3 className='text-4xl font-bold'>Admin Dashboard </h3>

      <div className='details'>
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button onClick={handleSignOut} className='px-10 py-1 mt-5 bg-indigo-500 rounded-sm bg-gray-50'>Sign Out</button>
      </div>

      <div className='flex justify-center'>
        <Link className="className='px-10 py-1 mt-5 bg-indigo-500 rounded-sm text-gray-50'" href={'/profile'}> Profile Page</Link>
      </div>
    </main>
  )
}



//Protect Route
//getSession untuk mengambil object dan metode ini sangat berguna untuk ke database
export async function getServerSideProps({ req }){
  const session = await getSession({ req })

  if(!session){
    return {
      redirect : {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}