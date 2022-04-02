import { Box } from "@chakra-ui/react";

import Nav from "./Nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <Box maxWidth="container.xl" mx="auto" my="28px">
        {children}
      </Box>
    </div>
  );
}
