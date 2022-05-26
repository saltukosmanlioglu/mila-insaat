import styled from "styled-components";

export const MultiSlider = styled.section``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
`;

export const Pager = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 16px;

  button {
    width: 8px;
    height: 8px;
    background-color: ${({ isActive }) => (isActive ? "#050505" : "#ced4da")};
    transform: rotate(45deg);
  }
`;
