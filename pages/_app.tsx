import type {AppProps} from 'next/app';
import Layout from 'components/Layout';
import GlobalStyles from 'styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import {theme} from 'styles';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
