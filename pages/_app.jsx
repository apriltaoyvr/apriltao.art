import { appWithTranslation } from 'next-i18next';
import Global from '../components/utility/globalStyles';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faBehance } from '@fortawesome/free-brands-svg-icons'
import { faBars, faX, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub, faBehance, faBars, faX, faArrowLeftLong);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp);
