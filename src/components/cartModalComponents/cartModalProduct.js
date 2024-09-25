import React from 'react';


const CartModalProduct = ({product}) => {


  return (
    <div class="cartModal__body-products-product">
      <img
        class="cartModal__body-products-product-image"
        src={product.img}
        alt={product.name}
      />
      <div class="cartModal__body-products-product-text">
        <h1 class="cartModal__body-products-product-text-heading">
        {product.name}
        </h1>
        <div class="cartModal__body-products-product-text-pricetag">
          <h1
            class="cartModal__body-products-product-text-pricetag-count"
          >
            1
          </h1>
          <h1
            class="cartModal__body-products-product-text-pricetag-x"
          >
            x
          </h1>
          <h1
            class="cartModal__body-products-product-text-pricetag-price"
          >
            ${product.price}
          </h1>
        </div>
      </div>
      <div class="cartModal__body-products-product-box">
        <button
          class="cartModal__body-products-product-box-button"
        ></button>
      </div>
    </div>


  );
};

export default CartModalProduct;
