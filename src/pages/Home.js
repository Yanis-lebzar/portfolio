import React from "react";
import styled from "styled-components";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";

function Home() {
  return (
    <WrapperHome>
      <HeroSection />
      <Projects />
    </WrapperHome>
  );
}

export default Home;

const WrapperHome = styled.div``;
