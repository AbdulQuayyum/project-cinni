import React from 'react';
import { Toaster } from 'react-hot-toast';
import { GoogleOAuthProvider } from '@react-oauth/google'

import { StateContext } from '@/Context/StateContext';
import MainLayout from '@/Layout/Main.Layout';
import '../Styles/Index.css'
import '../Styles/Style.css'
// import '../Styles/App.scss'

const MyApp = ({ Component, pageProps }) => {
  return (
    <GoogleOAuthProvider
      clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
    >
      <StateContext>
        <MainLayout>
          <Toaster />
          <Component {...pageProps} />
        </MainLayout>
      </StateContext>
    </GoogleOAuthProvider>
  )
}

export default MyApp
