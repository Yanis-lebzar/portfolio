import React, { useState } from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu";

function DownMenu() {
  const [show, setShow] = useState(false);
  return (
    <ContentWrapper>
      <SideMenu show={show} setShow={setShow} />

      <MenuWrapper>
        <MenuLogoWrapper>
          {!show ? (
            <img
              onClick={() => setShow(!show)}
              src='logos/menu-logo.svg'
              alt='icone menu'
              height='40px'
              width='40px'
            />
          ) : (
            <img
              className='close'
              src='logos/close-logo.svg'
              alt='icone menu'
              height='40px'
              width='40px'
            />
          )}
        </MenuLogoWrapper>
        <PlayLogoWrapper>
          <img
            src='logos/play-menu-logo.svg'
            alt='icone menu'
            height='40px'
            width='40px'
          />
        </PlayLogoWrapper>
        <RightSideWrapper>
          <p>0:1 /0:2</p>
          <hr />
        </RightSideWrapper>
      </MenuWrapper>
    </ContentWrapper>
  );
}

export default DownMenu;

const ContentWrapper = styled.div``;

const MenuWrapper = styled.div`
  position: fixed;
  padding: 10px 45px;
  right: 0%;
  left: 0%;
  bottom: 0%;
  height: 51px;
  background: rgba(0, 0, 0, 0.68);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuLogoWrapper = styled.div`
  flex: 0.1;

  img {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    margin: 0;
    padding: 0;
  }
  img:hover {
    filter: invert(33%) sepia(98%) saturate(5401%) hue-rotate(85deg)
      brightness(100%) contrast(100%);
  }
`;
const PlayLogoWrapper = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;

    transition: 0.2s ease-in-out;
  }
  img:hover {
    filter: invert(33%) sepia(98%) saturate(5401%) hue-rotate(85deg)
      brightness(100%) contrast(100%);
  }
`;
const RightSideWrapper = styled.div`
  flex: 0.1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;

  p {
    width: 100%;
    color: #b8b8b8;
    margin: 0;
  }
  hr {
    margin-right: 0;
    width: 150px;
    border: none;
    height: 2px;
    background-color: #a3a7a6;
  }
  hr::before {
    content: "";
    width: 8px;
    height: 8px;
    background: white;
    display: block;
  }
  hr::after {
    content: "";
    width: 8px;
    height: 8px;
    background: white;
    position: absolute;
    top: 58%;
    margin-left: 0px;
    border-radius: 100%;
    display: block;
  }
`;
