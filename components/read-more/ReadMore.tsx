import React from "react";
import Link from "next/link";

import FcHeadset from "react-icons/fc";

import * as Styled from "./ReadMore.styled";
import { ReadMoreProps } from "./types";

const ReadMore: React.FunctionComponent<ReadMoreProps> = ({ href }) => {
  return (
    <Link href={href} passHref>
      <Styled.ReadMore href={href}>
        <p>Read More</p>
        {/* <FcHeadset /> */}
      </Styled.ReadMore>
    </Link>
  );
};

export default ReadMore;
