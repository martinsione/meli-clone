import { Box, Alert, AlertIcon, AlertTitle, Stack } from "@chakra-ui/react";

import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box minH="100vh">
      <Alert status="error">
        <Stack direction="row" mx="auto">
          <AlertIcon />
          <AlertTitle>Esta no es la pagina oficial de mercadolibre</AlertTitle>
        </Stack>
      </Alert>
      <Nav />
      <Box maxWidth="container.xl" mx="auto" my="28px">
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
