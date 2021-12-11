import React, {useState,useRef, useEffect} from "react";
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
import SliderProjects from "./SliderProjects";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

function Projects() {
  // starting index
const [swiperIndex, setSwiperIndex] = useState(0);

const swiperRef = useRef();
// button function
// add +1 or -1 to swiperIndex
// swiperRef.current.swiper.slideTo(swiperIndex);
useEffect(() => {
  //...some logic
  
 
    swiperRef.current.swiper.slideTo(swiperIndex);

})
console.log(swiperIndex)
console.log(swiperRef)
  return (

    <WrapperProjectsSection>
      <video autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "/videos/bg-18.mp4"}
          type="video/mp4"
        />
      </video>
      <SliderWrapper>
        <Swiper
        ref={swiperRef}
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
          className="mySwiper"
         
          >
          <SwiperSlide>
            <SliderProjects 
            name="Netflix clone"
            description="React App / API TMDB"
            imgUrl="netflix/netflix-project.png"
            onRightClick={() => setSwiperIndex( swiperIndex + 1)} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProjects
                        name="Weather App"
                        description="React App / API OpenWeather"
                        imgUrl="weather-app/weather-app-warm.png"
                        onRightClick={() => setSwiperIndex( swiperIndex + 1)}
             onLeftClick={() => setSwiperIndex( swiperIndex - 1)} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProjects 
                        name="Airbnb clone"
                        description="React App / Css flex-box and grids"
                        imgUrl="airbnb/airbnb-project.png"
                        onRightClick={() => setSwiperIndex( swiperIndex + 1)} 
            onLeftClick={() => setSwiperIndex( swiperIndex - 1)}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderProjects 
                        name="Crud todo App"
                        description="React app / Firebase"
                        imgUrl="crud/crud-project.png"
            onRightClick={() => setSwiperIndex( swiperIndex + 1)}
             onLeftClick={() => setSwiperIndex( swiperIndex - 1)} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderProjects 
                        name="Tesla clone"
                        description="React app / React router, reveal Firebase Auth"
                                    imgUrl="tesla/tesla-project.png"
            onRightClick={() => setSwiperIndex( 0)}
             onLeftClick={() => setSwiperIndex( swiperIndex - 1)} />
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
    @media (max-width: 1380px) {
      transform: scale(0.8);
       }
  }
  ,
//   .swiper-container {
//     background: red;
//     margin: 0;
//   }
//   ,
.swiper-container-3d .swiper-slide-shadow-left,.swiper-slide-shadow-right {
  @media (max-width: 1380px) {
    transform: scale(0.8);
     }  border-radius:25px;
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
