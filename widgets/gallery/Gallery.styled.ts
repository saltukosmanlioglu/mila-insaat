import styled from "styled-components";

import { CategoryType } from "@/components/card-image";

export const Gallery = styled.div`
  overflow: hidden;

  h2 {
    font-size: 40px;
  }
`;

export const FilterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 60px 0;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 768px) {
      margin-top: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const FilterBarButton = styled.button<{
  activeFilter: CategoryType;
  category: CategoryType;
}>`
  p {
    font-size: 15px;
    color: #212121;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;

    hr {
      width: ${({ activeFilter, category }) =>
        activeFilter === category ? "100%" : "5px"};
      color: #212121;

      @media screen and (max-width: 768px) {
        width: ${({ activeFilter, category }) =>
          activeFilter === category ? "100%" : "1px"};
      }
    }
  }

  &:hover div hr {
    transition: 0.5s;
    width: 100%;
  }
`;

export const GalleryWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
