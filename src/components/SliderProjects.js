import React from "react";
import styled from "styled-components";
function SliderProjects({name, imgUrl, onLeftClick, onRightClick, description}) {
  return (
    <ProjectContainer>
      <ProjectImage>       <img src={`images/${imgUrl}`} alt="" />
 </ProjectImage>
      <DescriptionWrapper>
        <DescriptionProject>
          <p>{name}</p>
          <p className="secondP">{description}</p>
        </DescriptionProject>
        <img src="logos/like-logo.svg" alt="" />
      </DescriptionWrapper>
      <LineWrapper>
        <img  src="logos/line.svg" alt="" />
      </LineWrapper>
      <ControllersWrapper>
      <button  onClick={onLeftClick} style={{background: "none"}}>
      <img className="line" src="logos/back.svg" alt="" />
      </button>
      <button style={{background: "none"}}> 
      <img className="line" src="logos/play-logo.svg" alt="" />
        </button>
      <button onClick={onRightClick} style={{background: "none"}}>
     
      <img className="line" src="logos/next-logo.svg" alt="" />

        </button>




      </ControllersWrapper>
    </ProjectContainer>
  );
}

export default SliderProjects;

const ProjectContainer = styled.div`
  height: 742px;
  width: 403px;
  display: flex;
  flex-direction: column;
  align-items: center;
//   background: linear-gradient(180deg, #b0b0b0 21.35%, #000000 100%);
background: linear-gradient(328deg, rgba(144,71,148,1) 0%, rgba(93,192,201,1) 35%, rgba(236,146,146,1) 100%);
  border-radius: 25px;
  opacity: 0.98;


allowSlidePrev
  @media (max-width: 1380px) {
 transform: scale(0.8);
  }
  .line{
    transition: all 0.2s ease-in-out;

  }
  .line:hover{
    filter: invert(33%) sepia(98%) saturate(5401%) hue-rotate(85deg)
    brightness(100%) contrast(100%);  }
`;

const ProjectImage = styled.div`
  width: 357px;
  height: 338px;
  background: grey;
  margin-top: 59px;
  border-radius: 50px;
  overflow:hidden;
  object-fit:contain;

img{
  object-position:50% 0;
object-fit:cover;
width:100%;
height:100%;
} 

// @media (max-width: 1380px) {
  //   height: 178.2px;
  //   width: 169px;
  //   border-radius: 25px;
  //   margin-top:29.5px

  // }
`;

const DescriptionProject = styled.div`
  display: flex;
  text-align: start;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  margin-left: 10px;
  

  p {
    margin: 0;
    font-family: SF-Pro;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
  }

  .secondP {
    margin-top: 12px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: #c2c2c2;
  }
`;

const DescriptionWrapper = styled.div`
  margin-top: 33px;
  width: 357px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const LineWrapper = styled.div`
  margin-top: 27px;
  width: 357px;
  display: flex;
  justify-content: center;
`;

const ControllersWrapper = styled.div`

width: 307px;
margin-top:35px;
display: flex;
  justify-content: space-between;

  button{
       
    border:none;
    cursor:pointer;
   
  }


`
