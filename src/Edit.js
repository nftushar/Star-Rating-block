import React, { useEffect } from "react";
import Settings from "./Settings";
import Style from "./Style";
import { solidStar, outlineStar } from "./utils/icons";
import { getArrFromNum } from "./utils/functions";

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId, isSelected } = props;
  const { ratingScale, iconStyle } = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId, setAttributes]);

  return (
    <>
      <Settings attributes={attributes} setAttributes={setAttributes} />

      <div className={className} id={`bBlocksRating-${clientId}`}>
        <Style attributes={attributes} clientId={clientId} />
        <div className="bBlocksRating">
          <span className="ratingPrefix"></span>

          <div className="stars">
            {getArrFromNum(ratingScale).map((index) => {
              return <span key={index} className="star">
                {'solid' === iconStyle ? solidStar : outlineStar}
                <span className="starFill">{solidStar}</span>
              </span>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
