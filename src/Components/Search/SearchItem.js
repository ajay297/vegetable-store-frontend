import React from 'react'

function SearchItem(props) {
    return (
        <div className="col-md-6 col-lg-12">
        <article className="entity">
          <div className="grid-sm row">
            <div className="col-sm-5">
              <a className="entity-preview-show-up entity-preview" href="shop-product-sidebar-right.html">
                  <span className="embed-responsive embed-responsive-6by4">
                      <img className="embed-responsive-item" src={props.imgsrc} alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"><i className="fas fa-search" /></span><span className="overflow-back bg-body-back opacity-70" /></span></a>
            </div>
            <div className="col">
              <h4 className="h5 mb-1 entity-title">
                <a className="content-link" href="shop-product-sidebar-right.html">{props.name}</a>
              </h4>
              <div className="entity-price">
                <span className="currency">$</span>{props.price} / kg
              </div>
            </div>
          </div>
        </article>
      </div>
    )
}

export default SearchItem