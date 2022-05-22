import { appWithTranslation } from 'next-i18next';
import React, { useState } from 'react';

/* Styled Components */
import { ThemeProvider } from 'styled-components';
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
  faCircle
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithub,
  faBehance,
  faBars,
  faX,
  faArrowLeftLong,
  faPalette,
  faCircle,
);

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dracula);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Component {...pageProps} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
