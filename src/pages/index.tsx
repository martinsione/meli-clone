import formatPrice from "@lib/formatPrice";
import Carousel from "@components/Carousel";
import { Stack, StackDivider, Text, Image } from "@chakra-ui/react";

import mock from "./index.mock.json";

export default function Home() {
  return (
    <Stack pb="112px" spacing={10}>
      <Stack mt="-72px">
        <Carousel />
      </Stack>
      <Stack
        bg="white"
        direction="row"
        justifyContent="space-between"
        p="4"
        rounded="md"
      >
        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Tarjeta de crédito</Text>
            <Text color="blue.400" fontSize="14px">
              Ver promociones bancarias
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Cuotas sin tarjeta</Text>
            <Text color="blue.400" fontSize="14px">
              Conocé Mercado Crédito
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Efectivo</Text>
            <Text color="blue.400" fontSize="14px">
              Ver más
            </Text>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Image
            src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
            w="48px"
          />
          <Stack justifyContent="center" lineHeight="0.9">
            <Text fontSize="18px">Tarjeta de crédito</Text>
            <Text color="blue.400" fontSize="14px">
              Ver promociones bancarias
            </Text>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack alignItems="center" direction="row">
          <Text fontSize="26px">Ofertas</Text>
          <Text color="blue.400">Ver todas</Text>
        </Stack>
        <Stack direction="row" spacing={6}>
          {mock.map((item) => (
            <Stack
              key={item.img}
              _hover={{ shadow: "md" }}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src={item.img} />
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">{formatPrice(item.price)}</Text>
                  <Text color="green.400" fontSize="sm">
                    {item.discount}% off
                  </Text>
                </Stack>
                {item.free_shipping && (
                  <Text color="green.400" fontSize="sm" fontWeight="bold">
                    Envío gratis
                  </Text>
                )}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>

      <Stack>
        <Stack alignItems="center" direction="row">
          <Text fontSize="26px">Beneficios de Mercado Puntos</Text>
          <Text color="blue.400">Ver todos los beneficios</Text>
        </Stack>
        <Stack direction="row">
          <Stack borderRadius="md" flex={1} h="250px" overflow="hidden">
            <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbo/widget/hbo-max-mla-mco-mlc@2x.jpg" />
          </Stack>
          <Stack borderRadius="md" flex={1} h="250px" overflow="hidden">
            <Image src="https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/paramount/mla/widget/paramount-widget-mla@2x.jpg" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
