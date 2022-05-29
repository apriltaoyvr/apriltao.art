/* Libs */
import { appWithTranslation } from 'next-i18next';
import React, { useState, useEffect } from 'react';
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
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faX,
  faArrowLeftLong,
  faPalette,
  faCircle,
  faBehance,
  faGithub,
  faGlobe
);

/* Components */
import Layout from '../components/utility/Layout';
import LoadingScreen from '../components/utility/LoadingScreen';

function MyApp({ Component, pageProps }) {
  // Default to Dracula theme
  let savedTheme = dracula;

  // Check if theme is saved in localStorage
  if (typeof window !== 'undefined') {
    try {
      savedTheme = window.localStorage.getItem('theme');
      if (savedTheme) savedTheme = JSON.parse(savedTheme);
    } catch {
      window.localStorage.removeItem('theme');
    }
  }
  const [theme, setTheme] = useState(savedTheme ?? dracula);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 750);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      {loading ? (
        <LoadingScreen />
      ) : (
        <Layout setTheme={setTheme}>
          <Component {...pageProps} />
        </Layout>
      )}
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
