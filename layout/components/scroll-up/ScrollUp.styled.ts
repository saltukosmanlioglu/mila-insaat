import styled from "styled-components";

export const ScrollUp = styled.div`
  position: fixed;
  right: 2.5rem;
  bottom: 2.5rem;
  z-index: 100;
  animation: scrolUp 0.3s;

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

  @keyframes scrolUp {
    from {
      bottom: 0;
      right: 0;
    }
    to {
      right: 2.5rem;
      bottom: 2.5rem;
    }
  }
`;
