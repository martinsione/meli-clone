/* eslint-disable react/no-array-index-key */
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from "react";
import { Icon, Stack } from "@chakra-ui/react";

interface Props {
  rating: number;
  size: number;
  children?: JSX.Element[] | JSX.Element;
}

export default function Stars({ rating, size, children }: Props) {
  return (
    <Stack direction="row" spacing={1}>
      {Array(5)
        .fill("")
        .map((_, i) =>
          i + 1 <= rating ? (
            <Icon
              key={i}
              as={AiFillStar}
              color="secondary.500"
              height={size}
              width={size}
            />
          ) : (
            <Icon
              key={i}
              as={AiOutlineStar}
              color="gray.300"
              height={size}
              width={size}
            />
          )
        )}{" "}
      {children}
    </Stack>
  );
}
