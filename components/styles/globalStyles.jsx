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
    scroll-behavior: smooth;

    @media (prefers-reduced-motion) {
      scroll-behavior: auto;
    }
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
    user-drag: none;
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
    text-overflow: ellipsis;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  /** End of CSS Reset **/

  /** Global Styles **/
  body {
    background: ${({ theme }) => theme.main.bg};
    color: ${({ theme }) => theme.main.fg};
    font-family: 'IBM Plex Mono', 'Fira Code', 'Consolas', monospace;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.main.bg};
    width: 5px;

    &-thumb  {
      background: ${({ theme }) => theme.main.accent};
    }
  }

  /* Text Select */
  ::selection { 
    color: ${({ theme }) => theme.main.bg};
    background: ${({ theme }) => theme.main.accentSecondary};
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
    color: ${({ theme }) => theme.main.accent};
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
    font-size: 60px;
  }

  h3 {
    font-family: 'Vartek';
    font-weight: bold;
    font-size: 48px;
    color: transparent;
    -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accent};
  }

  h4 {
    font-family: 'Vartek';
    font-size: 34px;
    color: transparent;
    -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accent};
}

  h5 {
    font-size: 24px;
  }

  h6 {
    font-size: 20px;
  }

  p {
    font-size: 16px;
  }

  a, span, em, strong {
    color: ${({ theme }) => theme.main.accent};
    text-decoration: none;
  }

  main {
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export default Global;
