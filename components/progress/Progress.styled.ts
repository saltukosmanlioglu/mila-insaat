import styled from "styled-components";

export const Progress = styled.div`
  margin-top: 20px;

  & div:nth-child(1) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 17px;
      color: #050505;
    }
  }
`;

export const Bar = styled.div<{ width: string }>`
  width: 100%;
  background-color: #f7f7f7;
  z-index: -1;
  height: 4px;
  margin-top: 12px;

  div {
    height: 4px;
    background-color: #212121;
    width: ${({ width }) => `${width}%`};
    z-index: 1;
  }
`;
