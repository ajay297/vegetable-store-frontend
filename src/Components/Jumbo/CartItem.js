import React from 'react'

function CartItem({ name, price, qty,image }) {
    return (
        <div className="entity">
            <div className="grid-sm row">
                <div className="col-5">
                    <a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html">
                    <span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src={image} alt="" />
                    </span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center">
                        <i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a></div>
                <div className="col">
                    <h4 className="h5 mb-1 entity-title"><a className="content-link" href="shop-product-sidebar-right.html">{name}</a></h4>
                    <div className="entity-price"><span className="currency">&#8377;</span>{price}/kg<span className="entity-quantity">&nbsp;x&nbsp;{qty}</span></div>
                    <div className="entity-total">total:&nbsp;&nbsp;&nbsp; &#8377;{qty * price}</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
