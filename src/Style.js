import { getMultiShadowCSS, getTypoCSS } from "../../Components/utils/getCSS";
import { getArrFromNum } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { path, gap, alignment, textTypo, textColor, textShadow } = attributes;

    const pathSl = `#bBlocksPath-${clientId}`;
    const textSl = `${pathSl} textPath`;

    return <style dangerouslySetInnerHTML={{
        __html: `
        ${getTypoCSS(``, textTypo)?.googleFontLink}
        ${getTypoCSS(`${pathSl} .pathPrefix`, textTypo)?.styles}

        ${pathSl} {
            justify-content: ${alignment};
            gap: ${gap};
            fill: ${textColor}; 
        }

        ${textSl} {
            text-shadow: ${getMultiShadowCSS(textShadow, 'text')};
            fill: ${textColor}; 
        } 
        }
    `}}
    />
}

export default Style;
