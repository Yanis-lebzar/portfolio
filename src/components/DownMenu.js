import React, { useState } from "react";
import styled from "styled-components";
import SideMenu from "./SideMenu";
import { motion, useCycle } from "framer-motion";

const navVariants ={
  hidden:{
    y:80,
 
  },
  visible: {
y:0,
    transition:{
      delay:7.5,
      duration:0.5

    }
  }
}



const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",

  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
transition:{fill:{duration:4, delay:1}}
  }
};

const menuElementsVariants = {
  hidden:{
   opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      duration:2,
      delay:7.5
    }
  }
}


const svgVariants = {
  hidden: {
  
    y:"-40vh",
    scale:5,   
    opacity:0,
  },
  visible: {
   
    y:0,
    scale:1,
opacity:1,
    transition:{
      default: {type:"spring", delay:2, ease: "easeInOut"},
      scale:{duration: 2, delay:2},
      y: {delay: 3, duration:3},
      fill: { duration: 3  },
      opacity:{duration:2.5}
      // fill: { duration: 2, ease: [1, 0, 0.8, 1] }
    }
 
  }
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 600}px at 40px 40px)`,
    background:"#100f18",
    // background:"rgb(255, 255, 255, 0.5)",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(28px at 40px 910px)",
    background: "rgb(255, 255, 255)",

    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};




function DownMenu() {
  const [show, setShow] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <ContentWrapper as={motion.div}    initial={false}
    animate={isOpen ?  "open" : "closed"} >
       <BackgroundSidebar as={motion.div} variants={sidebar}  />
       <SideMenu />
       <OverlayDownMenu as={motion.div} variants={navVariants} initial="hidden" animate="visible" />
      <MenuWrapper as={motion.div} variants={navVariants} >
       

        <MenuLogoWrapper onClick={() => toggleOpen()} as={motion.div}  >

        <svg style={{zIndex:100}} width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: {stroke:"#100f18", d: "M 2 2.5 L 20 2.5" },
          open: {stroke: "white", d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: {stroke:"#100f18", opacity: 1 },
          open: {stroke: "white", opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: {stroke:"#100f18", d: "M 2 16.346 L 20 16.346" },
          open: {stroke: "white", d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
        </MenuLogoWrapper>

        <PlayLogoWrapper>
 
 <motion.div>

        <IconStyled    width="40" height="40"  xmlns="http://www.w3.org/2000/svg" >

{/* <path d="M48.75 26C48.75 13.4367 38.5633 3.25 26 3.25C13.4367 3.25 3.25 13.4367 3.25 26C3.25 38.5633 13.4367 48.75 26 48.75C38.5633 48.75 48.75 38.5633 48.75 26ZM7.10938 26C7.10938 15.5695 15.5695 7.10937 26 7.10937C36.4305 7.10937 44.8906 15.5695 44.8906 26C44.8906 36.4305 36.4305 44.8906 26 44.8906C15.5695 44.8906 7.10938 36.4305 7.10938 26Z" fill="white"/>
<path d="M26.6553 36.532L37.5733 21.4957C37.6617 21.3751 37.7148 21.2323 37.7269 21.0833C37.7389 20.9343 37.7093 20.7848 37.6414 20.6516C37.5735 20.5184 37.4699 20.4067 37.3422 20.3288C37.2145 20.251 37.0677 20.2102 36.9182 20.2109L15.0823 20.2109C14.417 20.2109 14.0412 20.9625 14.4272 21.4957L25.3452 36.532C25.42 36.6359 25.5184 36.7204 25.6323 36.7787C25.7462 36.837 25.8723 36.8674 26.0002 36.8674C26.1282 36.8674 26.2543 36.837 26.3682 36.7787C26.4821 36.7204 26.5805 36.6359 26.6553 36.532ZM19.8506 23.4508L32.1498 23.4508L26.0002 31.916L19.8506 23.4508Z" fill="white"/> */}

<IconPathStyled
 d="M48.75 26C48.75 13.4367 38.5633 3.25 26 3.25C13.4367 3.25 3.25 13.4367 3.25 26C3.25 38.5633 13.4367 48.75 26 48.75C38.5633 48.75 48.75 38.5633 48.75 26ZM7.10938 26C7.10938 15.5695 15.5695 7.10937 26 7.10937C36.4305 7.10937 44.8906 15.5695 44.8906 26C44.8906 36.4305 36.4305 44.8906 26 44.8906C15.5695 44.8906 7.10938 36.4305 7.10938 26Z" fill="none"/>
<IconPathStyled
            d="M26.6553 36.532L37.5733 21.4957C37.6617 21.3751 37.7148 21.2323 37.7269 21.0833C37.7389 20.9343 37.7093 20.7848 37.6414 20.6516C37.5735 20.5184 37.4699 20.4067 37.3422 20.3288C37.2145 20.251 37.0677 20.2102 36.9182 20.2109L15.0823 20.2109C14.417 20.2109 14.0412 20.9625 14.4272 21.4957L25.3452 36.532C25.42 36.6359 25.5184 36.7204 25.6323 36.7787C25.7462 36.837 25.8723 36.8674 26.0002 36.8674C26.1282 36.8674 26.2543 36.837 26.3682 36.7787C26.4821 36.7204 26.5805 36.6359 26.6553 36.532ZM19.8506 23.4508L32.1498 23.4508L26.0002 31.916L19.8506 23.4508Z" fill="none"
  />
</IconStyled >
</motion.div >
        </PlayLogoWrapper>
        <motion.div as={motion.div} variants={menuElementsVariants}>
        <RightSideWrapper  >
          <p>0:1 /0:2</p>
          <hr />
        </RightSideWrapper>
        </motion.div >
      </MenuWrapper>
    </ContentWrapper>
  );
}

export default DownMenu;

const ContentWrapper = styled.div`  z-index:10;
display:flex;
`;

const MenuWrapper = styled.div`
  position: fixed;
  padding: 10px 45px;
  right: 0%;
  left: 0%;
  bottom: 0%;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: end;
  background: transparent;
  z-index:10;
`;
const OverlayDownMenu = styled.div`
position: fixed;
padding: 10px 45px;
background: rgba(0, 0, 0, 0.68);
right: 0%;
  left: 0%;
  bottom: 0%;
  height: 51px;
  z-index:2;
`
const IconStyled = styled(motion.svg).attrs(() => ({
  initial: "hidden",
  variants: svgVariants,
  animate: "visible",
}))`
  width: 40px;
  overflow: visible;
  stroke: #fff;
  stroke-width: 1px;
`;
const MenuLogoWrapper = styled.div`
  outline: none;
  border: none;
  z-index:100;

  cursor: pointer;
  position: absolute;
  top: 30px;
  left: 29px;
  
  border-radius: 50%;
  background: transparent;

`;
const PlayLogoWrapper = styled.div`
position: absolute;
width:100%;

  svg {
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
  svg:hover {
    filter: invert(33%) sepia(98%) saturate(5401%) hue-rotate(85deg)
      brightness(100%) contrast(100%);
  }
`;
 const IconPathStyled = styled(motion.path).attrs(() => ({
  initial: "hidden",
  variants: pathVariants,
  animate: "visible",
}))``;
const RightSideWrapper = styled.div`
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

const BackgroundSidebar = styled.div`
position: fixed;
z-index:8;
  top: 0;
  left: 0;
  bottom: 0;
  width: 400px;
  background: rgb(255, 255, 255);
`