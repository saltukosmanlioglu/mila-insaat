import React from "react";

import Card from "@/components/card";

import * as Styled from "./MultiSlider.styled";
import { MultiSliderProps } from "./types";

const MultiSlider: React.FunctionComponent<MultiSliderProps> = ({
  column,
  data,
}) => {
  return (
    <Styled.MultiSlider>
      <Styled.Wrapper>
        {data
          ? data.map((card, index) => (
              <Card
                key={index}
                alt={card.alt}
                date={card.date}
                description={card.description}
                href={card.href}
                image={card.image}
                title={card.title}
              />
            ))
          : null}
      </Styled.Wrapper>
    </Styled.MultiSlider>
  );
};

export default MultiSlider;
