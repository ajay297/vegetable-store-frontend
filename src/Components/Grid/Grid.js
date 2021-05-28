import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncfetchData } from '../../store/actions/data';
import ItemCard from '../../Components/ItemCard/ItemCard'
import Left from '../../Components/Left side bar/Left'

function Grid() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [isLoading, setIsLoading] = useState(false);
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
