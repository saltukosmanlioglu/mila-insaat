import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyle from "@/app/global/Global.styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <link rel="shortcut icon" href="/images/logo.jpeg" type="image/jpeg" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default MyApp;
