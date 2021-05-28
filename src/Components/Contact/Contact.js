import React, { useState } from "react";
import Jumbo from "../Jumbo/Jumbo";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";

toast.configure();

function Contact() {
  const history = useHistory();
  const [feedback, setfeedback] = useState({
    name: "",
    email: "",
    message: ""
  })

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setfeedback({ ...feedback, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const token = localStorage.getItem("access_token");
    const { name, email, message } = feedback;

    const res = await fetch("https://vegetable-store-backend.herokuapp.com/users/contact", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    }
    else {
      toast.success("Thanks for contact us");
      history.push("/");
    }
  }

  return (
    <div>
      <Jumbo name="Contact" />
      <section className="section">
        <div className="section-head">
          <div className="section-icon"><span className="svg-fill-jazzberry-jam svg-content" data-svg="./assets/images/svg/title-rasberry.svg" /></div>
          <div className="section-head-content">
            <h2 className="section-title">Have something to say?</h2>
            <p className="section-text">Here is the place</p>
          </div>
        </div>
        <div className="container">
          <form method="POST" onSubmit={handleSubmit} autoComplete="off">
            <div className="row grid justify-content-center">
              <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
                <div className="input-view-flat input-gray-shadow form-group">
                  <label className="required">Your Name</label>
                  <div className="input-group"><input className="form-control" name="name" type="text" placeholder="Name" onChange={handleChange} value={feedback.name} required="required" /></div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-5 col-xl-4">
                <div className="input-view-flat input-gray-shadow form-group">
                  <label className="required">Your Email</label>
                  <div className="input-group"><input className="form-control" name="email" type="email" placeholder="Email" onChange={handleChange} value={feedback.email} required="required" /></div>
                </div>
              </div>
              <div className="col-12 col-lg-10 col-xl-8">
                <div className="input-view-flat input-gray-shadow form-group">
                  <label className="required">Your Message</label>
                  <div className="input-group"><textarea className="form-control" name="message" onChange={handleChange} value={feedback.message} placeholder="Message" defaultValue={""} /></div>
                </div>
              </div>
              <div className="col-12 text-center"><button className="btn-wide mb-0 btn btn-theme" type="submit">send message</button></div>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact;