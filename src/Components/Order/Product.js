import React from 'react';
import Details from './Details';

function Product({ name, price, qty, index, sz, total, city, zip, address, rname }) {
    return (
        <div>
            <div className="entity-expanded-content">
                <div className="separator-dashed" />
                <div className="entity-line-items">
                    <div className="line-entity">
                        <div className="entity-line-image"><a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html"><span className="embed-responsive embed-responsive-4by3"><img className="embed-responsive-item" src="./assets/images/content/720x540/banana.jpg" alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a></div>

                        <div className="entity-title"><a className="content-link" href="shop-product-sidebar-right.html">{name}</a></div>
                        <div className="entity-break d-md-none" />
                        <div className="entity-price">&#8377;{price}/kg</div>
                        <div className="entity-quantity">x{qty}</div>
                        <div className="entity-total">&#8377;{price * qty}</div>

                    </div>
                </div>
                <div className="separator-dashed" />
                {index + 1 === sz ? <Details city={city} zip={zip} address={address} total={total} rname={rname} /> : null}
            </div>
        </div>
    )

}

export default Product;