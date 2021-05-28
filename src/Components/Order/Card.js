import React, { useState } from 'react'
import Details from './Details';
import Product from './Product';

function Card({ order }) {
    const [active, setActive] = useState(false);
    let activeState = "order-line-entity dash-separated-entity entity-hover-only-shadow-block entity-expandable ";
    if (active) {
        activeState += "active";
    }
    const activeStateHandler = () => {
        setActive(prev => !prev);
    }
    let total = 0;
    order.product.forEach(ele => {
        total += ele.qty * ele.price;
    });
    let productlist = "";
    order.product.forEach((ele, index, array) => {
        productlist += ele.name;
        if (index + 1 !== array.length)
            productlist += ", ";
    });
    const date = new Date(order.created_at);
    const fdate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    return (
        <div className={activeState} id="order-923776A" data-theme-accordion="orders-list" onClick={activeStateHandler}>
            <div className="entity-line-head entity-expand-head">
                <div className="entity-expand">
                    <div className="entity-active-rotate"><i className="fas fa-angle-double-down fa-fw" /></div>
                </div>
                <div className="entity-number">#{order._id.substr(0, 8)}</div>
                <div className="entity-break d-sm-none" />
                <div className="entity-title">{productlist}</div>
                <div className="entity-break d-md-none" />
                <div className="entity-date">{fdate}</div>
                <div className="entity-total">&#8377;{total}</div>
                <div className="entity-status">pending</div>
            </div>
            {
                order.product.map((ele, index, array) => (
                    <Product key={ele._id} name={ele.name} price={ele.price} qty={ele.qty} index={index} sz={array.length} total={total} zip={order.zip} city={order.city} address={order.address} rname={order.receiver_name} />
                ))

            }



        </div>

    )
}

export default Card
