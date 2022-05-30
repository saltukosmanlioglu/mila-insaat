import React from "react";
import Image from "next/image";
import Link from "next/link";

import * as Styled from "./CardImage.styled";
import { CardImageProps } from "./types";

const CardImage: React.FunctionComponent<CardImageProps> = ({
  category,
  href,
  image,
  title,
}) => {
  return (
    <Styled.CardImage>
      <Styled.Cover>
        <Image
          alt={"Gallery image 1"}
          layout={"fill"}
          objectFit={"cover"}
          priority
          src={image}
        />
      </Styled.Cover>
      <Link href={href} passHref>
        <Styled.Hover href={href}>
          <div>
            <p>{category}</p>
            <p>{title}</p>
          </div>
        </Styled.Hover>
      </Link>
    </Styled.CardImage>
  );
};

export default CardImage;
