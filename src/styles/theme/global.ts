import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    // TODO: (sd - screen distance)
    // change this according to the distance of your elements from the screen
    --sd-0: 0.5rem; // ? 8px
    --sd-1: 1rem; // ? 16px
    --sd-2: 1.12rem; // ? 18px
    --sd-3: 1.5rem; // ? 24px
    --sd-4: 3rem; // ? 48px
    --sd-5: 6rem; // ? 96px
    --sd-6: 14.25rem; // ? 228px

    // TODO: (dbe - distance between elements)
    // change this according to the distance between your elements
    --dbe-1: 0.25rem; // ? 4px
    --dbe-2: 0.5rem; // ? 8px
    --dbe-3: 0.62rem; // ? 10px
    --dbe-4: 1rem; // ? 16px
    --dbe-5: 2rem; // ? 32px
    --dbe-6: 1.5rem; // ? 24px

    // TODO: font family
    // switch to the font family of your design
    --font-family: 'Open Sans';

  }
  *,html,body {
    font-family: var(--font-family);
  }
`;
export const breakpoints = {
  // TODO: add your breakpoints here to use them in the application
  sm: 356,
  md: 600,
  lg: 1024,
};
export const ResetStyles = createGlobalStyle`
  :root,
  body {
    font-family: var(--font-family), -apple-system, Arial, sans-serif;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    scroll-behavior: smooth;
    background: var(--background-color, #F2F3F9);
    color: var(--black-default, rgba(0, 0, 0, 0.87));
  }

  html, body, #__next {
    height: 100%;
  }

  @supports (-webkit-touch-callout: none) {
    :root,
    body {
      min-height: -webkit-fill-available;
    }
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-tap-highlight: transparent;
    margin: 0;
    padding: 0;
    border: 0;
  }

  button,
  a {
    cursor: pointer;
    user-select: none;
  }

  a {
    text-decoration: none;
      color: inherit;
  }

  [disabled] {
    cursor: default;
  }

  hr {
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: none;
    margin: 1rem 0;
    background-color: var(--stroke-color, rgba(0, 0, 0, 0.15));
  }
  hr.vertical {
    min-height: unset;
    max-height: unset;
    width: 1px;
    max-width: 1px;
    min-width: 1px;
    margin: 0 1rem;
  }
`;
