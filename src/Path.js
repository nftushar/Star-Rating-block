import { getArrFromNum } from './utils/functions';
import { solidStar, outlineStar } from './utils/icons';

const Path = ({ attributes }) => {
    const { svgPath, iconStyle, prefix } = attributes;

    return (
        <div className="bBlockPath">
            <span className="pathPrefix">{prefix}</span>
            <div className="paths">
                <div className='main-content'>
                    <div className="main-path">
                        <svg width="300px" height="300px" xmlns="http://www.w3.org/2000/svg">
                            <path id="MyPath" fill="none" stroke="red" d={svgPath} />

                            {/* arc path  */}
                            {/* problem in size */}
                            {/* <path id="MyPath" fill="none" stroke="red" d="M0 50 A50 50, 0, 1, 1, 100 50" />   */}

                            {/* line path  */}
                            {/* problem in height */}
                            {/* <path id="MyPath" fill="none" stroke="red" d="M 0 27 l 250 -22" /> */}

                            {/* oval  */}
                            {/* problem in height */}
                            {/* <path id="MyPath" fill="none" stroke="red" d="M.25,62.875C.25,28.2882,56.2144.25,125.25.25s125,28.0382,125,62.625-55.9644,62.625-125,62.625S.25,97.4619.25,62.875" /> */}

                            {/* spiral  */}
                            {/* problem in height */}
                            {/* <path id="MyPath" fill="none" stroke="red"
                                d="M.1848,49.0219a149.3489,149.3489,0,0,1,210.9824-9.8266,119.479,119.479,0,0,1,7.8613,168.786A95.5831,95.5831,0,0,1,84,214.27a76.4666,76.4666,0,0,1-5.0312-108.023" /> */}
                            {/* Your paths and text here */}
                            {/* <path id="MyPath" fill="none" stroke="#ff6347" strokeWidth="3" d="M0 50 C100 20, 200 80, 300 50, 400 20, 500 50" /> */}

                            <text fontSize="24px" fill="#333" textAnchor="middle" dy="-10">
                                <textPath href="#MyPath" startOffset="5%">
                                    Quick brown fox jumps over the lazy dog. Quick brown fox jumps over the lazy dog. Quick brown fox jumps over the lazy dog.
                                </textPath>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Path;
