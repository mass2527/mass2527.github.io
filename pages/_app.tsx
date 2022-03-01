import type {AppProps} from 'next/app';
import Layout from 'components/Layout';
import GlobalStyles from 'styles/globalStyles';
import {ThemeProvider} from 'styled-components';
import {RecoilRoot, useRecoilValue} from 'recoil';
import {lightTheme, darkTheme} from 'styles';
import {themeState} from 'states/theme';

function MyApp({Component, pageProps}: AppProps) {
  const theme = useRecoilValue(themeState);
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
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
