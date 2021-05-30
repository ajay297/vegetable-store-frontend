import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Jumbo from '../Jumbo/Jumbo';
import ShopItem from './ShopItem';
import { clearFromCart } from '../../store/actions/cart'
import { Link } from "react-router-dom";

function ShopCart() {
  const cart = useSelector(state => state.cart);
  const Data = useSelector(state => state.data);
  const data = Data.data;
  const dispatch = useDispatch();
  const cartArray = [];
  let itemsNumber = 0;
  for (const items in cart) {
    itemsNumber += cart[items];
    const index = data.findIndex(ele => ele._id === items);
    if (index != -1 && cart[items] != 0)
      cartArray.push({ _id: items, name: data[index].name, price: data[index].price, qty: cart[items], image: data[index].image });
  }
  let total = 0;
  cartArray.forEach(ele => {
    total += (ele.price * ele.qty);
  })

  const clear = (e) => {
    e.preventDefault();
    dispatch(clearFromCart());
  }
  return (
    <div>
      <Jumbo name="Cart" />
      <section className="mb-0 section">
        <form className="container">
          <div className="cart-items">
            <div className="cart-header">
              <h2 className="cart-title">Products in Your Cart</h2>
              <div className="cart-item-title">Product</div>
              <div className="cart-item-price">Price</div>
              <div className="cart-item-quantity">Quantity</div>
              <div className="cart-item-total">Total</div>
              <div className="cart-item-remove" />
            </div>
            {
              cartArray.map(ele => (
                <ShopItem key={ele._id} name={ele.name} price={ele.price} qty={ele.qty} id={ele._id} image={ele.image} />
              ))
            }





            <div className="separator-line" />
            <div className="cart-footer">
              <div className="grid-sm row">
                <div className="col-sm-6 col-md-4 col-lg-3">
                  <button className="btn btn-theme-bordered" onClick={(e) => clear(e)}>
                    clear shopping cart
                  </button>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-3 mr-auto">
                </div>
                <div className="col-md-4 col-lg-3">
                  <Link className="btn btn-theme" to="/">
                    continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-block">
            <div className="cols-xl row">
              <div className="col-lg-6 mr-auto">
              </div>
              <div className="col-auto mx-auto mx-lg-0">
                <div className="cart-block">
                  <ul className="cart-totals list-titled">
                    <li>
                      <span className="list-item-title">Sub Total</span><span className="list-item-value">&#8377;{total}</span>
                    </li>
                    <li>
                      <span className="list-item-title">Shipping</span><span className="list-item-value">&#8377;10.00</span>
                    </li>
                    <li className="separator-line" />
                    <li className="cart-total">
                      <span className="list-item-title">Total</span><span className="list-item-value">&#8377;{total + 10}</span>
                    </li>
                  </ul>
                  <div className="col-md-4 col-lg-3">
                    <Link className="btn btn-theme" to="/checkout">
                      Proceed
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          </div></form>
      </section>
    </div>
  )
}

export default ShopCart
