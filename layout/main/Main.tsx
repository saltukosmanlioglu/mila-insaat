import React from "react";
import Head from "next/head";

import Footer from "@/layout/components/footer";
import Header from "@/layout/components/header";
import ScrollUp from "@/layout/components/scroll-up";

import * as Styled from "./Main.styled";
import { MainProps } from "./types";

const Main: React.FunctionComponent<MainProps> = ({ children, title }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Mila İnşaat {title}</title>
      </Head>
      <Header />
      <Styled.Main>{children}</Styled.Main>
      <Footer />
      <ScrollUp />
    </React.Fragment>
  );
};

export default Main;
