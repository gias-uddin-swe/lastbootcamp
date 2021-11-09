import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact">
          <div className="row container">
            <div className="col-md-6">
              <div className="login-form mt-5">
                <form action="">
                  <input
                    className="input-field mt-3"
                    type="text"
                    placeholder="Your Name"
                  />
                  <br />
                  <input
                    className="input-field mt-3"
                    type="email"
                    placeholder="Your Email"
                  />
                  <br />
                  <input
                    className="input-field mt-3"
                    type="password"
                    placeholder="Your Password"
                  />
                  <br />
                  <input
                    className="submit-button mt-3"
                    type="submit"
                    value="Submit"
                  />
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="login-img">
                <img
                  className="w-100"
                  src="https://i.ibb.co/FVMcnDp/undraw-contact-us-15o2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
