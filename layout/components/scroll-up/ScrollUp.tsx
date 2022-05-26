import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

import * as Styled from "./ScrollUp.styled";

const ScrollUp: React.FunctionComponent = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window && window.scrollY > 350 ? setVisible(true) : setVisible(false);
    });
  }, []);

  return visible ? (
    <Styled.ScrollUp>
      <button onClick={handleClick}>
        <HiArrowUp size="18" />
      </button>
    </Styled.ScrollUp>
  ) : null;
};

export default ScrollUp;
