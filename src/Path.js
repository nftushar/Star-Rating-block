import React, { useEffect, useRef } from "react";
import Style from "./Style"; // Make sure to import the Style component

const Path = ({ attributes }) => {
    const { svgPath, strokeColor, cId, mainText, fillColor } = attributes;
    const svgRef = useRef(null);

    useEffect(() => {
        const svgElement = svgRef.current;
        const bbox = svgElement.getBBox();
        const newHeight = bbox.height;

        // Update the height of the SVG container dynamically
        svgElement.setAttribute("height", newHeight);
    }, [svgPath]); // Trigger the effect whenever svgPath changes

    return (
        <>
            <Style attributes={attributes} clientId={cId} />
            <div id={`bBlocksPath-${cId}`} className="bBlocksPath">
                <div className="b-text-path">
                    <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg">
                        <path id="MyPath" fill={fillColor} stroke={strokeColor} d={svgPath} />
                        <text className="text" dy="-10">
                            <textPath href="#MyPath" startOffset="0%">
                                {mainText}
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Path;
