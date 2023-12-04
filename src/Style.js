// Style.js
import React from "react";
import { getMultiShadowCSS, getTypoCSS } from "../../Components/utils/getCSS";
import { getBoxValue } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { alignment, textTypo, textColor, textShadow, padding, floating } = attributes;
    const { translate, rotate, scale, enabled: floatingEnabled } = floating;
    const { translateX, translateY, duration, delay } = translate;
    const { rotateX, rotateY, rotateZ, rotateDuration, rotateDelay } = rotate;
    const { scaleX, scaleY } = scale;

    const pathSl = `#bBlocksPath-${clientId}`;
    const svgEL = `${pathSl} svg`;
    const textSize = `${svgEL} .text textPath`;
    //   const textSize = `${textSize} textPath`; 

    return (
        <style>
            {`
        ${getTypoCSS(``, textTypo)?.googleFontLink}
        ${getTypoCSS(`${textSize}`, textTypo)?.styles}

        @keyframes floatingAnimation${clientId} {
          0% {
            transform: translateX(0) translateY(0) rotateX(0) rotateY(0) rotateZ(0) scaleX(1) scaleY(1);
          }
          100% {
            transform: translateX(${translateX}px) translateY(${translateY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scaleX(${scaleX}) scaleY(${scaleY});
          }
        }    

        ${pathSl} {  
          display: grid;
          justify-content: center;
          ${floatingEnabled ? ` animation: floatingAnimation${clientId} ${duration}s infinite alternate ease-in-out ${delay}s; ` : ''}
          justify-content: ${alignment}; 
          fill: ${textColor};  
          margin-top: 50px;
        } 

        ${pathSl}.custom-animation-class {
          animation-duration: ${rotateDuration}s;
          animation-delay: ${rotateDelay}s;
        } 
        ${svgEL} {
          padding: ${getBoxValue(padding)};
        } 
        ${textSize} {
          text-shadow: ${getMultiShadowCSS(textShadow, 'text')};
          fill: ${textColor}; 
        } 
      `}
        </style>
    );
};

export default Style;
