import React from "react";

const Product = (props) => {
  const {
    _id,
    price,
    name,
    image,
    description,
    availableQuantity,
  } = props;

  return (
    <div className="card h-100">
      <a href={`/product/${_id}`}>
        <img className="card-img-hrefp" src={image} alt={name} />
      </a>
      <div className="card-body">
        <h4 className="card-title">
          <a href={`/product/${_id}`}>{name}</a>
        </h4>
        <h5>${price}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
  );
};

export default Product;