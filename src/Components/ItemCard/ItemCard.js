import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/cart';

function ItemCard(props) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const add = () => {
    dispatch(addToCart(props._id)); 
  }
  return (
    <div className="col-12 col-lg-6 d-flex">
      <article className="
        entity-block entity-hover-shadow
        text-center
        entity-preview-show-up
      ">
        <div className="entity-preview">
          <div className="embed-responsive embed-responsive-4by3">
            <img className="embed-responsive-item" src={props.imgsrc} alt="" />
          </div>
          <div className="with-back entity-preview-content">
            <div className="mx-auto mt-auto mb-4 text-center">
              <a className="btn-wide mr-2 btn btn-theme" onClick={add}>buy now</a><a className="btn-icon btn btn-theme" href="shop-sidebar-right.html"><i className="fas fa-heart" /></a>
            </div>
          </div>
        </div>
        <div className="pb-4 entity-content">
          <h4 className="entity-title">
            <a className="content-link" href="shop-product-sidebar-right.html">{props.name}</a>
          </h4>
          <div className="entity-price">
            <span className="currency">&#8377;</span>{props.price}
            <span className="price-unit">/ kg</span>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ItemCard
