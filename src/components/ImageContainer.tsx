import { useState } from "react";
import { Stack, Image } from "@chakra-ui/react";

export default function ImageContainer({
  activePicture,
  pictures,
}: {
  activePicture: string;
  pictures: any[];
}) {
  const [activeImage, setActiveImage] = useState<any>(activePicture || null);
  return (
    <Stack direction="row">
      <Stack>
        {pictures.map((picture: any) => (
          <Stack
            key={picture.id}
            _hover={{ borderColor: "blue.500", borderWidth: "2px" }}
            alignItems="center"
            bg="white"
            border="1px"
            borderColor="gray.300"
            borderRadius="4px"
            h="44px"
            objectFit="contain"
            w="44px"
            onClick={() => setActiveImage(picture.url)}
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
      <Stack
        alignItems="center"
        h="478px"
        justifyContent="center"
        p="30px"
        w="378px"
      >
        <Image src={activeImage} />
      </Stack>
    </Stack>
  );
}
