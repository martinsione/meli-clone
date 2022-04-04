import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Price from "@components/Price";
import ImageContainer from "@components/ImageContainer";
import { Stack } from "@chakra-ui/react";

export default function Product() {
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const { id } = router.query;
  useEffect(() => {
    if (id) {
      axios(`https://api.mercadolibre.com/items?ids=${id}`)
        .then((res) => {
          setData(res.data[0].body);
          document.title = `${res.data[0].body.title} - MercadoLibre`;
        })
        .catch((e) => console.error(e));
    }
  }, [id]);

  if (!data) {
    return <div />;
  }

  return (
    <Stack bg="white" borderRadius="4px" direction="row" p="4" shadow="md">
      <Stack flex={2}>
        <ImageContainer pictures={data.pictures} />
      </Stack>
      <Stack flex={1}>
        <Price
          available_quantity={data.available_quantity}
          buying_mode={data.buying_mode}
          condition={data.condition}
          price={data.price}
          // TODO: fetch reviews
          reviews={[1, 2, 3, 5]}
          sold_quantity={data.sold_quantity}
          title={data.title}
        />
      </Stack>
    </Stack>
  );
}
