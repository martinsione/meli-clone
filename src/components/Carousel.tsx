import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import { Box, IconButton, useBreakpointValue } from "@chakra-ui/react";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const cards = [
    "https://http2.mlstatic.com/D_NQ_621763-MLA49451238712_032022-OO.webp",
    "https://http2.mlstatic.com/D_NQ_975247-MLA49451102649_032022-OO.webp",
    "https://http2.mlstatic.com/D_NQ_651344-MLA49546120685_042022-OO.webp",
    "https://http2.mlstatic.com/D_NQ_872543-MLA49450871451_032022-OO.webp",
  ];

  return (
    <Box h="340px" overflow="hidden" position="relative">
      <link
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <IconButton
        aria-label="left-arrow"
        borderRadius="full"
        colorScheme="messenger"
        left={side}
        position="absolute"
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        borderRadius="full"
        colorScheme="messenger"
        position="absolute"
        right={side}
        top={top}
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      {/* eslint-disable-next-line @typescript-eslint/no-shadow */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url) => (
          <Box
            key={url}
            backgroundImage={`url(${url})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
            height="340px"
            position="relative"
          />
        ))}
      </Slider>
    </Box>
  );
}
