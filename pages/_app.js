import { appWithTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';

import Global from '../components/utility/globalStyles';
import LoadingScreen from '../components/utility/loading/LoadingScreen';

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 18000);
  }, []);

  return (
    <>
      <Global />
      {loading ? <LoadingScreen/> : <Component {...pageProps} />}
    </>
  )
}

export default appWithTranslation(MyApp);
