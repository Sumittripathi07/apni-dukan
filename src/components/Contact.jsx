import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div style={{"marginBottom": "2em"}}>

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
<section className="jumbotron text-center" style={{"marginTop": "5rem"}}>
    <div className="container">
        <h1 className="jumbotron-heading">CONTACT US</h1>
    </div>
</section>
<div className="container">
    <div className="row">
        <div className="col">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
</div>
<div className="container">
    <div className="row">
        <div className="col">
            <div className="card">
                <div className="card-header bg-primary text-white"><i className="fa fa-envelope"></i> Contact us.
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="6" required></textarea>
                        </div>
                        <div className="mx-auto">
                        <button type="submit" className="btn btn-primary text-right">Submit</button></div>
                    </form>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-4">
            <div className="card bg-light mb-3">
                <div className="card-header bg-success text-white text-uppercase"><i className="fa fa-home"></i> Address</div>
                <div className="card-body">
                    <p>Shop No. 4</p>
                    <p>New Hill View Apartment</p>
                    <p>Navre Park, Ambernath (W)</p>
                    <p> Email : <b><u>sumit.tpt07@gmail.com</u></b></p>
                    <p>9966554477</p>

                </div>

            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Contact