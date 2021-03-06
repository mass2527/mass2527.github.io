import {RecoilRoot, useRecoilValue} from 'recoil';
import {ThemeProvider} from 'styled-components';

import type {AppProps} from 'next/app';

import {themeState} from 'states/theme';

import {darkTheme, lightTheme} from 'styles';
import GlobalStyles from 'styles/globalStyles';
import Layout from 'components/Layout';

function MyApp({Component, pageProps}: AppProps) {
  const theme = useRecoilValue(themeState);
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={{...selectedTheme, isDarkMode: theme === 'dark'}}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

function AppShell(props: AppProps) {
  return (
    <RecoilRoot>
      <MyApp {...props} />
    </RecoilRoot>
  );
}

export default AppShell;
