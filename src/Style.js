import { getBorderCSS, getMultiShadowCSS } from "../../Components/utils/getCSS";
import { getArrFromNum } from "./utils/functions";

const Style = ({ attributes, clientId }) => {
    const { rating, gap, alignment, textTypo, textColor, textShadow } = attributes;

    const ratingSl = `#bBlocksRating-${clientId} .bBlocksRating`;
    const starSl = `${ratingSl} .stars .star`;
    const starFillSl = `${starSl} .starFill`;

    const intAndDec = (rating + '').split('.');
    const ratingInt = parseInt(intAndDec[0]);
    const ratingDec = parseInt(intAndDec[1] || 0);

    console.log({ ratingInt, ratingDec });

    return <style dangerouslySetInnerHTML={{
        __html: `
        ${getArrFromNum(ratingInt).map((index) => {
            return `
            ${starSl}:nth-child(${index}){
                width: 30px;
            }
        `
        })}
    `}}
    />
}
export default Style;