import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css'
import lightninglogo from "./images/logo.png";
class Footer extends React.Component {
  render() {
    return (
        <footer class="bg-white">
    <div class="container py-5">
      <div class="row py-4">
        <div class="col-lg-4 col-md-6 mb-4 mb-lg-0"><img src={lightninglogo} alt="" width="180" class="mb-3"/>
          <h6 class="font-italic text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</h6>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Products</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">Trending</a></li>
            <li class="mb-2"><a href="#" class="text-muted">My Acount</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Vendors</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Brand</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Storefront</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Legals</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">License</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Refund Policy</a></li>
            <li class="mb-2"><a href="#" class="text-muted">About Us</a></li>
            <li class="mb-2"><a href="#" class="text-muted">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4">Contact</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#" class="text-muted">feel free to get in touch with us via phone or send message</a></li>
            <li class="mb-2"><a href="#" class="text-muted">+1 234 567 89 10</a></li>
            <li class="mb-2"><a href="#" class="text-muted">example@igcloud.jo</a></li>
 
          </ul>
        </div>
      
      </div>
    </div>

    
  
  </footer>
    )
  }
}

export default Footer;
