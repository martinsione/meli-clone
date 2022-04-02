import { FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import HelperLupaMeli from "@components/HelperLupaMeli";
import {
  Box,
  Image,
  Link as ChakraLink,
  ListItem,
  Select,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export default function Search() {
  const router = useRouter();
  const query = router.query.q;

  const [data, setData] = useState<any>(null);
  useEffect(() => {
    setData(null);
    axios(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then((res) => setData(res.data))
      .catch((e) => console.error(e));
  }, [query]);

  if (!data) {
    return <div />;
  }

  if (!data.paging.total) {
    return (
      <Box>
        <Stack
          alignItems="center"
          bg="white"
          borderRadius="md"
          direction="row"
          justifyContent="center"
          maxW="container.lg"
          mt="10"
          mx="auto"
          py="12"
          spacing="20"
        >
          <HelperLupaMeli />
          <Box>
            <Text fontSize="24px" fontWeight="bold">
              No hay publicaciones que coincidan con tu búsqueda.
            </Text>
            <UnorderedList fontWeight="thin">
              <ListItem>
                <b>Revisá la ortografía</b> de la palabra.
              </ListItem>
              <ListItem>
                Utilizá <b>palabras más genéricas</b> o menos palabras.
              </ListItem>
              <ListItem>
                <Link href="/">
                  <a>
                    <ChakraLink>Navegá por las categorías </ChakraLink>
                  </a>
                </Link>
                para encontrar un producto similar
              </ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>
    );
  }

  return (
    <Stack spacing="24px">
      <Stack direction="row" justifyContent="space-between">
        <Stack
          alignItems="center"
          color="gray.600"
          direction="row"
          divider={<FiChevronRight />}
          flexWrap="wrap"
          maxW={292}
          minW="292"
        >
          {data.filters[0].values[0].path_from_root.map((filter: any) => (
            <Text fontSize="14px">{filter.name} </Text>
          ))}
        </Stack>
        <Stack alignItems="center" direction="row" spacing="0">
          <Text fontSize="14px" fontWeight="bold" whiteSpace="nowrap">
            Ordenar por
          </Text>
          <Select _focus={{ outline: "none" }} border="none" fontSize="14px">
            <option value={data.sort.id}>{data.sort.name}</option>
            {data.available_sorts.map((filter: any) => (
              <option value={filter.id}>{filter.name}</option>
            ))}
          </Select>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Stack maxW={292} minW="292">
          <Box>
            <Text
              color="gray.800"
              fontSize={26}
              fontWeight="medium"
              textTransform="capitalize"
            >
              {query}
            </Text>
            <Text color="gray.600" fontSize="14px" fontWeight="thin">
              {data.paging.total} resultados
            </Text>
          </Box>
          <Stack spacing={6}>
            {data.available_filters.map((filter: any) => (
              <Box key={filter.id}>
                <Text color="gray.800" fontSize="16px" fontWeight="medium">
                  {filter.name}
                </Text>
                <Stack mt={2} spacing={2}>
                  {filter.values.map((value: any) => (
                    <Text key={value.id} color="gray.600" fontSize="14px">
                      {value.name} ({value.results})
                    </Text>
                  ))}
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack
          borderRadius="4px"
          divider={<Box borderColor="gray.200" />}
          flexGrow={1}
          overflow="hidden"
          shadow="md"
          spacing={0}
        >
          {data.results.map((item: any) => (
            <Stack key={item.id} bg="white" direction="row" p="6">
              <Link href={`/product/${item.id}`}>
                <a>
                  <Stack h="160px" objectFit="contain" w="160px">
                    <Image
                      alt={item.title}
                      m="auto"
                      maxH="100%"
                      maxW="100%"
                      src={`https://http2.mlstatic.com/D_NQ_NP_${item.thumbnail_id}-V.webp`}
                    />
                  </Stack>
                </a>
              </Link>
              <Stack>
                <Link href={`/product/${item.id}`}>
                  <a>
                    <Text fontSize="20px" fontWeight="thin">
                      {item.title}
                    </Text>
                  </a>
                </Link>

                <Link href={`/product/${item.id}`}>
                  <a>
                    <Text fontSize="24px">
                      {item.price.toLocaleString("es-ar", {
                        style: "currency",
                        currency: "ARS",
                        maximumFractionDigits: 0,
                      })}
                    </Text>
                  </a>
                </Link>
                <Text color="whatsapp.600" fontSize="14px" fontWeight="bold">
                  {item.shipping.free_shipping ? "Envio gratis" : ""}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
