import ThemeInterface from "@components/styledComponents/theme";
import App, { Container, NextAppContext } from "next/app";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";


const theme: ThemeInterface = {
  color: {
    black: "#0c0c0e",
    // tslint:disable-next-line: object-literal-sort-keys
    almostBlack: "#26353f",

    blueLight: "#2263FF",
    blue: "#0063FF",

    greyLight: "#EEEEEE",
    greyDark: "#666666",
    greyDarker: "#4A4A4A",

    white: "#FFFFFF"
  },

  // tslint:disable-next-line: object-literal-sort-keys
  fontSize: {
    xxs: "12px",
    // tslint:disable-next-line: object-literal-sort-keys
    xs: "14px",
    base: "16px",
    xl: "18px",
    xxl: "20px",
  }

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
