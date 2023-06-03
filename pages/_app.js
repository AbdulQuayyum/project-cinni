import Head from 'next/head'
import '../Styles/Index.css'


const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Project Cinni - Your Online Service Assistant</title>
        <meta
          name="description"
          content="Your Online Service Assistant"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
