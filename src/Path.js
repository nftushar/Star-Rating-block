 

const Path = ({ attributes }) => {
    const { svgPath, strokeColor, cId, mainText, fillColor  } = attributes;

    return (
        <div id={`bBlocksPath-${cId}`} className="bBlocksPath">
            <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
                <path id="MyPath" fill={fillColor} stroke={strokeColor} d={svgPath} />
                <text className='text' fontSize="4px" fill="#333" textAnchor="middle" dy="-10">
                    <textPath href="#MyPath" startOffset="5%">
                       {mainText}
                    </textPath>
                </text>
            </svg>
        </div>
    );
}

export default Path;
