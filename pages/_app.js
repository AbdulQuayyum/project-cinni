import React from 'react';
import { Toaster } from 'react-hot-toast';

import { StateContext } from '@/Context/StateContext';
import MainLayout from '@/Layout/Main.Layout';
import '../Styles/Index.css'
import '../Styles/Style.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <StateContext>
      <MainLayout>
        <Toaster />
        <Component {...pageProps} />
      </MainLayout>
    </StateContext>
  )
}

export default MyApp
