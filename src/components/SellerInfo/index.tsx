import { RiTimerLine, RiChat4Line } from "react-icons/ri";
import { GoLocation } from "react-icons/go";
import { FaMedal } from "react-icons/fa";
import SellerStat from "@components/SellerInfo/SellerStat";
import RepBar from "@components/SellerInfo/RepBar";
import { Icon, Stack, StackDivider, Text } from "@chakra-ui/react";

interface Props {
  seller_reputation: any;
  seller_address: any;
}

export default function SellerInfo({
  seller_reputation,
  seller_address,
}: Props) {
  return (
    <Stack borderRadius="lg" borderWidth="1px" px="4" py="6" spacing="5">
      <Text fontSize="lg">Información sobre el vendedor</Text>
      <Stack alignItems="flex-start" color="green.400" direction="row">
        <Icon as={FaMedal} />
        <Stack lineHeight="100%" spacing={1}>
          <Text fontWeight={500}>MercadoLíder Platinum</Text>
          <Text as="small" color="blackAlpha.600" fontSize="sm">
            ¡Es uno de los mejores del sitio!
          </Text>
        </Stack>
      </Stack>

      <Stack alignItems="flex-start" direction="row">
        <Icon as={GoLocation} />
        <Stack lineHeight="100%" spacing={1}>
          <Text>Ubicación</Text>
          <Text as="small" color="blackAlpha.600" fontSize="sm">
            {seller_address?.city.name}, {seller_address?.state.name}
          </Text>
        </Stack>
      </Stack>

      <Stack direction="row">
        {["red", "orange", "yellow", "green", "green"].map((color, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <RepBar key={i} active={i === 4} colorScheme={color} />
        ))}
      </Stack>

      <Stack
        alignItems="flex-start"
        direction="row"
        divider={<StackDivider />}
        px={4}
      >
        <SellerStat
          description="Ventas en los últimos 60 días"
          quantity={seller_reputation?.metrics.sales.completed}
        />
        <SellerStat description="Brinda buena atención" icon={RiChat4Line} />
        <SellerStat
          description="Despacha sus productos a tiempo"
          icon={RiTimerLine}
        />
      </Stack>

      <Text color="blue.400" fontSize="sm">
        Ver más datos de este vendedor
      </Text>
    </Stack>
  );
}
