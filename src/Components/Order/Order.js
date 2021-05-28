import React, { useEffect, useState } from 'react';
import Jumbo from '../Jumbo/Jumbo';
import Card from './Card';
import axios from 'axios';

function Order() {

    const [id, setid] = useState(null);
    const [order, setOrder] = useState(null);


    useEffect(() => {
        fetchData();
        async function fetchData() {
            const token = localStorage.getItem("access_token");
            await fetch("https://vegetable-store-backend.herokuapp.com/users/verifykro", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    'x-access-token': token
                }
            }).then(res => res.json()).then(data => {
                setid(data._id);
            });

        }


    }, [])

    useEffect(() => {
        fetchData();
        async function fetchData() {
            console.log("YEAH");
            const res = await axios.get("https://vegetable-store-backend.herokuapp.com/users/" + id);
            console.log("YPP", res.data);
            setOrder(res.data);
        }
    }, [id])
    return (
        <div>
            <Jumbo name="Order" />
            <section className="mt-5 section">
                <div className="container">
                    <div className="order-line-head-entity d-none d-md-block">
                        <div className="entity-line-head">
                            <div className="entity-order-number">Order</div>
                            <div className="entity-title">Products</div>
                            <div className="entity-date">Date</div>
                            <div className="entity-total">Total</div>
                            <div className="entity-status">Status</div>
                        </div>
                    </div>
                    <div className="entity-accordion-group">
                        {

                            order?.orders.map(ele => (
                                <Card key={ele._id} order={ele} />
                            ))
                        }



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


        </div>
    )
}

export default Order
