import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function Projects() {
  return (
    <WrapperProjectsSection>
      <video autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "/videos/bg-27.mp4"}
          type='video/mp4'
        />
      </video>

      <SliderWrapper>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2,
            slideShadows: true,
            slidesPerView: 4,
          }}
          pagination={true}
          loop={false}
          className='mySwiper'>
          <SwiperSlide>
            <ProjectContainer>
              <ProjectImage></ProjectImage>
            </ProjectContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectContainer></ProjectContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectContainer></ProjectContainer>
          </SwiperSlide>
          <SwiperSlide>
            <ProjectContainer></ProjectContainer>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <ProjectContainer></ProjectContainer>
          </SwiperSlide>
        </Swiper>
      </SliderWrapper>
    </WrapperProjectsSection>
  );
}

export default Projects;

const WrapperProjectsSection = styled.div`
  height: 100vh;
  width: 100%;
  display:flex;
  justify-content:center;
  align-items:start;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -100;
  }


  }
`;

const SliderWrapper = styled.div`
  .swiper-wrapper {
    background: none;
    width: 100%;
    height: 900px;
    margin: 0;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  ,
//   .swiper-container {
//     background: red;
//     margin: 0;
//   }
//   ,
.swiper-container-3d .swiper-slide-shadow-left,.swiper-slide-shadow-right {
  }
  ,
  .swiper-slide-active {
  }
  ,
  .swiper-slide {
    // background: none;

    background-position: center;
    background-size: cover;
    width: auto;
    height: 742px;
  }
`;

const ProjectContainer = styled.div`
  height: 742px;
  display: block;
  width: 403px;
  background: linear-gradient(180deg, #b0b0b0 21.35%, #000000 100%);
  border-radius: 25px;
`;

const ProjectImage = styled.div``;
