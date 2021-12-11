import React from "react";
import styled from "styled-components";
import { motion, useCycle } from "framer-motion"

const navVariants ={
  hidden:{
    y:"-50vh",
    opacity:0,
  },
  visible: {
    y:0,
    opacity:1,
    transition:{
      delay:7,
      duration:1

    }
  }
}

function Navbar() {
  return (
    <WrapperNav as={motion.div} variants={navVariants} initial="hidden" animate="visible">
      <h3>Yanis Lebzar</h3>
      <WrapperLinks>
        <ul>
          <li>Accueil</li>
          <li>Projets</li>
        </ul>
      </WrapperLinks>
      <Button>Contact</Button>
    </WrapperNav>
  );
}

export default Navbar;

const WrapperNav = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  padding: 40px 45px;
  align-items: center;
  color: white;
  h3 {
    flex: 0.392;
  }
`;

const Button = styled.div`
  cursor: pointer;
  flex: 0.028;
  font-size: 24px;
  padding: 17px 27px;
  border: 1px white solid;
  border-radius: 46px;
  transition: 0.2s ease-in-out;
  box-shadow: 0px 0px 20px 1px #ffffff71;

  &:hover {
    background: white;
    color: black;
    border: 1px black solid;
  }
`;

const WrapperLinks = styled.div`
  flex: 0.6;
  @media (max-width: 1380px) {
    display: none;
  }
  ul {
    display: flex;
    li {
      cursor: pointer;
      margin-left: 63px;
      font-family: SF-Pro;
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 36px;
      transition: 0.2s ease-in-out;
    }
    li:hover {
      color: #a5a5a5;
    }
  }
`;
