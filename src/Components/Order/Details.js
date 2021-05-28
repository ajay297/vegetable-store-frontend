import React from 'react'

function Details({ total, city, zip, address, rname }) {
    console.log(zip, address);
    return (
        <div>
            <div className="entity-content-details">
                <div className="entity-content-title">Order information</div>
                <div className="row">
                    <div className="col-md-6 col-lg-4">
                        <ul className="main-list entity-list">
                            <li><span className="entity-list-title">Receiver:</span><span className="entity-list-value">{rname}</span></li>
                            <li><span className="entity-list-title">Addresss:</span><span className="entity-list-value" /></li>
                            <li><span className="entity-list-title" /><span className="entity-list-value">{address}, {city}, {zip}</span></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <ul className="main-list entity-list">
                            <li><span className="entity-list-title">Tracking number:</span><span className="entity-list-value">-</span></li>
                            <li><span className="entity-list-title">Logistics company:</span><span className="entity-list-value">ePacket</span></li>
                            <li><span className="entity-list-title">Shipment date:</span><span className="entity-list-value">-</span></li>
                        </ul>
                    </div>
                    <div className="mt-4 mt-lg-0 col-md-6 col-lg-4">
                        <ul className="flex-list entity-list">
                            <li className="entity-detail-subtotal"><span className="entity-list-title">Sub
      total:</span><span className="entity-list-value">&#8377;{total}</span></li>
                            <li className="entity-detail-subtotal"><span className="entity-list-title">Shipping:</span><span className="entity-list-value">&#8377;{10}</span></li>
                            <li className="separator-line my-3" />
                            <li className="entity-detail-total"><span className="entity-list-title">Total:</span><span className="entity-list-value">&#8377;{total + 10}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
