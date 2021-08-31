// import "../styles/globals.css";
import Head from 'next/head';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { Provider } from 'next-auth/client';
import 'simplemde/dist/simplemde.min.css';
import Header from '../components/Header';
import WhatsappFAB from '../components/WhatsappFAB';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);
  });

  return (
    <>
      <Head>
        <title>Sanjeevani Super Speciality Hospital</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Sanjeevani Plus Hospital is one of the leading specialty orthopedics units running successfully for over 6 yrs. We offer planned orthopedics surgery to people locally, nationally and internationally."
        />
      </Head>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Provider session={pageProps.session}>
              <Container>
                <Header />
                <Component {...pageProps} />
                <WhatsappFAB />
              </Container>
            </Provider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
}

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;

export default MyApp;
