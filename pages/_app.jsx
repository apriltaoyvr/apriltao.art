/* Libraries */
import { appWithTranslation } from 'next-i18next';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

/* Styled Components */
import Global from '../components/styles/globalStyles';
import { dracula } from '../components/styles/Themes';

/* Font Awesome */
// Config and autoAddCss to prevent FOCU
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
<<<<<<< HEAD
      {/* Drill setTheme into Layout */}
      <Layout setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
=======
      {loading ? (
        <LoadingScreen />
      ) : (
        <Layout setTheme={setTheme}>
          <Component {...pageProps} />
        </Layout>
      )}
>>>>>>> parent of e7fb23f (faArrowLeftLong)
    </ThemeProvider>
  );
}

// Wrap the App with the Translation provider
export default appWithTranslation(MyApp);
