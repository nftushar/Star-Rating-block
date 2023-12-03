import { getMultiShadowCSS, getTypoCSS } from "../../Components/utils/getCSS";
import { getArrFromNum, getBoxValue } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { path, alignment, textTypo, textColor, textShadow, padding } = attributes; 
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
