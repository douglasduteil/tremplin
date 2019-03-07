import App, { Container, NextAppContext } from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const theme = {
};

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    font-family: Roboto;
  }
`

export default class MyApp extends App {

  public static async getInitialProps(nextAppContext: NextAppContext) {
    let pageProps = {};

    const ctx = nextAppContext.ctx;
    const Component = nextAppContext.Component;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle></GlobalStyle>
            <Component {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
