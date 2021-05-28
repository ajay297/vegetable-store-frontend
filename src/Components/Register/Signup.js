import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Jumbo from "../Jumbo/Jumbo";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Signup() {
  const history = useHistory();
  const [userRegisterin, setRegisterin] = useState({
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
    setRegisterin({ ...userRegisterin, [name]: value });
    if (userRegisterin.confirmPassword === userRegisterin.password)
      console.log("Yes");
    else
      console.log("No");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { firstName, lastName, userName, email, password, confirmPassword, address, city, zip, phone } = userRegisterin;

    const res = await fetch("https://vegetable-store-backend.herokuapp.com/users/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName, lastName, userName, email, password, confirmPassword, address, city, zip, phone })
    });
    const data = await res.json();
    // console.log(data);
    if (data.message) {
      toast.success("Successfully registered");
      history.push("/login");
    }
    else {
      toast.error(data.error);
    }
  }
  return (
    <>
      <Jumbo name="SignUp" />
      <section className="section">
        <div className="section-head">
          <div className="section-icon"><span className="svg-fill-light-green svg-content" data-svg="./assets/images/svg/title-grape.svg" /></div>
          <div className="section-head-content">
            <h2 className="section-title">Sign Up</h2>
            <p className="section-text">Join our big family.</p>
          </div>
        </div>
        <div className="container">
          <div className="row" />
          <div className="row">
            <div className="col-sm-12 col-md-10 col-lg-7 mx-auto">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="row grid">
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">First name</label>
                      <div className="input-group"><input className="form-control" name="firstName" type="text" onChange={handleChange} value={userRegisterin.firstName} placeholder="First name" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Last name</label>
                      <div className="input-group"><input className="form-control" name="lastName" type="text" onChange={handleChange} value={userRegisterin.lastName} placeholder="Last name" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">UserName</label>
                      <div className="input-group"><input className="form-control" name="userName" type="text" onChange={handleChange} value={userRegisterin.userName} placeholder="User name" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Your Email</label>
                      <div className="input-group"><input className="form-control" name="email" type="email" onChange={handleChange} value={userRegisterin.email} placeholder="Email" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Password</label>
                      <div className="input-group"><input className="form-control" name="password" type="password" onChange={handleChange} value={userRegisterin.password} placeholder="Password" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Confirm password</label>
                      <div className="input-group"><input className="form-control" name="confirmPassword" type="confirmPassword" onChange={handleChange} value={userRegisterin.confirmPassword} placeholder="Confirm password" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Address</label>
                      <div className="input-group"><input className="form-control" name="address" type="text" onChange={handleChange} value={userRegisterin.address} placeholder="Address" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Town / City</label>
                      <div className="input-group"><input className="form-control" name="city" type="text" onChange={handleChange} value={userRegisterin.city} placeholder="Town / City" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Postcode / Zip</label>
                      <div className="input-group"><input className="form-control" name="zip" type="text" onChange={handleChange} value={userRegisterin.zip} placeholder="Postcode / Zip" required="required" /></div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <label className="required">Phone</label>
                      <div className="input-group"><input className="form-control" name="phone" type="text" onChange={handleChange} value={userRegisterin.phone} placeholder="Phone" required="required" /></div>
                    </div>
                  </div>
                  <div className="col-auto mx-auto"><button className="btn-wide mb-0 btn btn-theme" type="submit">sign up</button></div>
                  <div className="col-12 text-center">Already have an account?&nbsp;<a href="/login">Sign in</a></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="cart-sidebar collapse" data-block="cart" data-show-block-class="animation-scale-top-right" data-hide-block-class="animation-unscale-top-right">
        <a className="close-link" href="#" data-close-block="true"><i className="fas fa-times" /></a>
        <div className="cart-inner">
          <h4 className="text-title mb-2">Cart</h4>
          <div className="separator-line mb-4" />
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5"><a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src="./assets/images/content/720x540/blueberry.jpg" alt /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a></div>
              <div className="col">
                <h4 className="h5 mb-1 entity-title"><a className="content-link" href="shop-product-sidebar-right.html">Blueberry</a></h4>
                <div className="entity-price"><span className="currency">$</span>12.50/kg<span className="entity-quantity">&nbsp;x&nbsp;10</span></div>
                <div className="entity-total">total:&nbsp;&nbsp;&nbsp;$125.00</div>
              </div>
            </div>
          </div>
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5"><a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src="./assets/images/content/720x540/orange.jpg" alt /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a></div>
              <div className="col">
                <h4 className="h5 mb-1 entity-title"><a className="content-link" href="shop-product-sidebar-right.html">Orange</a></h4>
                <div className="entity-price"><span className="currency">$</span>4.99/kg<span className="entity-quantity">&nbsp;x&nbsp;5</span></div>
                <div className="entity-total">total:&nbsp;&nbsp;&nbsp;$24.95</div>
              </div>
            </div>
          </div>
          <div className="separator-line mt-4 mb-3" />
          <ul className="cart-totals list-titled">
            <li><span className="list-item-title">Sub Total</span><span className="list-item-value">$149.95</span></li>
            <li><span className="list-item-title">Shipping</span><span className="list-item-value">$10.00</span></li>
            <li className="separator-line" />
            <li className="cart-total"><span className="list-item-title">Total</span><span className="list-item-value">$159.95</span></li>
          </ul>
          <a className="w-100 mb-2 btn btn-theme-bordered" href="shop-cart.html">view cart&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-bag" /></a><a className="w-100 btn btn-theme" href="shop-checkout.html">checkout&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-cart" /></a>
        </div>
      </div>
      <div className="scroll-top"><i className="fas fa-long-arrow-alt-up" /></div>
      <footer className="white-curve-before curve-before-80 page-footer footer-view-links section-white-text">
        <div className="overflow-back bg-vegetables-pattern-white opacity-3" />
        <div className="footer-body">
          <div className="container">
            <nav className="footer-navbar">
              <div className="grid row">
                <div className="col-md-6 col-lg-3">
                  <a className="navbar-brand" href="homepage-1.html"><span className="logo-element-line"><span className="logo-icon"><span className="svg-content svg-fill-theme" data-svg="./assets/images/svg/logo-part.svg" /></span><span className="logo-text">Frutella</span></span></a>
                  <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus egestas elit.</p>
                  <div className="footer-socials"><a className="footer-socials-link" href="#"><i className="fab fa-twitter" /></a><a className="footer-socials-link" href="#"><i className="fab fa-facebook-square" /></a><a className="footer-socials-link" href="#"><i className="fab fa-dribbble" /></a><a className="footer-socials-link" href="#"><i className="fab fa-instagram" /></a></div>
                </div>
                <div className="col-md-12 col-lg-6 order-md-last">
                  <div className="grid row">
                    <div className="col-md-6">
                      <h5 className="footer-title">Pages</h5>
                      <ul className="nav">
                        <li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="shop-sidebar-right.html">Shop</a></li>
                        <li className="nav-item"><a className="nav-link" href="blog-sidebar-right.html">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact</a></li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="footer-title">Policies</h5>
                      <ul className="nav">
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Terms &amp; Conditions</a></li>
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Return Policy</a></li>
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Accessibility</a></li>
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Privacy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 order-lg-last">
                  <h5 className="footer-title">Our info</h5>
                  <p className="footer-text-info">+ 88 018 4113 6251<br />info@cannabify.com<br />Sidestate NSW 4132, Australia</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">Copyright © 2021 <strong>amigosthemes</strong>. All rights reserved.</div>
        </div>
      </footer>
    </>

  )
}

export default Signup;