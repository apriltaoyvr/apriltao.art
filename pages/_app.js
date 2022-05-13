import { appWithTranslation } from 'next-i18next';
import GlobalStyle from '../components/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);
