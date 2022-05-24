import React from "react";
import Image from "next/image";
import Link from "next/link";

import ReadMore from "@/components/read-more";

import * as Styled from "./Card.styled";
import { CardProps } from "./types";

const Card: React.FunctionComponent<CardProps> = ({
  alt,
  date,
  description,
  href,
  image,
  title,
}) => {
  return (
    <Styled.Card>
      <Styled.Inclusive>
        <Image alt={alt} layout={"fill"} objectFit="cover" src={image} />
      </Styled.Inclusive>
      <Styled.CardBody>
        <p>{date}</p>
        <Link href={href} passHref>
          <a href={href}>{title}</a>
        </Link>
        <p>
          {description.length > 150
            ? `${description.substring(0, 150).trimEnd()}...`
            : description}
        </p>
      </Styled.CardBody>
      <ReadMore href={href} />
    </Styled.Card>
  );
};

export default Card;
