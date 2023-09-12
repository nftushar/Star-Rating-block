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
      <div className="review-header-desc">
        <div className="image">
          <image></image>
        </div>
        <div className="desc">
          <p>hello this is a product description</p>
        </div>
      </div>
      <div className="review-body">
        <div className="review-left">
          <div className="review-left-features">
            <div className="review-left-content">
              <span className="review-heading">Stability</span>
              <Rating attributes={attributes} />
              <span className="review-desc">Feature description</span>
            </div>
          </div>
          <div className="review-left-features">
            <div className="review-left-content">
              <span className="review-heading">Ease of Use</span>
              <Rating attributes={attributes} />
              <span className="review-desc">Feature description</span>
            </div>
          </div>
        </div>
        <div className="review-right">
          <h3>Pros</h3>
          <div className="review-right-pros">
            <div className="review-right-pros-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M18.3 5.6L9.9 16.9l-4.6-3.4-.9 2.4 5.8 4.3 9.3-12.6z"></path>
              </svg>
              <p aria-label="Why do you like the product?">
                Sturdy build and ergonomics
              </p>
            </div>{" "}
            <div className="review-right-pros-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M18.3 5.6L9.9 16.9l-4.6-3.4-.9 2.4 5.8 4.3 9.3-12.6z"></path>
              </svg>
              <p aria-label="Why do you like the product?">Easy to use</p>
            </div>{" "}
            <div className="review-right-pros-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M18.3 5.6L9.9 16.9l-4.6-3.4-.9 2.4 5.8 4.3 9.3-12.6z"></path>
              </svg>
              <p aria-label="Why do you like the product?">Easy to use</p>
            </div>
          </div>
          <div className="review-right-pos">
            <h3>Cons</h3>
            <div className="review-right-pros-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
              </svg>
              <p aria-label="Why do you like the product?">
                Incompatible with old
              </p>
            </div>
            <div className="review-right-pros-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
              </svg>
              <p aria-label="Why do you like the product?">Easy to use</p>
            </div>
            <div className="review-right-pros-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
              </svg>
              <p aria-label="Why do you like the product?">Easy to use</p>
            </div>
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
