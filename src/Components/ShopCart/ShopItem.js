import React from 'react';
import { useState, useEffect } from 'react';
import { addToCart, removeFromCart } from '../../store/actions/cart';
import { useDispatch, useSelector } from 'react-redux'
import Jumbo from '../Jumbo/Jumbo';

function ShopItem(props) {
  const [count, setCount] = useState(props.qty);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const add = () => {
    dispatch(addToCart(props.id));
  }
  const remove = () => {
    dispatch(removeFromCart(props.id));
  }

  const Increament = () => {
    setCount(count + 1);
    add();
  }
  const Decreament = () => {
    if (count > 0) {
      setCount(count - 1);
      remove();
    }
  }

  return (
    <div className="cart-item-entity">
      <div className="cart-item-image">
        <a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src={props.image} alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a>
      </div>
      <div className="cart-item-title">
        <a className="content-link" href="shop-product-sidebar-right.html">{props.name}</a>
      </div>
      <div className="cart-item-price">&#8377;{props.price}</div>
      <div className="cart-item-quantity">
        <div className="input-view-flat input-gray-shadow input-spin input-group">
          <input className="form-control" min={1} name="text" type="text" value={count} />
          <span className="input-actions"><span className="input-decrement" onClick={Decreament}><i className="fas fa-minus" /></span>
            <span className="input-increment" onClick={Increament}><i className="fas fa-plus" /></span></span>
        </div>
      </div>
      <div className="cart-item-total">
        <span className="cart-item-total-text">Item total:</span>&#8377;{props.qty * props.price}
      </div>
      <div className="cart-item-remove">
        <a href="#"><span className="cart-item-remove-text">remove from cart</span><i className="fas fa-times" /></a>
      </div>
    </div>
  )
}

export default ShopItem
