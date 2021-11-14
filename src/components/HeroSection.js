import React from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";

function HeroSection() {
  return (
    <WrapperHeroSection>
      <video autoPlay loop muted>
        <source
          src={process.env.PUBLIC_URL + "/videos/bg-27.mp4"}
          type='video/mp4'
        />
      </video>
      <Navbar />
      <TextWrapper>
        <LeftTextWrapper>
          <MainText>
            <h1>Developper Front-end</h1>
            <h2>UX / UI Designer</h2>
          </MainText>

          <p>
            Young <span>freelance</span> developper based in <span>France</span>
          </p>
        </LeftTextWrapper>

        <BackgroundText>
          <h1 className='name'>Yl</h1>
        </BackgroundText>
      </TextWrapper>
    </WrapperHeroSection>
  );
}

export default HeroSection;

const WrapperHeroSection = styled.div`
  height: 100vh;
  width: 100vw;
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
  flex: 0.6;
  margin-top: 135px;
  padding-left: 42px;
  @media (max-width: 1380px) {
    margin-top: 50px;
  }
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 96px;
    line-height: 117px;
    color: white;

    margin: 0px;
    @media (max-width: 1380px) {
      font-size: 66px;
      line-height: 57px;
    }
  }
  h2 {
    font-size: 72px;
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
    font-size: 30px;
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
  flex: 0.4;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  margin-right:50px;
  justify-content: left;
  margin-top:50px;
  @media (max-width: 1380px) {
    margin-top:150px;

  }
  .name {
    position:absolute;
    left:-5%;
    top:8%;
    margin: 0;
    font-family: Tangerine;
    font-style: normal;
    font-weight: normal;
    font-size: 730px;

    color: rgba(239, 239, 239, 0.44);

    @media (max-width: 1380px) {
      font-size: 400px;
      line-height: 100px;
    }
`;
const TextWrapper = styled.div`
  display: flex;
`;

const MainText = styled.div``;
