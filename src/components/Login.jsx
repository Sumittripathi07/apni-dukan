import React from 'react'
import "../Style/login.css"

const Login = () => {
  return (
    <>
    {/* <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY=" crossorigin="anonymous" /> */}


<div className="form-bg">
        <div className="container">
            <div className="row">
                <div className="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6 my-5" style={{"width": "auto"}}>
                    <div className="form-container">
                        <div className="left-content">
                            <h3 className="title">R.N Traders</h3>
                            <h4 className="sub-title">Login to get latest product updates.</h4>
                        </div>
                        <div className="right-content">
                            <h3 className="form-title">Login</h3>
                            <form className="form-horizontal">
                                <div className="form-group">
                                <label>Username / Email</label>
                                    <input type="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                <label>Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <button className="btn signin">Login</button>
                                <div className="remember-me">
                                    <input type="checkbox" className="checkbox"/>
                                    <span className="check-label">Remember Me</span>
                                </div>
                                <a href="/" className="forgot">Forgot Password</a>
                            </form>
                            <span className="separator">OR</span>
                            <ul className="social-links">
                                <li><a href="/"><i className="fab fa-google"></i> Login with Google</a></li>
                                <li><a href="/"><i className="fab fa-facebook-f"></i> Login with Facebook</a></li>
                            </ul>
                            <span className="signup-link">Don't have an account? Sign up <a href="/regester">here</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="open_grepper_editor" title="Edit & Save To Grepper"></div>
    </>
  )
}

export default Login