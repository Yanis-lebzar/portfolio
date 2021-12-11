import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion"

const mainTextVariants ={
  hidden:{
    x:"-50vw",
    opacity:0,
  },
  visible: {
    x:0,
    opacity:1,
    transition:{
      delay:6,
      duration:1

    }
  }
}

const pVariants ={
  hidden:{
    x:"-50vw",
    opacity:0,
  },
  visible: {
    x:0,
    opacity:1,
    transition:{
      delay:6.5,
      duration:1

    }
  }
}

const bTextVariants ={
  hidden:{
    opacity:0,
  },
  visible: {
    opacity:1,
    transition:{
      delay:7.2,
      duration:4

    }
  }
}

function HeroSection() {
  return (
    <WrapperHeroSection>
      <video autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "/videos/bg-27.mp4"}
          type='video/mp4'
        />
      </video>
      {/* <Navbar /> */}
      <TextWrapper>
        <LeftTextWrapper>
          <MainText as={motion.div} variants={mainTextVariants} initial="hidden" animate="visible" drag  >
            <h1>Developper Front-end</h1>
            <h2>UX / UI Designer</h2>
          </MainText>
         <motion.div variants={pVariants} initial="hidden" animate="visible">
          <p>
            Young <span>freelance</span> developper based in <span>France</span>
          </p>
          </motion.div>

        </LeftTextWrapper>

        <BackgroundText as={motion.div} variants={bTextVariants} initial="hidden" animate="visible">
          <h1 className='name'>Yl</h1>
        </BackgroundText>
      </TextWrapper>
    </WrapperHeroSection>
  );
}

export default HeroSection;

const WrapperHeroSection = styled.div`
  height: 100vh;
  box-shadow: 0px 5px 70px 25px #01172D;
  display:flex;
  justify-content:center;
  align-items:center;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    z-index: -100;
  }


  }
`;

const LeftTextWrapper = styled.div`
  margin-top: 135px;
  padding-left: 42px;
  text-align:center;
  @media (max-width: 1380px) {
    margin-top: 50px;
  }
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 90px;
    line-height: 117px;
    color: white;

    margin: 0px;
    @media (max-width: 1380px) {
      font-size: 66px;
      line-height: 57px;
    }
  }
  h2 {
    font-size: 66px;
    font-family: montserrat;
    color: white;
    font-weight: 500;
    margin: 0px;
    @media (max-width: 1380px) {
      font-size: 46px;
      line-height: 117px;
    }
  }
  p {
    padding-left: 15px;
    font-size: 24px;
    color: #cdcdcd;
    font-family: SF-Pro;
    font-weight: 300;
    margin-top: 44px;
    @media (max-width: 1380px) {
      font-size: 24px;
      margin-top: 4px;
      padding-left: 5px;
    }
  }
  span {
    color: white;
  }
`;

const BackgroundText = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:0px;
  @media (max-width: 1380px) {
    margin-top:150px;

  }
  .name {
    
    margin: 0;
    font-family: Tangerine;
    font-style: normal;
    font-weight: normal;
    font-size: 104px;

    color: rgba(100, 100, 100, 0.44);

    @media (max-width: 1380px) {
      font-size: 400px;
      line-height: 100px;
    }
`;
const TextWrapper = styled.div`
  display: flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;

`;

const MainText = styled.div``;
