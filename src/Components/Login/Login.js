import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Jumbo from "../Jumbo/Jumbo.js"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function Login() {
  const history = useHistory();
  const [userSignin, setUserSignin] = useState({
    email: "",
    password: ""
  });


  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUserSignin({ ...userSignin, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = userSignin;

    const res = await fetch("https://vegetable-store-backend.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    localStorage.setItem("access_token", data.token);
    if (data.error) {
      toast.error(data.error);
    }
    else {
      toast.success("Successfully logged in");
      history.push("/");
    }
  }

  return (
    <div>
      <Jumbo name="Login" />
      <section className="section">
        <div className="section-head">
          <div className="section-icon"><span className="svg-fill-crimson svg-content" data-svg="./assets/images/svg/title-strawberry.svg" /></div>
          <div className="section-head-content">
            <h2 className="section-title">Sign in</h2>
            <p className="section-text">Sign in to your account to discover all great features in this template.</p>
          </div>
        </div>
        <div className="container">
          <div className="row" />
          <div className="row">
            <div className="col-sm-10 col-md-8 col-lg-5 mx-auto">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="row grid">
                  <div className="col-12">
                    <div className="input-view-flat input-gray-shadow form-group"><label className="required">Your
                    name</label>
                      <div className="input-group">
                        <input className="form-control" name="email" type="text" placeholder="Your email" required="required" value={userSignin.email} onChange={handleChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-view-flat input-gray-shadow form-group"><label className="required">Your
                    password</label>
                      <div className="input-group"><input className="form-control" name="password" type="password" placeholder="Password" required="required" value={userSignin.password} onChange={handleChange} /></div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-auto">
                    <div className="input-view-flat input-gray-shadow form-group">
                      <div className="form-check"><input className="form-check-input" type="checkbox" id="keep-logged" name="keepLoggedIn" defaultValue="yes" /><span className="form-check-icon" /><label className="form-check-label" htmlFor="keep-logged">Keep me logged in</label></div>
                    </div>
                  </div>
                  <div className="col-12 col-sm text-sm-right"><a className="my-auto" href="forgot-password.html">Forgot password?</a></div>
                  <div className="col-12 text-center"><button className="btn-wide mb-0 btn btn-theme" type="submit">sign in</button></div>
                  <div className="col-12 text-center">Don't have an account yet?&nbsp;<a href="sign-up.html">Sign
                  up</a></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="cart-sidebar collapse" data-block="cart" data-show-block-class="animation-scale-top-right" data-hide-block-class="animation-unscale-top-right"><a className="close-link" href="#" data-close-block="true"><i className="fas fa-times" /></a>
        <div className="cart-inner">
          <h4 className="text-title mb-2">Cart</h4>
          <div className="separator-line mb-4" />
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5"><a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src="./assets/images/content/720x540/blueberry.jpg" alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a></div>
              <div className="col">
                <h4 className="h5 mb-1 entity-title"><a className="content-link" href="shop-product-sidebar-right.html">Blueberry</a></h4>
                <div className="entity-price"><span className="currency">$</span>12.50/kg<span className="entity-quantity">&nbsp;x&nbsp;10</span></div>
                <div className="entity-total">total:&nbsp;&nbsp;&nbsp;$125.00</div>
              </div>
            </div>
          </div>
          <div className="entity">
            <div className="grid-sm row">
              <div className="col-5"><a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src="./assets/images/content/720x540/orange.jpg" alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a></div>
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
          </ul><a className="w-100 mb-2 btn btn-theme-bordered" href="shop-cart.html">view cart&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-bag" /></a><a className="w-100 btn btn-theme" href="shop-checkout.html">checkout&nbsp;&nbsp;&nbsp;<i className="fas fa-shopping-cart" /></a>
        </div>
      </div>
      <div className="scroll-top"><i className="fas fa-long-arrow-alt-up" /></div>
      <footer className="white-curve-before curve-before-80 page-footer footer-view-links section-white-text">
        <div className="overflow-back bg-vegetables-pattern-white opacity-3" />
        <div className="footer-body">
          <div className="container">
            <nav className="footer-navbar">
              <div className="grid row">
                <div className="col-md-6 col-lg-3"><a className="navbar-brand" href="homepage-1.html"><span className="logo-element-line"><span className="logo-icon"><span className="svg-content svg-fill-theme" data-svg="./assets/images/svg/logo-part.svg" /></span><span className="logo-text">Frutella</span></span></a>
                  <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                faucibus egestas elit.</p>
                  <div className="footer-socials"><a className="footer-socials-link" href="#"><i className="fab fa-twitter" /></a><a className="footer-socials-link" href="#"><i className="fab fa-facebook-square" /></a><a className="footer-socials-link" href="#"><i className="fab fa-dribbble" /></a><a className="footer-socials-link" href="#"><i className="fab fa-instagram" /></a></div>
                </div>
                <div className="col-md-12 col-lg-6 order-md-last">
                  <div className="grid row">
                    <div className="col-md-6">
                      <h5 className="footer-title">Pages</h5>
                      <ul className="nav">
                        <li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="shop-sidebar-right.html">Shop</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="blog-sidebar-right.html">Blog</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="contact-us.html">Contact</a></li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5 className="footer-title">Policies</h5>
                      <ul className="nav">
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Terms &amp;
                        Conditions</a></li>
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Return Policy</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Accessibility</a>
                        </li>
                        <li className="nav-item"><a className="nav-link" href="about-us.html">Privacy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-3 order-lg-last">
                  <h5 className="footer-title">Our info</h5>
                  <p className="footer-text-info">+ 88 018 4113 6251<br />info@cannabify.com<br />Sidestate NSW 4132,
                Australia</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="footer-copy">
          <div className="container">Copyright © 2021 <strong>amigosthemes</strong>. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default Login
