import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from "next/app"
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router'
import Header from '../components/Navbar/Index';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const NavbarPage = () => {
    if (router.pathname !== '/login' && router.pathname !== '/register') {
      return <Header />
    }
    else null;
  }
  return (
    <SessionProvider session={pageProps.session}>
      <ToastContainer position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      {NavbarPage()}
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
