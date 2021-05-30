import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function Checkout() {
  const history = useHistory();
  const [userUpdatein, setUpdatein] = useState({

  });
  const cart = useSelector(state => state.cart);
  const Data = useSelector(state => state.data);
  const data = Data.data;
  const dispatch = useDispatch();
  const cartArray = [];
  let total = 0, shipping = 10;
  for (const items in cart) {
    const index = data.findIndex(ele => ele._id === items);
    if (index != -1 && cart[items] != 0)
      cartArray.push({ _id: items, name: data[index].name, total_price: data[index].price * cart[items], qty: cart[items], price: data[index].price });
  }
  cartArray.forEach(ele => {
    total += (ele.total_price);
  })

  useEffect(() => {
    checkToken();
    async function checkToken() {
      const token = localStorage.getItem("access_token");
      await fetch("https://vegetable-store-backend.herokuapp.com/users/verifykro", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'x-access-token': token
        }
      }).then(res => res.json()).then(data => {
        if (data.error) {
          toast.error(data.error);
          history.push("/login");
        }
        else {
          setUpdatein(data);
        }
      })
    }
  }, [])

  function handleclick(e) {
    e.preventDefault();
    console.log(cartArray);
    const { _id, firstName, lastName, email, password, confirmPassword, address, city, zip, phone } = userUpdatein;
    fetch("https://vegetable-store-backend.herokuapp.com/sabzi/order/" + _id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, email, shipping_cost: 10, created_at: Date.now(), address, city, zip, phone, product: cartArray })
    }).then(res => res.json()).then(data => {
      if (data.message) {
        toast.success(data.message);
        history.push("/order");
      }
      else {
        toast.error(data.error);
      }
    })
  }

  return (
    <div>
      <section className="section">
        <form className="container" action="#" method="POST">
          <div className="cols-xl row">
            <div className="col-lg-6">
              <h2 className="text-title mb-5">Billing details</h2>
              <div className="grid row">
                <div className="col-md-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Your Name</label>
                    <div className="input-group">
                      <input className="form-control" name="name" type="text" placeholder="Name" value={userUpdatein.firstName + " " + userUpdatein.lastName} required="required" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Your Email</label>
                    <div className="input-group">
                      <input className="form-control" name="email" type="email" placeholder="Email" value={userUpdatein.email} required="required" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Address</label>
                    <div className="input-group">
                      <input className="form-control" name="address" type="text" placeholder="Address" value={userUpdatein.address} required="required" />
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Town / City</label>
                    <div className="input-group">
                      <input className="form-control" name="city" type="text" placeholder="Town / City" value={userUpdatein.city} required="required" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Postcode / Zip</label>
                    <div className="input-group">
                      <input className="form-control" name="zip" type="text" placeholder="Postcode / Zip" value={userUpdatein.zip} required="required" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <label className="required">Phone</label>
                    <div className="input-group">
                      <input className="form-control" name="phone" type="text" placeholder="Phone" value={userUpdatein.phone} required="required" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="text-title mb-5">Your order</h2>
              <div className="order-items mb-5">
                <div className="order-header">
                  <div className="order-line-title">Name</div>
                  <div className="order-line-total">Total</div>
                </div>
                {
                  cartArray.map(ele => (
                    <div className="order-item" key={ele.id}>
                      <div className="order-line-title">{ele.name}</div>
                      <div className="order-line-total">{ele.total_price}</div>
                    </div>
                  ))
                }
                <div className="order-subtotal">
                  <div className="order-line-title">Sub Total</div>
                  <div className="order-line-total">{total}</div>
                </div>
                <div className="order-subtotal">
                  <div className="order-line-title">Shipping</div>
                  <div className="order-line-total">{shipping}</div>
                </div>
                <div className="separator-line" />
                <div className="order-total">
                  <div className="order-line-title">Total</div>
                  <div className="order-line-total">{total + shipping}</div>
                </div>
              </div>
              <h3 className="text-title mb-4">Payment Details</h3>
              <div className="grid row">
                <div className="col-12">
                </div>
                <div className="input-view-flat input-gray-shadow form-group">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" id="cash-on-payment" name="paymentType" defaultValue="Cash On Payment" /><span className="form-check-icon" /><label className="form-check-label" htmlFor="cash-on-payment">Cash On Payment</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-view-flat input-gray-shadow form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms-and-conditions" name="terms" defaultValue="yes" /><span className="form-check-icon" /><label className="form-check-label" htmlFor="terms-and-conditions">I've read &amp; accept the
                        <a href="#" target="_blank">terms &amp; conditions</a></label>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <button onClick={handleclick} className="btn-wider btn btn-theme" type="submit">
                    place order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
      {/* <div className="cart-sidebar collapse" data-block="cart" data-show-block-class="animation-scale-top-right" data-hide-block-class="animation-unscale-top-right">
        <a className="close-link" href="#" data-close-block="true"><i className="fas fa-times" /></a>
        <div className="cart-inner">
          <h4 className="text-title mb-2">Cart</h4>
          <div className="separator-line mb-4" />
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5">
                <a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src="./assets/images/content/720x540/blueberry.jpg" alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a>
              </div>
              <div className="col">
                <h4 className="h5 mb-1 entity-title">
                  <a className="content-link" href="shop-product-sidebar-right.html">Blueberry</a>
                </h4>
                <div className="entity-price">
                  <span className="currency">$</span>12.50/kg<span className="entity-quantity">&nbsp;x&nbsp;10</span>
                </div>
                <div className="entity-total">total:&nbsp;&nbsp;&nbsp;$125.00</div>
              </div>
            </div>
          </div>
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5">
                <a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src="./assets/images/content/720x540/orange.jpg" alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a>
              </div>
              <div className="col">
                <h4 className="h5 mb-1 entity-title">
                  <a className="content-link" href="shop-product-sidebar-right.html">Orange</a>
                </h4>
                <div className="entity-price">
                  <span className="currency">$</span>4.99/kg<span className="entity-quantity">&nbsp;x&nbsp;5</span>
                </div>
                <div className="entity-total">total:&nbsp;&nbsp;&nbsp;$24.95</div>
              </div>
            </div>
          </div>
          <div className="separator-line mt-4 mb-3" />
          <ul className="cart-totals list-titled">
            <li>
              <span className="list-item-title">Sub Total</span><span className="list-item-value">$149.95</span>
            </li>
            <li>
              <span className="list-item-title">Shipping</span><span className="list-item-value">$10.00</span>
            </li>
            <li className="separator-line" />
            <li className="cart-total">
              <span className="list-item-title">Total</span><span className="list-item-value">$159.95</span>
            </li>
          </ul>
          <a className="w-100 mb-2 btn btn-theme-bordered" href="shop-cart.html">view cart&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-bag" /></a><a className="w-100 btn btn-theme" href="shop-checkout.html">checkout&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-cart" /></a>
        </div>
      </div> */}
    </div>
  )
}

export default Checkout
