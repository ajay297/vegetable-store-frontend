import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import SearchItem from './SearchItem';

var Sarray = [];
var element = null;
function Search() {
  const [searched, setsearched] = useState("");
  const Data = useSelector(state => state.data);
  const data = Data.data;
  const Change = (e) => {
    Sarray = [];
    element = null;
    const index = data.findIndex(ele => ele.name === e.target.value);
    if (index !== -1) {
      Sarray.push({ key: data[index].name, name: data[index].name, price: data[index].price, image: data[index].image });
      element = (<div className="mb-4 section-head" style={{ 'marginTop': '10px' }}>
        <h3 className="section-title h4"><span>Your Searched product :</span></h3>
      </div>)
    }
    setsearched(e.target.value);
  }

  const onEnter = (e) => {
    if (e.code === 'Enter') {
      if (!Sarray.length) {
        element =
          (<div className="mb-4 section-head" style={{ 'marginTop': '10px' }}>
            <h3 className="section-title h4"><span>No products found matching : "{searched}"</span></h3>
          </div>
          )
        setsearched("");
      }
    }

  }
  const Clicked = () => {
    if (!Sarray.length) {
      element =
        (<div className="mb-4 section-head" style={{ 'marginTop': '10px' }}>
          <h3 className="section-title h4"><span>No products found matching : "{searched}"</span></h3>
        </div>
        )
      setsearched("");
    }
  }
  return (
    <div>
      <section className="section-sidebar">
        <div className="mb-4 section-head">
          <h3 className="section-title h4"><span>Search</span></h3>
        </div>
        <div autoComplete="off">
          <div className="row">
            <div className="col">
              <div className="input-view-flat input-gray-shadow form-group">
                <div className="input-group" >
                  <input className="form-control" type="text" value={searched} onChange={Change} onKeyPress={onEnter} />
                </div>
              </div>
            </div>
            <div className="col-auto">
              <button className="mb-0 btn btn-theme" type="submit" onClick={Clicked}>
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section className="section-sidebar">
          {element}
          <div className="grid row">
            {

              Sarray.map(ele => (
                <SearchItem key={ele.name} name={ele.name} price={ele.price} imgsrc={ele.image} />
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}

export default Search