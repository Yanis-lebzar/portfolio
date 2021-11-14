import React from "react";
import styled from "styled-components";
import LinkMenu from "./LinkMenu";

function SideMenu({ show, setShow }) {
  return (
    <SideMenuWrapper show={show}>
      <ContentWrapper>
        <LinkMenu src='logos/home-logo.svg' aText='Accueil' />
        <LinkMenu
          src='logos/library-logo.svg'
          paddingT='142px'
          aText='Projets'
          width='40px'
          height='40px'
        />
        <LinkMenu
          src='logos/search-logo.svg'
          paddingT='142px'
          aText='Contact'
          width='40px'
          height='40px'
        />
      </ContentWrapper>
      <img
        onClick={() => setShow(!show)}
        className='close'
        src='logos/close-logo.svg'
        alt='icone menu'
        height='40px'
        width='40px'
      />
    </SideMenuWrapper>
  );
}

export default SideMenu;
const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 400px;
  background: #100f18;
  z-index: 1;
  transition: 0.2s ease-in-out;

  transform: ${(props) =>
    props.show ? "translateX(0%)" : "translateX(-100%)"};
  opacity: ${(props) => (props.show ? "1" : "0")};
  .close {
    position: absolute;
    bottom: 0;
    right: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  .close:hover {
    filter: invert(33%) sepia(98%) saturate(5401%) hue-rotate(85deg)
      brightness(100%) contrast(100%);
  }
`;

const ContentWrapper = styled.div`
  margin: auto;
  width: 80%;
  height: 100%;
`;
