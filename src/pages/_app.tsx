import { GlobalStyles, ResetStyles } from '@styles/theme/global';
import { ThemeStyle } from '@styles/theme/theme';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyles />
      <ThemeStyle />
      <GlobalStyles />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
