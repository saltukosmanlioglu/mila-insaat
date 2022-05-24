import styled from "styled-components";

export const MultiSlider = styled.section``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const Card = styled.div<{ column: number }>`
  border: 1px solid red;
`;
