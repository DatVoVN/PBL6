import React from "react"
import "./Login.css"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <div className="image-wrapper">
        <img
          src="./img/normal-breadcrumb.jpg"
          alt="Background"
          className="background-image"
        />
        <div className="text-content">
          <h1>LOGIN</h1>
          <p>WELCOME TO THE OFFICIAL ANIME BLOG</p>
        </div>
      </div>
      <div className="login-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login__form">
                <h3>Login</h3>
                <form action="#">
                  <div className="input__item">
                    <input type="text" placeholder="Email address" />
                    <span className="icon_mail">
                      <i class="bi bi-envelope"></i>
                    </span>
                  </div>
                  <div className="input__item">
                    <input type="password" placeholder="Password" />
                    <span className="icon_lock">
                      <i class="bi bi-unlock"></i>
                    </span>
                  </div>
                  <button type="submit" className="site-btn">
                    LOGIN NOW
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login__register">
                <h3>Don’t Have An Account?</h3>
                <Link to={"/register"} className="primary-btn">
                  REGISTER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
