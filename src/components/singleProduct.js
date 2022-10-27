import React from 'react'
import ItemList from './itemList';

function SingleProduct({title, image, category}) {
  return (
    <div className="single-product-page">
      <h1>{title}</h1>
      <img src={image} />
      <p>{category}</p>
    </div>
  )
}

export default SingleProduct;
