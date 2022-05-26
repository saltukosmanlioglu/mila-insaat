import React, { useRef, useState } from "react";

import Card from "@/components/card";

import * as Styled from "./MultiSlider.styled";
import { MultiSliderProps } from "./types";

const MultiSlider: React.FunctionComponent<MultiSliderProps> = ({
  column,
  data,
}) => {
  const [activePager, setActivePager] = useState<number>(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handlePagerClick = (index: number) => {
    if (wrapperRef?.current) {
      wrapperRef.current.scrollLeft += 100;
    }
    setActivePager(index);
  };

  console.log(wrapperRef);

  return (
    <Styled.MultiSlider>
      <Styled.Wrapper ref={wrapperRef}>
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
      <Styled.Pager isActive={false}>
        {data.slice(0, column).map((pager, index) => (
          <button key={index} onClick={() => handlePagerClick(index)} />
        ))}
      </Styled.Pager>
    </Styled.MultiSlider>
  );
};

export default MultiSlider;
