import React from "react";
import styled from "styled-components";
import LinkMenu from "./LinkMenu";
import { useRef } from "react";

import { motion, useCycle } from "framer-motion"

const links = [{
  src:'logos/home-logo.svg', 
  aText:'Accueil',
  link:'/'
},{
  src:'logos/library-logo.svg',
  link:'/projects',
  paddingT:'142px',
        aText:'Projets',
        width:'40px',
        height:'40px',
},{
  src:'logos/search-logo.svg',
  paddingT:'142px',
  link:'/contact',
  aText:'Contact',
  width:'40px',
  height:'40px'
},
]
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};
function SideMenu({ }) {
 
  return (
   
      <ContentWrapper as={motion.ul} variants={variants}>

        {links.map((link, i) => (
          // console.log(link.src)
 <LinkMenu key={i} src={link.src} link={link.link} paddingT={link.paddingT} aText={link.aText} width={link.width} height={link.height} /> 
        ))}
        {/* <LinkMenu src='logos/home-logo.svg' aText='Accueil' />
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
        /> */}
      </ContentWrapper>
  
 
  ); 
}

export default SideMenu;
// const SideMenuWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   height: 100vh;
//   width: 400px;
//   background: #100f18;
//   z-index: 1;
//   transition: 0.2s ease-in-out;
// z-index:100;
//   transform: ${(props) =>
//     props.show ? "translateX(0%)" : "translateX(-100%)"};
//   opacity: ${(props) => (props.show ? "1" : "0")};
  
//   .close {
//     position: absolute;
//     bottom: 0;
//     right: 50%;
//     margin-bottom: 10px;
//     cursor: pointer;
//     transition: 0.2s ease-in-out;
//   }
//   .close:hover {
//     filter: invert(33%) sepia(98%) saturate(5401%) hue-rotate(85deg)
//       brightness(100%) contrast(100%);
//   }
// `;

const ContentWrapper = styled.ul`
 z-index:50;
  padding: 25px;
  position: fixed;
  top: 100px;
  width: 230px;
`;
