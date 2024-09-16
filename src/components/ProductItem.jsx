import React from "react"
import "./ProductItem.css"
const ProductItem = () => {
  const backgroundImageUrl = "img/trending/trend-1.jpg"
  return (
    <div className="product__item">
      <div
        className="product__item__pic set-bg"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}>
        <div className="ep">18 / 18</div>
        <div className="comment">
          <i className="fa fa-comments"></i> 11
        </div>
        <div className="view">
          <i className="fa fa-eye"></i> 9141
        </div>
      </div>
      <div className="product__item__text">
        <ul>
          <li>Active</li>
          <li>Movie</li>
        </ul>
        <h5>
          <a href="#">The Seven Deadly Sins: Wrath of the Gods</a>
        </h5>
      </div>
    </div>
  )
}

export default ProductItem
