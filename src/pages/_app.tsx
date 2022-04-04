import type { AppProps } from "next/app";

import Layout from "@components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  document.title = "Mercadolibre";
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
