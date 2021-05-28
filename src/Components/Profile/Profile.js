import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Jumbo from "../Jumbo/Jumbo";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Profile() {
  const history = useHistory();

  const [userUpdatein, setUpdatein] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    zip: "",
    phone: ""
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setUpdatein({ ...userUpdatein, [name]: value });
  }

  useEffect(async () => {
    const token = localStorage.getItem("access_token");
    await fetch("https://vegetable-store-backend.herokuapp.com/users/verifykro", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'x-access-token': token
      }
    }).then(res => res.json()).then(data => {
      if (data.error)
        toast.error(data.error);
      else {
        setUpdatein(data);
      }
    })
  }, [])

  function handleclick(e) {
    e.preventDefault();
    const { _id, firstName, lastName, userName, email, password, confirmPassword, address, city, zip, phone } = userUpdatein;
    fetch("https://vegetable-store-backend.herokuapp.com/users/" + _id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, userName, email, password, confirmPassword, address, city, zip, phone })
    }).then(res => res.json()).then(data => {
      if (data.message) {
        toast.success(data.message);
        history.push("/dashboard");
      }
      else {
        toast.error(data.error);
      }
    })
  }


  return (
    <div>
      <Jumbo name="Profile" />
      <div className="section mb-0 container text-center">
        <nav className="line-navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard
          </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/profile">Profile
          </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link" to="/order">Orders
          </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/wishlist">Wishlist
          </Link>
            </li>
          </ul>
          <div className="separator-line wide mirror">
          </div>
        </nav>
      </div>
      <section className="mt-0 section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-7 mx-auto">
              <form>
                <h2 className="section-title text-center my-5">Personal information
            </h2>
                <div className="row grid">
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">FirstName
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="firstName" type="text" onChange={handleChange} value={userUpdatein.firstName} required="required" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Last name
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="lastName" type="text" onChange={handleChange} value={userUpdatein.lastName} required="required" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">UserName
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="userName" type="text" onChange={handleChange} value={userUpdatein.userName} required="required" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Your Email
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="email" type="email" onChange={handleChange} value={userUpdatein.email} required="required" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-view-flat input-gray-shadow form-group-preview">
                      <div className="file-preview mr-4">
                        <div className="file-preview-image">
                          <img className="mw-100" src="./assets/images/content/100x100/people-1.jpg" alt="Hii" />
                        </div>
                        <div className="file-no-preview">
                          <i className="far fa-image">
                          </i>
                        </div>
                        <div className="file-preview-bg">
                        </div>
                      </div>
                      <div className="my-auto form-group">
                        <label>Upload new avatar - JPEG 100x100
                    </label>
                        <div className="input-group-file">
                          <input className="form-control-file" name="avatar" type="file" />
                          <div className="input-group">
                            <input className="form-control" name="avatarPlaceholder" type="text" placeholder="No file choosen" />
                          </div>
                          <a className="form-control-file-btn btn btn-theme" href="#">choose file
                      </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="section-title text-center my-5">Billing address
            </h2>
                <div className="row grid">
                  <div className="col-12">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Address
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="address" type="text" onChange={handleChange} value={userUpdatein.address} required="required" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Town / City
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="city" type="text" onChange={handleChange} value={userUpdatein.city} required="required" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Postcode / Zip
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="zip" type="text" onChange={handleChange} value={userUpdatein.zip} required="required" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Phone
                  </label>
                      <div className="input-group">
                        <input className="form-control" name="phone" type="text" onChange={handleChange} value={userUpdatein.phone} required="required" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row grid mt-0">
                  <div className="col-auto mx-auto">
                    <button onClick={handleclick} className="btn-wide mb-0 btn btn-theme" type="submit">update
                </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="cart-sidebar collapse" data-block="cart" data-show-block-class="animation-scale-top-right" data-hide-block-class="animation-unscale-top-right">
        <a className="close-link" href="#" data-close-block="true">
          <i className="fas fa-times">
          </i>
        </a>
        <div className="cart-inner">
          <h4 className="text-title mb-2">Cart
      </h4>
          <div className="separator-line mb-4">
          </div>
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5">
                <a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html">
                  <span className="embed-responsive embed-responsive-4by3">
                    <img className="embed-responsive-item" src="./assets/images/content/720x540/blueberry.jpg" alt="Hii" />
                  </span>
                  <span className="with-back entity-preview-content">
                    <span className="h3 m-auto text-theme text-center">
                      <i className="fas fa-search">
                      </i>
                    </span>
                    <span className="overflow-back bg-body-back opacity-70">
                    </span>
                  </span>
                </a>
              </div>
              <div className="col">
                <h4 className="h5 mb-1 entity-title">
                  <a className="content-link" href="shop-product-sidebar-right.html">Blueberry
              </a>
                </h4>
                <div className="entity-price">
                  <span className="currency">$
              </span>12.50/kg
              <span className="entity-quantity">&nbsp;x&nbsp;10
              </span>
                </div>
                <div className="entity-total">total:&nbsp;&nbsp;&nbsp;$125.00
            </div>
              </div>
            </div>
          </div>
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5">
                <a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html">
                  <span className="embed-responsive embed-responsive-4by3">
                    <img className="embed-responsive-item" src="./assets/images/content/720x540/orange.jpg" alt="Hii" />
                  </span>
                  <span className="with-back entity-preview-content">
                    <span className="h3 m-auto text-theme text-center">
                      <i className="fas fa-search">
                      </i>
                    </span>
                    <span className="overflow-back bg-body-back opacity-70">
                    </span>
                  </span>
                </a>
              </div>
              <div className="col">
                <h4 className="h5 mb-1 entity-title">
                  <a className="content-link" href="shop-product-sidebar-right.html">Orange
              </a>
                </h4>
                <div className="entity-price">
                  <span className="currency">$
              </span>4.99/kg
              <span className="entity-quantity">&nbsp;x&nbsp;5
              </span>
                </div>
                <div className="entity-total">total:&nbsp;&nbsp;&nbsp;$24.95
            </div>
              </div>
            </div>
          </div>
          <div className="separator-line mt-4 mb-3">
          </div>
          <ul className="cart-totals list-titled">
            <li>
              <span className="list-item-title">Sub Total
          </span>
              <span className="list-item-value">$149.95
          </span>
            </li>
            <li>
              <span className="list-item-title">Shipping
          </span>
              <span className="list-item-value">$10.00
          </span>
            </li>
            <li className="separator-line">
            </li>
            <li className="cart-total">
              <span className="list-item-title">Total
          </span>
              <span className="list-item-value">$159.95
          </span>
            </li>
          </ul>
          <a className="w-100 mb-2 btn btn-theme-bordered" href="shop-cart.html">view cart&nbsp;&nbsp;&nbsp;
        <i className="fas fa-shopping-bag">
            </i>
          </a>

          <a className="w-100 btn btn-theme" href="shop-checkout.html">checkout&nbsp;&nbsp;&nbsp;
        <i className="fas fa-shopping-cart">
            </i>
          </a>
        </div>
      </div>
      <div className="scroll-top">
        <i className="fas fa-long-arrow-alt-up">
        </i>
      </div>
    </div>
  )
}

export default Profile;