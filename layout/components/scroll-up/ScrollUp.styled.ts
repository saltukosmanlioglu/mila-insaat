import styled from "styled-components";

export const ScrollUp = styled.div`
  position: absolute;
  right: 2.5rem;
  bottom: 2.5rem;
  z-index: 100;

  button {
    width: 40px;
    height: 40px;
    background-color: #000;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;

    &:hover {
      color: #000;
      background-color: #fff;
      border: 0.1px solid #000;
    }
  }
`;
