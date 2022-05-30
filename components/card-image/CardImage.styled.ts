import styled from "styled-components";

export const CardImage = styled.div`
  position: relative;
  height: 300px;
  width: calc((100% / 3) - 20px);

  &:hover a {
    display: flex;
    background-color: #fffffff0;
    transition: 0.3s;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Cover = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

export const Hover = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: none;
  text-align: center;
  align-items: center;
  justify-content: center;

  & div {
    & p {
      transition: 0.3s;
    }

    & p:nth-child(1) {
      color: #898989;
      font-size: 14px;

      &:hover {
        color: #212121;
      }
    }

    & p:nth-child(2) {
      color: #212121;
      font-size: 20px;
      margin-top: 5px;

      &:hover {
        color: #f08923;
        font-weight: 600;
      }
    }
  }
`;
