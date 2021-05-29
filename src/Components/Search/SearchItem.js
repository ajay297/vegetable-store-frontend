import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions/cart';

function SearchItem(props) {
  const dispatch = useDispatch();
  const add = () => {
    dispatch(addToCart(props._id)); 
  }
    return (
        <div className="col-md-6 col-lg-12">
        <article className="entity">
          <div className="grid-sm row">
            <div className="col-md-6">
               <div className="entity-preview-show-up entity-preview"> 
                  <span className="embed-responsive embed-responsive-6by4">
                      <img className="embed-responsive-item" src={props.imgsrc} alt="" /></span><span className="with-back entity-preview-content"><span className="h3 m-auto text-theme text-center"></span><span className="overflow-back bg-body-back opacity-70" /></span>
                       </div> 
            </div>
            <div className="col">
              <h4 className="h5 mb-1 entity-title">
                <>{props.name}</>
              </h4>
              <div className="entity-price">
                <span className="currency">$</span>{props.price} / kg
              </div>
              <button  onClick={add} className="btn-wide mr-1 btn btn-theme" 
              style ={{'height': '2.5rem',
               'margin-top': '0.6rem',
                'margin-left': '-0.3rem',
                'padding': '0'}}>
                Add to cart
              </button>
            </div>
          </div>
        </article>
      </div>
    )
}

export default SearchItem