import { MdKeyboardArrowDown } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Container,
  Icon,
  Input,
  Image,
  Stack,
  FormControl,
  StackDivider,
  Text,
} from "@chakra-ui/react";

export default function Nav() {
  const [value, setValue] = useState("");
  const router = useRouter();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push(`/search?q=${value}`);
  }

  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingY={2}>
        <Container maxWidth="container.xl" paddingX={0}>
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image
                  height={34}
                  objectFit="contain"
                  src="/img/logo.png"
                  width={134}
                />
                <FormControl>
                  <form onSubmit={handleSubmit}>
                    <Stack
                      alignItems="center"
                      backgroundColor="white"
                      borderRadius="sm"
                      boxShadow="sm"
                      direction="row"
                      divider={<StackDivider />}
                      maxWidth={600}
                      padding={2}
                      rounded="sm"
                      width="100%"
                    >
                      <Input
                        _placeholder={{ color: "gray.400" }}
                        paddingX={2}
                        placeholder="Buscar productos, marcas y más..."
                        px={2}
                        value={value}
                        variant="unstyled"
                        onChange={(e) => setValue(e.target.value)}
                      />
                      <Icon
                        as={AiOutlineSearch}
                        color="gray.400"
                        height={5}
                        width={5}
                      />
                    </Stack>
                  </form>
                </FormControl>
              </Stack>
              <Stack alignItems="center" direction="row">
                <Image height={10} src="/img/envios-gratis.webp" width={340} />
              </Stack>
            </Stack>
            <Stack
              alignItems="baseline"
              direction="row"
              justifyContent="space-between"
            >
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                  width={150}
                >
                  <Icon
                    as={GoLocation}
                    color="blackAlpha.600"
                    height={6}
                    width={5}
                  />
                  <Stack spacing={0}>
                    <Text
                      color="blackAlpha.700"
                      fontSize="xs"
                      lineHeight="shorter"
                    >
                      Enviar a
                    </Text>
                    <Text fontSize="sm" lineHeight="shorter">
                      Capital Federal
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  color="blackAlpha.700"
                  direction="row"
                  fontSize="sm"
                  spacing={5}
                >
                  <Text cursor="pointer">
                    Categorias <Icon as={MdKeyboardArrowDown} />
                  </Text>
                  <Text cursor="pointer">Ofertas</Text>
                  <Text cursor="pointer">Historial</Text>
                  <Text cursor="pointer">Supermercado</Text>
                  <Text cursor="pointer">Moda</Text>
                  <Text cursor="pointer">Vender</Text>
                  <Text cursor="pointer">Ayuda</Text>
                </Stack>
              </Stack>
              <Stack direction="row" fontSize="sm" spacing={6}>
                <Text cursor="pointer">Creá tu cuenta</Text>
                <Text cursor="pointer">Ingresá</Text>
                <Text cursor="pointer">Compras</Text>
                <Icon
                  as={BsCart2}
                  color="blackAlpha.700"
                  height={5}
                  spacing={3}
                  width={5}
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
