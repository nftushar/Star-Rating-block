import { render } from "react-dom";
import "./style.scss";
import Style from "./Style";
import ProductReview from "./Components/ProductReview";

document.addEventListener("DOMContentLoaded", () => {
  const ratingEls = document.querySelectorAll(
    ".wp-block-b-blocks-product-review"
  );
  ratingEls.forEach((ratingEl) => {
    const attributes = JSON.parse(ratingEl.dataset.attributes);
    const { cId } = attributes;

    render(
      <>
        <h1>HEllo</h1>
        <Style attributes={attributes} clientId={cId} />
        <ProductReview attributes={attributes} />
      </>,
      ratingEl
    );

    ratingEl?.removeAttribute("data-attributes");
  });
});
