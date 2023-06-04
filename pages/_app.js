import React from 'react';
import { Toaster } from 'react-hot-toast';

import MainLayout from '@/Layout/Main.Layout';
import '../Styles/Index.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <MainLayout>
        <Toaster />
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
