import { getArrFromNum } from './utils/functions';
import { solidStar, outlineStar } from './utils/icons';

const Path = ({ attributes }) => {
    const { svgPath, iconStyle, prefix, strokeColor, cId } = attributes;

    return (
        <div id={`bBlocksPath-${cId}`} className="bBlocksPath" >
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                <path id="MyPath" fill="none" stroke={strokeColor} d={svgPath} />
                <text fontSize="24px" fill="#333" textAnchor="middle" dy="-10">
                    <textPath href="#MyPath" startOffset="5%">
                        Quick brown fox jumps over the lazy dog. Quick brown fox jumps over the lazy dog. Quick brown fox jumps over the lazy dog.
                    </textPath>
                </text>
            </svg>
        </div>
    );
}

export default Path;
