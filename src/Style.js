import { getMultiShadowCSS, getTypoCSS } from "../../Components/utils/getCSS";
import { getArrFromNum } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { path, gap, alignment, textTypo, textColor, textShadow } = attributes;

    const pathSl = `#bBlocksPath-${clientId}`;
    // div#bBlocksPath-b7cd7963-594f-425b-ab8b-9f70e3c560eb
    const textSl = `${pathSl} .paths .text`;
    const intAndDec = (path + '').split('.');
    const pathInt = parseInt(intAndDec[0]);
    const pathDec = parseInt(intAndDec[1] || 0);

    return <style dangerouslySetInnerHTML={{
        __html: `
        ${getTypoCSS(``, textTypo)?.googleFontLink}
        ${getTypoCSS(`${pathSl} .pathPrefix`, textTypo)?.styles}

          ${pathSl} {
            
            justify-content: ${alignment};
            gap: ${gap};
            color: ${textColor}; 
          }

          ${pathSl} .pathPrefix{
            text-shadow: ${getMultiShadowCSS(textShadow, 'text')}
          }

        ${getArrFromNum(pathInt).map((index) => `${textSl}:nth-child(${index}) .textFill`).join(', ')}{
            width: 100%;
        }

        ${textSl}:nth-child(${pathInt + 1}) .textFill{
            width: ${(() => {
                switch (pathDec) {
                    case 1:
                        return 25;
                    case 2:
                        return 30;
                    case 3:
                        return 35;
                    case 4:
                        return 42.5;
                    case 5:
                        return 50;
                    case 6:
                        return 57.5;
                    case 7:
                        return 65;
                    case 8:
                        return 70;
                    case 9:
                        return 75;
                    default:
                        return 0
                }
            })()}%;
        }
    `}}
    />
}
export default Style;