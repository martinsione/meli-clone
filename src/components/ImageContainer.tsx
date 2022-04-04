import { useEffect, useState } from "react";
import { Stack, Image } from "@chakra-ui/react";

export default function ImageContainer({ pictures }: { pictures: any[] }) {
  const [activeImage, setActiveImage] = useState<any>(pictures[0].url || null);
  useEffect(() => {
    setActiveImage(pictures[0].url);
  }, [pictures]);
  return (
    <Stack direction="row" minH="600px" w="100%">
      <Stack>
        {pictures.map((picture: any) => (
          <Stack
            key={picture.id}
            _hover={{ borderColor: "blue.500", borderWidth: "2px" }}
            alignItems="center"
            border="1px"
            borderColor="blackAlpha.200"
            borderRadius="4px"
            h="44px"
            objectFit="contain"
            w="44px"
            onClick={() => setActiveImage(picture.url)}
            onMouseOver={() => setActiveImage(picture.url)}
          >
            <Image
              alt={picture.id}
              m="auto"
              maxH="100%"
              maxW="100%"
              src={picture.url}
            />
          </Stack>
        ))}
      </Stack>
      <Stack _hover={{ cursor: "zoom-in" }} alignSelf="center" flex={1}>
        <Image mx="auto" src={activeImage} />
      </Stack>
    </Stack>
  );
}
