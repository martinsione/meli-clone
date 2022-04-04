import type { AppProps } from "next/app";

import Head from "next/head";
import Layout from "@components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mercadolibre</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
