import { useEffect } from 'react';
import DefaultSeo from '../components/DefaultSeo';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {





  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <>
  <DefaultSeo/>
   <Component {...pageProps} />
  </>
}

export default MyApp
