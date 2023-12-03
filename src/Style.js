import { getMultiShadowCSS, getTypoCSS } from "../../Components/utils/getCSS";
import {  getBoxValue } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { alignment, textTypo, textColor, textShadow, padding } = attributes; 
    const pathSl = `#bBlocksPath-${clientId}`;
    const svgEL = `${pathSl} svg`
    const textSize = `${svgEL} .text`
    const textSl = `${textSize} textPath`;

    return <style>
        {`
            ${getTypoCSS(``, textTypo)?.googleFontLink}
            ${getTypoCSS(`${textSize}`, textTypo)?.styles}

        ${pathSl} {
            justify-content: ${alignment}; 
            fill: ${textColor};  
            margin-top: 50px;
        }
        ${svgEL}{
            padding: ${getBoxValue(padding)}
        } 
        ${textSl} {
            text-shadow: ${getMultiShadowCSS(textShadow, 'text')};
            fill: ${textColor}; 
        } 
        }
    `}
    </style>
}

export default Style;
