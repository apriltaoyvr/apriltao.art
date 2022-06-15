/* Libraries */
import { appWithTranslation } from 'next-i18next';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

/* Styled Components */
import Global from '../components/styles/globalStyles';
import { dracula } from '../components/styles/Themes';

/* Font Awesome
 * FOCU Workaround https://fontawesome.com/docs/web/use-with/react/use-with */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Layout setTheme={setTheme}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

// Wrap the App with the Translation provider
export default appWithTranslation(MyApp);
