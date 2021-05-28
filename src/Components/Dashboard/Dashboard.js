import React, { useEffect, useState } from "react";
import Jumbo from "../Jumbo/Jumbo";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function Dashboard() {
  const [userData, setData] = useState({});

  useEffect(async () => {
    const token = localStorage.getItem("access_token");
    await fetch("https://vegetable-store-backend.herokuapp.com/users/verifykro", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'x-access-token': token
      }
    }).then(res => res.json()).then(data => {
      if (data.error)
        toast.error(data.error);
      else {
        setData(data);
      }
    })
  }, [])


  return (
    <div>
      <Jumbo name="Dashboard" />
      <div className="section mb-0 container text-center">
        <nav className="line-navbar">
          <ul className="nav">
            <li className="nav-item"><a className="nav-link active" to="user-dashboard.html">Dashboard</a></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/order">Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist</Link></li>
          </ul>
          <div className="separator-line wide mirror" />
        </nav>
      </div>
      <section className="mt-5 entity section">
        <div className="container">
          <div className="grid align-items-center row">
            <div className="col-auto">
              <div className="d-inline-block mb-0 entity-image"><img className="mw-100" src="./assets/images/content/100x100/people-1.jpg" alt="" /></div>
            </div>
            <div className="col-auto col-lg">
              <h5 className="mb-0 entity-title">{userData.firstName} {userData.lastName}</h5>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="entity-detail-side-icon"><span className="entity-detail-icon text-theme"><i className="far fa-envelope fa-fw" /></span>{userData.email}</div>
              <div className="entity-detail-side-icon"><span className="entity-detail-icon text-theme"><i className="fas fa-phone-volume fa-fw" /></span>{userData.phone}</div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="entity-detail-side-icon"><span className="entity-detail-icon text-theme"><i className="fas fa-map-marker-alt fa-fw" /></span>{userData.city}<br />{userData.address},{userData.zip}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard;