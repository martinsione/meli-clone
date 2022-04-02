import { FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Stack, Box, Image, Text } from "@chakra-ui/react";

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

  return (
    <Stack direction="row">
      <Stack maxW={292} minW="292">
        <Stack direction="row">
          <Stack
            alignItems="center"
            color="gray.600"
            direction="row"
            divider={<FiChevronRight />}
            flexWrap="wrap"
          >
            {data.filters[0].values[0].path_from_root.map((filter: any) => (
              <Text fontSize="14px">{filter.name} </Text>
            ))}
          </Stack>
        </Stack>
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
        borderRadius="3xl"
        divider={<Box borderColor="gray.200" />}
        flexGrow={1}
        spacing={0}
      >
        {data.results.map((item: any) => (
          <Stack key={item.id} bg="white" direction="row" p="6">
            <Stack h="160px" objectFit="contain" w="160px">
              <Image
                alt={item.title}
                m="auto"
                maxH="100%"
                maxW="100%"
                src={`https://http2.mlstatic.com/D_NQ_NP_${item.thumbnail_id}-V.webp`}
              />
            </Stack>
            <Stack>
              <Text fontSize="20px" fontWeight="thin">
                {item.title}
              </Text>
              <Text fontSize="24px">
                {item.price.toLocaleString("es-ar", {
                  style: "currency",
                  currency: "ARS",
                  maximumFractionDigits: 0,
                })}
              </Text>
              <Text color="whatsapp.600" fontSize="14px" fontWeight="bold">
                {item.shipping.free_shipping ? "Envio gratis" : ""}
              </Text>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
