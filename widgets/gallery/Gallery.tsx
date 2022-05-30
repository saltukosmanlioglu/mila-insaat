import React, { useState } from "react";

import CardImage, { CategoryType } from "@/components/card-image";

import * as Styled from "./Gallery.styled";
import { GalleryProps } from "./types";
import { filterBar } from "./constants";

const Gallery: React.FunctionComponent<GalleryProps> = ({ gallery }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>("All");

  return (
    <Styled.Gallery>
      <h2>Featured Works</h2>
      <Styled.FilterBar>
        <p>Suspendisse ligula ex pulvinar quis lorem vitae varius</p>
        <div>
          {filterBar.map((filter, index) => (
            <Styled.FilterBarButton
              key={index}
              activeFilter={filter.text}
              category={activeFilter}
              onClick={() => setActiveFilter(filter.text)}
            >
              <p>{filter.text}</p>
              <div>
                <hr />
              </div>
            </Styled.FilterBarButton>
          ))}
        </div>
      </Styled.FilterBar>
      <Styled.GalleryWrap>
        {(activeFilter === "All"
          ? gallery
          : gallery.filter((f) => f.category === activeFilter)
        ).map((picture, index) => (
          <CardImage
            key={index}
            category={picture.category}
            href={picture.href}
            image={picture.image}
            title={picture.title}
          />
        ))}
      </Styled.GalleryWrap>
    </Styled.Gallery>
  );
};

export default Gallery;
