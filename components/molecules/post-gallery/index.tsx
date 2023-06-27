import React, { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

import SwiperClass from "swiper/types/swiper-class";
import SwiperCore, { FreeMode, Navigation, Thumbs, Controller } from "swiper";
import PostImage from "../post-image";
import Image from "next/image";

const PostGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<any>(null);
  const swiper2Ref = useRef<any>(null);

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null && swiper2Ref.current !== null) {
      swiper1Ref.current.swiper.controller.control = swiper2Ref.current.swiper;
    }
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          if (swiper1Ref.current !== null) {
            swiper1Ref.current = swiper;
          }
        }}
        controller={{ control: secondSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].map((i, el) => {
          return (
            <>
              <SwiperSlide>
                <PostImage
                  altText="full image"
                  imageUrl={`/assets/images/samples/cars/image-${i}.jpeg`}
                  legend="Legenda da imagem"
                  zoom={false}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>

      <Swiper
        controller={{ control: firstSwiper }}
        loop={false}
        spaceBetween={10}
        slidesPerView={8}
        watchSlidesProgress
        touchRatio={0.2}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
        className="swiper-thumbs"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13].map((i, el) => {
          return (
            <>
              <SwiperSlide>
                <Image
                  src={`/assets/images/samples/cars/image-${i}.jpeg`}
                  alt={`image-${i}`}
                  width={1920}
                  height={1080}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};
export default PostGallery;
