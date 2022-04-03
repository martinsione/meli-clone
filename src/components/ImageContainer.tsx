// @ts-ignore
import ReactImageZoom from "react-image-zoom";
import { useState } from "react";
import { Stack, Image } from "@chakra-ui/react";

export default function ImageContainer({ pictures }: { pictures: any[] }) {
  const [activeImage, setActiveImage] = useState<any>(pictures[0].url || null);
  return (
    <Stack direction="row">
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
      <Stack
        _hover={{ cursor: "zoom-in" }}
        alignItems="center"
        justifyContent="center"
        p="20px"
      >
        <ReactImageZoom
          height={500}
          img={activeImage}
          scale={1.2}
          width={500}
          zoomWidth={300}
        />
      </Stack>
    </Stack>
  );
}
