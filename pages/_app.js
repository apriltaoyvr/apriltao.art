import { appWithTranslation } from 'next-i18next';
import Global from '../components/utility/globalStyles';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);
