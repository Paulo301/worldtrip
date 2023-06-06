import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { NavigationOptions, PaginationOptions } from 'swiper/types';

import { Link } from "@chakra-ui/next-js";
import { Box, Image } from '@chakra-ui/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface Slide {
  imgSrc: string;
  link: string;
}

interface SwiperProps {
  slides: Slide[];
}

export function Swiper({ slides }: SwiperProps) {
  const pagination: PaginationOptions = {};
  const navigation: NavigationOptions = {};

  return (
    <Box
      w='100%'
      h={{base: '15.625rem', lg: '28.125rem'}}
      mt={{base: '5', lg: '3.25rem'}}
    >
      <SwiperReact
        navigation={true} 
        pagination={true}
        modules={[Navigation, Pagination]}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide
            style={{
              width: '100%'
            }}
            key={slide.link}
          >
            <Link
              href={slide.link}
            >
              <Image 
                src={slide.imgSrc}
                height='100%'
                w='100%'
              />
            </Link>
          </SwiperSlide>
        ))}
      </SwiperReact>
    </Box>
  );
}