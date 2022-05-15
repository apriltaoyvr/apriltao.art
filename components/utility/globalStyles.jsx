import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  /** Josh W Comeau CSS Reset **/
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
  }
  /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
  */
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  /** End of CSS Reset **/

  /** Global Styles **/
  :root {
    --bg: hsl(234, 14%, 13%);
    --fg: hsl(60, 30%, 96%);
    --accent: hsl(250, 100%, 75%);
    --disabled: hsl(230, 15%, 50%);
  }

  body {
    background: var(--bg);
    color: var(--fg);
    font-family: 'IBM Plex Mono', 'Fira Code', 'Consolas', monospace;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Font Import */
  @font-face {
    font-family: 'Vartek';
    src: url('https://res.cloudinary.com/dsbhmynmq/raw/upload/v1652501658/April%20Tao/Fonts/Vartek-ExpandedBold_gm8y80.otf') format('opentype');
    font-weight: bolder;
  }

  @font-face {
    font-family: 'Vartek';
    src: url('https://res.cloudinary.com/dsbhmynmq/raw/upload/v1652501658/April%20Tao/Fonts/Vartek-SemiExpandedBold_sduq5b.otf') format('opentype');
    font-weight: bold;
  }
  
  /* Text */
  h1, h2, h3, h4 {
    text-align: center;
    color: var(--accent);
    margin-bottom: 1rem;
  }
  
  h1 {
    font-family: 'Vartek';
    font-weight: bolder;
    font-size: 96px;
  }
  
  h2 {
    font-family: 'Vartek';
    font-weight: bolder;
    font-size: 64px;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--accent);
  }

  h3 {
    font-family: 'Vartek';
    font-weight: bold;
    font-size: 50px;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--accent);
  }

  h4 {
    font-size: 32px;
  }

  h5 {
    font-size: 24px;
  }

  p {
    font-size: 18px;
  }

  a, span, em, strong {
    color: var(--accent);
    text-decoration: none;
  }

  section {
    padding: 5rem 0;
  }
`;

export default Global;
