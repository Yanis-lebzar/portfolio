import React from "react";
import styled from "styled-components";

function LinkMenu({ paddingT, src, aText, width, height }) {
  return (
    <LinkWrapper w={width} h={height} ptop={paddingT}>
      <img src={src} alt='' />
      <a>{aText}</a>
    </LinkWrapper>
  );
}

export default LinkMenu;

const LinkWrapper = styled.div`
  padding-top: ${(props) => (props.ptop ? props.ptop : "50px")};
  width: 100%;
  height: auto;
  display: flex;
  justify-content: left;
  align-items: end;

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
