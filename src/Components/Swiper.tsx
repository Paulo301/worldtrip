import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import { NavigationOptions, PaginationOptions } from 'swiper/types';

import { Link } from "@chakra-ui/next-js";
import { Image } from '@chakra-ui/react';

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
    <SwiperReact
      navigation={true} 
      pagination={true}
      modules={[Navigation, Pagination]}
      style={{
        width: '100%',
        height: '28.125rem',
        marginTop: '3.25rem'
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide
          style={{
            width: '100%'
          }}
        >
          <Link
            href={slide.link}
          >
            <Image 
              src={slide.imgSrc}
              height='100%'
            />
          </Link>
        </SwiperSlide>
      ))}
    </SwiperReact>
  );
}