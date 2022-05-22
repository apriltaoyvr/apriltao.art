import { appWithTranslation } from 'next-i18next';
import React, { useState } from 'react';

/* Styled Components */
import { ThemeProvider } from 'styled-components';
import Global from '../components/styles/globalStyles';
import { darkTheme } from '../components/styles/Themes';

/* Font Awesome */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faX,
  faArrowLeftLong,
} from '@fortawesome/free-solid-svg-icons';

library.add(faGithub, faBehance, faBars, faX, faArrowLeftLong);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Global />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
