import React from "react";
import App from "next/app";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/utils/theme";
import "../styles/utils/main.scss";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default withApollo(MyApp, { getDataFromTree });
