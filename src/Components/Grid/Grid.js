import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncfetchData } from '../../store/actions/data';
import ItemCard from '../../Components/ItemCard/ItemCard'
import Left from '../../Components/Left side bar/Left'
import { BarLoader } from 'react-spinners';

const loader = {
  'width': '50%',
  'margin-top': '150px',
  'left': '25%'
}
function Grid() {
  const dispatch = useDispatch();
  const Data = useSelector(state => state.data);
  const data = Data.data;
  useEffect(() => {
    dispatch(asyncfetchData());

  }, []);

  return (
    <div className="container">
      <div className="sidebar-container">
        <div className="content">
          <section className="section">
            <div className="grid row">
              {

                Data.loading ? (<BarLoader color='#ffb524' css={loader} />) :
                  data.map(ele => (
                    <ItemCard key={ele._id} name={ele.name} imgsrc={ele.image} price={ele.price} _id={ele._id} />
                  ))
              }
            </div>
          </section>
        </div>
        <Left />
      </div>
    </div>
  )
}

export default Grid
