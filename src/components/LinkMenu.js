import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

function LinkMenu({ paddingT, src, aText, width, height,link }) {
  return (
    <>
    <Link to={link}>
    
    <LinkWrapper as={motion.li}
     w={width} h={height} ptop={paddingT}
     variants={variants}
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.95 }}>
      <img src={src} alt='' />
      <a>{aText}</a>
    </LinkWrapper>
    </Link>
    </>
  );
}

export default LinkMenu;

const LinkWrapper = styled.li`
  padding-top: ${(props) => (props.ptop ? props.ptop : "50px")};
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: end;
text-decoration:none;
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: ${(props) => (props.w ? props.w : "52px")};
    height: ${(props) => (props.h ? props.h : "52px")};
    cursor: pointer;
  }

  a {
    margin-left: 52px;
    font-size: 30px;
    font-family: montserrat;
    font-weight: 500;
    color: #aaa2a2;
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  a:hover {
    color: #d6d1d1;
  }
`;
