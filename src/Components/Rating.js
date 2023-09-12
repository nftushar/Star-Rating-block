import { getArrFromNum } from "../utils/functions";
import { solidStar, outlineStar } from "../utils/icons";

const Rating = ({ attributes }) => {
  const { ratingScale, iconStyle, prefix } = attributes;

  return (
    <div className="bBlocksProductReview">
      <div className="stars">
        {getArrFromNum(ratingScale).map((index) => {
          return (
            <span key={index} className="star">
              {"solid" === iconStyle ? solidStar : outlineStar}
              <span className="starFill">{solidStar}</span>
            </span>
          );
        })}
      </div>
      <span className="ratingPrefix">{prefix}</span>
    </div>
  );
};
export default Rating;
