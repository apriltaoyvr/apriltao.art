/* Libs */
import { appWithTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

/* Styled Components */
import Global from '../components/styles/globalStyles';
import { dracula } from '../components/styles/Themes';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faX,
  faArrowLeftLong,
  faPalette,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithub,
  faBehance,
  faBars,
  faX,
  faArrowLeftLong,
  faPalette,
  faCircle
);

/* Components */
import Layout from '../components/utility/layout';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dracula);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Layout setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
