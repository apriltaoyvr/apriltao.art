/* Libs */
import { appWithTranslation } from 'next-i18next';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

/* Components */
import LoadingScreen from '../components/utility/LoadingScreen';

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

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dracula);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      {loading === false ? (
        <Component {...pageProps} setTheme={setTheme} />
      ) : (
        <LoadingScreen />
      )}
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
