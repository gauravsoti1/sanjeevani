// import "../styles/globals.css";
import Head from "next/head";
import { StylesProvider, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import styled, { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
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
            <Component {...pageProps} />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
}

export default MyApp;
