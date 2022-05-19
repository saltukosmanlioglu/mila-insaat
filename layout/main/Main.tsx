import React from "react";
import Head from "next/head";

import { MainProps } from "./types";
import Header from "../components/header";
import Footer from "../components/footer";

const Main: React.FunctionComponent<MainProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Mila İnşaat {title}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Main;
