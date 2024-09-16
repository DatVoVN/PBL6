import React from "react"
import "./Register.css"
import { Link } from "react-router-dom"
const Register = () => {
  return (
    <>
      <div className="image-wrapper">
        <img
          src="./img/normal-breadcrumb.jpg"
          alt="Background"
          className="background-image"
        />
        <div className="text-content">
          <h1>REGISTER</h1>
          <p>WELCOME TO THE OFFICIAL ANIME BLOG</p>
        </div>
      </div>
      <div className="register-form">
        <div className="container">
          <div className="row">
            <div className="register__form">
              <h3>REGISTER</h3>
              <form action="#">
                <div className="input__item">
                  <input type="text" placeholder="Email address" />
                  <span className="icon_mail">
                    <i className="bi bi-envelope"></i>
                  </span>
                </div>
                <div className="input__item">
                  <input type="password" placeholder="Password" />
                  <span className="icon_lock">
                    <i className="bi bi-unlock"></i>
                  </span>
                </div>
                <div className="input__item">
                  <input type="text" placeholder="Your Name" />
                  <span className="icon_lock">
                    <i className="bi bi-person"></i>
                  </span>
                </div>
                <div className="text1">
                  <h4>Already have an account? </h4>
                  <span>
                    <Link to={"/login"} className="textlink">
                      LOGIN
                    </Link>
                  </span>
                </div>
                <button type="submit" className="site-btn">
                  REGISTER NOW
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
