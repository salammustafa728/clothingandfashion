import React, { Component } from 'react'
import './Main.css';
import axios from "axios";
import Card from "react-bootstrap/Card";
import Products from './Products';
import Contact from './Contact';

export class Main extends Component {
  
    render() {
        return (
            <div>
                <div class="hero">
                    <div class="tint"></div>
                    <p class="claim">Welcom To Our Store, <br></br> You Will Find everything you want and more</p>
                   <div className="btns">
                   <button className="">Shop Now</button>
                    <button>Get in touch</button>
                   </div>
                </div>
               <div className="scrollDiv" id="product">
                   <Products />
               </div>
               <div  id="Contact">
                   <Contact />
               </div>
            </div>
        )
    }
}

export default Main
