import { Box, BoxProps } from "@chakra-ui/react";

type Props = {
  active?: boolean;
  colorScheme: string;
} & BoxProps;

export default function RepBar(props: Props) {
  const { active, colorScheme, ...rest } = props;
  const [size, color] = active
    ? [3, `${colorScheme}.500`]
    : [2, `${colorScheme}.100`];

  return <Box bgColor={color} flex={1} height={size} {...rest} />;
}
