import { IoHeart, IoHeartOutline, IoReturnDownBack } from "react-icons/io5";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { BsTruck } from "react-icons/bs";
import { BiTrophy } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { useState } from "react";
import formatPrice from "@lib/formatPrice";
import {
  Heading,
  Icon,
  Stack,
  Text,
  StackDivider,
  Button,
} from "@chakra-ui/react";

import Stock from "./Stock";
import Stars from "./Stars";

interface Props {
  available_quantity: number;
  buying_mode: string;
  condition: string;
  price: number;
  sold_quantity: number;
  title: string;
  reviews: any;
}

export default function Price({
  available_quantity,
  buying_mode,
  condition,
  price,
  reviews,
  sold_quantity,
  title,
}: Props) {
  const [fav, setFav] = useState(false);

  return (
    <Stack borderRadius="lg" borderWidth="1px" px="4" py="6" spacing="5">
      <Stack
        color="blackAlpha.700"
        direction="row"
        divider={<StackDivider />}
        fontSize="smaller"
      >
        <Text>{condition === "new" ? "Nuevo" : "Usado"}</Text>
        <Text>{sold_quantity} vendidos</Text>
      </Stack>

      <Stack
        alignItems="flex-start"
        direction="row"
        justifyContent="space-between"
        spacing={6}
      >
        <Heading as="h1" fontSize="2xl">
          {title}
        </Heading>
        <Icon
          as={fav ? IoHeart : IoHeartOutline}
          color="secondary.500"
          cursor="pointer"
          height={7}
          width={7}
          onClick={() => setFav(!fav)}
        />
      </Stack>
      <Stars rating={4} size={5}>
        <Text color="blackAlpha.700" fontSize="sm" pl={2}>
          {reviews.length} {reviews.length > 1 ? "opiniones" : "opinion"}
        </Text>
      </Stars>
      <Stack lineHeight="normal" spacing="0">
        <Text fontSize="4xl" fontWeight={200}>
          {formatPrice(price)}
        </Text>
        <Text fontSize="18px">en 12x {formatPrice((price * 1.7) / 12)}</Text>
        <Text color="secondary.400" fontSize="sm">
          Ver los medios de pago
        </Text>
      </Stack>

      <Stack color="blackAlpha.600" fontSize="sm" spacing="0">
        <Stack alignItems="center" direction="row">
          <Icon as={BsTruck} color="green.400" height={5} width={5} />
          <Text color="green.400" fontSize="md">
            Llega gratis <b>mañana</b>
          </Text>
        </Stack>
        <Text pl="28px">Solo en CABA y zonas de GBA</Text>
        <Text pl="28px">Beneficio Mercado Puntos</Text>
        <Text color="secondary.400" pl="28px">
          Ver más formas de entrega
        </Text>
      </Stack>

      <Stack color="blackAlpha.600" fontSize="sm" spacing="0">
        <Stack alignItems="center" direction="row">
          <Icon as={AiOutlineShop} color="green.400" height={5} width={5} />
          <Text color="green.400" fontSize="md">
            Retira gratis <b>mañana</b>
          </Text>
        </Stack>
        <Text color="secondary.400" pl="28px">
          Ver en el mapa
        </Text>
      </Stack>

      <Stack>
        <Stock stock={available_quantity} />
      </Stack>

      <Stack>
        <Button colorScheme="secondary" size="lg" variant="solid">
          {buying_mode === "buy_it_now" ? "Comprar ahora" : "Comprar"}
        </Button>
        <Button colorScheme="secondary" size="lg" variant="ghost">
          Agregar al carrito
        </Button>
      </Stack>

      <Stack
        alignItems="flex-start"
        color="blackAlpha.600"
        fontSize="sm"
        justifyContent="center"
        lineHeight="120%"
        spacing={5}
      >
        <Stack alignItems="flex-start" direction="row">
          <Icon as={IoReturnDownBack} height={4} width={4} />
          <Text>
            <Text as="span" color="secondary.400">
              Devolución gratis
            </Text>
            . Tenés 30 días desde que lo recibís.
          </Text>
        </Stack>

        <Stack alignItems="flex-start" direction="row">
          <Icon as={HiOutlineShieldCheck} height={4} width={4} />
          <Text>
            <Text as="span" color="secondary.400">
              Compra Protegida
            </Text>
            , recibí el producto que esperabas o te devolvemos tu dinero.
          </Text>
        </Stack>

        <Stack alignItems="flex-start" direction="row">
          <Icon as={BiTrophy} height={4} width={4} />
          <Text>
            <Text as="span" color="secondary.400">
              Mercado Puntos
            </Text>
            . Sumás 320 puntos.
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
