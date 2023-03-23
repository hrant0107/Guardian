import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css";

import left from "../../../assets/icons/arrow-left.svg";
import right from "../../../assets/icons/arrow-right.svg";
import { SliderItem } from "../sliderItem/SliderItem";

import styles from "./SwiperComponent.module.scss";

SwiperCore.use([Pagination, Navigation]);

export const SwiperComponent = ({ slidesList }) => {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className={styles.wrapper}>
      <Swiper
        spaceBetween={24}
        slidesPerView={"auto"}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        ref={swiperRef}
        className="mySwiper"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {slidesList.map((s) => (
          <SwiperSlide className={styles.slide} key={uuidv4()}>
            <SliderItem {...s} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.btns}>
        <button onClick={goPrev} className="swiper-button-prev">
          <img src={left} alt="left" />
        </button>
        <button onClick={goNext} className="swiper-button-next">
          <img src={right} alt="right" />
        </button>
      </div>
    </div>
  );
};
