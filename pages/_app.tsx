import type {AppProps} from 'next/app';
import Layout from 'components/Layout';
import GlobalStyles from 'styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import {darkThemeColors, lightThemeColors, theme as commonTheme} from 'styles';

function MyApp({Component, pageProps}: AppProps) {
  const lightTheme = {
    ...commonTheme,
    colors: {...commonTheme.colors, ...lightThemeColors},
  };

  const darkTheme = {
    ...commonTheme,
    colors: {...commonTheme.colors, ...darkThemeColors},
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
