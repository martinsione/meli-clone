import { Box, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="white" py="8px">
      <Stack maxW="container.xl" mx="auto" spacing={0}>
        <Stack direction="row" fontSize="13px" spacing={5}>
          <Text>Trabajá con nosotros</Text>
          <Text>Términos y condiciones</Text>
          <Text>Cómo cuidamos tu privacidad</Text>
          <Text>Información al usuario financiero</Text>
          <Text>Defensa del Consumidor</Text>
          <Text>Información sobre seguros</Text>
        </Stack>
        <Text color="blackAlpha.600" fontSize="12px">
          Copyright © 1999-2022 MercadoLibre S.R.L.
        </Text>
        <Text color="blackAlpha.600" fontSize="12px">
          Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA
        </Text>
      </Stack>
    </Box>
  );
}
