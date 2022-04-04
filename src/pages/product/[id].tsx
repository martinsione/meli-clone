import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import SellerInfo from "@components/SellerInfo";
import Seller from "@components/Seller";
import Questions from "@components/Questions";
import Price from "@components/Price";
import PaymentMethods from "@components/PaymentMethods";
import ImageContainer from "@components/ImageContainer";
import Attributes from "@components/Attributes";
import { Stack, StackDivider } from "@chakra-ui/react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState<any>(null);
  const [seller, setSeller] = useState<any>(null);
  const [questions, setQuestions] = useState<any>(null);

  async function fetchProduct(productId: string) {
    try {
      const productRes = await axios(
        `https://api.mercadolibre.com/items?ids=${productId}`
      );
      const sellerRes = await axios(
        `https://api.mercadolibre.com/sites/MLA/search?seller_id=${productRes.data[0].body.seller_id}`
      );
      const questionsRes = await axios(
        `https://api.mercadolibre.com/questions/search?item=${productRes.data[0].body.id}`
      );
      return [productRes.data[0].body, sellerRes.data, questionsRes.data];
    } catch (e) {
      return e;
    }
  }

  useEffect(() => {
    if (id) {
      fetchProduct(id.toString())
        .then((res: any) => {
          document.title = `${res[0].title} - MercadoLibre`;
          setProduct(res[0]);
          setSeller(res[1]);
          setQuestions(res[2]);
        })
        .catch((e) => console.log(e));
    }
  }, [id]);

  if (!product) {
    return <div />;
  }

  return (
    <Stack
      bg="white"
      borderRadius="4px"
      direction="row"
      p="4"
      shadow="md"
      spacing="72px"
    >
      <Stack flex={2} overflow="hidden" spacing={8}>
        <ImageContainer pictures={product?.pictures} />
        <Stack divider={<StackDivider />} px="5" spacing={8}>
          <Seller products={seller?.results} />
          <Attributes attributes={product?.attributes} />
          <Questions questions={questions?.questions} />
        </Stack>
      </Stack>
      <Stack flex={1}>
        <Price
          available_quantity={product.available_quantity}
          buying_mode={product.buying_mode}
          condition={product.condition}
          price={product.price}
          // TODO: fetch reviews
          reviews={[1, 2, 3, 5]}
          sold_quantity={product.sold_quantity}
          title={product.title}
        />
        <SellerInfo
          seller_address={product?.seller_address}
          seller_reputation={seller?.seller.seller_reputation}
        />
        <PaymentMethods />
      </Stack>
    </Stack>
  );
}
