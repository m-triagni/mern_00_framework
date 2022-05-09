/*
 * CSS import
 */
import '../styles/globals.scss'
/*
 * Font import
 */


/*
 * React import
 */
import { useEffect } from "react";
/*
 * Next import
 */
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <Head>
        <title>MERN project template</title>
    
        <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico"/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>

        <link href="style.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </> 
  )
}

export default MyApp
