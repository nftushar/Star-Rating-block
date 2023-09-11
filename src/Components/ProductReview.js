import React from "react";
import Rating from "./Rating";

function ProductReview({ attributes }) {
  return (
    <div className="main">
      <div className="review-header">
        <h1 className="review-heading">Shart</h1>
        <div className="header-rating">
          <div className="rating">
            <Rating attributes={attributes} />
          </div>
          <span className="dist-price">
            <del>$20</del> $18
          </span>
        </div>
      </div>
      <div className="review-header">
        <image></image>
        <p className="header-desc">
          If you are working with web content generated by Gutenberg, you can
          use HTML, CSS, and JavaScript along with a front-end framework like
          React, Vue.js, or Angular to build a GUI.
        </p>
      </div>

      <div className="review-body">
        <div className="review-left">
          <div className="review-left-features">
            <div className="review-left-feature">
              <span>Stability</span>
              <Rating attributes={attributes} />
            </div>
            <span>angular to build a GUI.</span>
          </div>
          <div className="review-left-features">
            <div className="review-left-feature">
              <span>2 Stability</span>
              <Rating attributes={attributes} />
            </div>
            <span>angular to build a GUI.</span>
          </div>
        </div>
        <div className="review-right">
          <h3>Pros</h3>
          <div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M18.3 5.6L9.9 16.9l-4.6-3.4-.9 2.4 5.8 4.3 9.3-12.6z"></path>
            </svg> */}
            <p aria-label="Why do you like the product?">Easy to use</p>
            <p aria-label="Why do you like the product?">Easy to use</p>
            <p aria-label="Why do you like the product?">Easy to use</p>
          </div>
        </div>
      </div>
      <div className="review-footer">
        <h3>Buy this Product</h3>
        <div className="review-footer-button">
          <span aria-multiline="true" aria-label="Button label">
            Buy on Amazon
          </span>
          <span aria-multiline="true" aria-label="Button label">
            Buy on Amazon
          </span>
          <span aria-multiline="true" aria-label="Button label">
            Buy on Amazon
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductReview;