import React from 'react';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Analytics } from '@vercel/analytics/react'

import { StateContext } from '@/Context/StateContext';
// import MainLayout from '@/Layout/Main.Layout';
import '../Styles/BackToTop.css'
import '../Styles/Index.css'
import '../Styles/Navbar.css'
import '../Styles/StepsLayout.css'
import '../Styles/Style.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <StateContext>
        {/* <MainLayout> */}
        <Toaster />
        <Component {...pageProps} />
        <Analytics />
        {/* </MainLayout> */}
      </StateContext>
    </GoogleOAuthProvider>
  )
}

export default MyApp
