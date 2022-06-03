import React from "react";

import * as Styled from "./Progress.styled";
import { ProgressProps } from "./types";

const Progress: React.FunctionComponent<ProgressProps> = ({
  percent,
  title,
}) => {
  return (
    <Styled.Progress>
      <div>
        <p>{title}</p>
        <p>{percent}%</p>
      </div>
      <Styled.Bar width={percent}>
        <div />
      </Styled.Bar>
    </Styled.Progress>
  );
};

export default Progress;
