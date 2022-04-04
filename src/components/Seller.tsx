import Link from "next/link";
import formatPrice from "@lib/formatPrice";
import { StackDivider, Stack, Text, Image } from "@chakra-ui/react";

export default function Seller({ products }: { products: any[] }) {
  return (
    <Stack>
      <Text fontSize="24px">Publicaciones del vendedor</Text>
      <Stack direction="row">
        {products &&
          [...products].slice(0, 3).map((product: any) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <a style={{ flexBasis: "100%" }}>
                <Stack
                  _hover={{ shadow: "md" }}
                  border="1px"
                  borderColor="blackAlpha.200"
                  borderRadius="md"
                  divider={<StackDivider />}
                  h="full"
                  minW="224px"
                >
                  <Image
                    src={`https://http2.mlstatic.com/D_Q_NP_${product.thumbnail_id}-AB.webp`}
                    w="100%"
                  />
                  <Stack pb="12px" px="3" spacing="0">
                    <Text fontSize="22px">{formatPrice(product.price)}</Text>
                    {product.shipping.free_shipping && (
                      <Text color="green.400" fontSize="sm" fontWeight="bold">
                        Envio gratis
                      </Text>
                    )}
                    <Text fontSize="sm">{product.title}</Text>
                  </Stack>
                </Stack>
              </a>
            </Link>
          ))}
      </Stack>
    </Stack>
  );
}
