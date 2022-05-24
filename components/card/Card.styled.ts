import styled from "styled-components";

export const Card = styled.div``;

export const Inclusive = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  box-sizing: border-box;

  & img {
    backface-visibility: hidden;
  }

  & img:hover {
    transform: translateX(5px) scale(1.05);
    transition: 0.5s;
  }
  &:not(:hover) img {
    transform: translateX(0) scale(1);
    transition: 0.5s;
  }
`;

export const CardBody = styled.div`
  margin-top: 1.67777rem;

  & p:nth-child(1) {
    margin-bottom: 0.67777rem;
    font-size: 14px;
    font-weight: 500;
    color: #898989;
  }

  & a:nth-child(2) {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    color: #212121;

    &:hover {
      color: #f08923;
      transition: 0.3s;
    }
  }

  & p:nth-child(3) {
    margin: 1.25rem 0;
    font-size: 15px;
    color: #7a7a7a;
  }
`;
