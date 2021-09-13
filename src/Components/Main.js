import React, { Component } from 'react'
import './Main.css';
import Products from './Products';
import Contact from './Contact';
import Recommended from './Recommended';
import Featured from './Featured';
import { BsFillBagFill } from "react-icons/bs";
export class Main extends Component {
  
    render() {
        return (
            <div>
                <div class="hero" id="#Main1">
                    <div class="tint"></div>
                    <div class="claim"><h1 className="h1Wlc">Welcome to our store,</h1>  You Will Find everything you want and more</div>
                   <div className="btns">
                   <button className="btnShop" ><a href="#RecommenedDiv">Shop Now</a> <BsFillBagFill/></button>
                    <button className="btnGet" ><a href="#Contact">Get in touch</a></button>
                   </div>    
                </div>
                <div>
                    <br></br>
                    <br></br>
                <p>EXPLORE AWESOME PRODUCTS</p>
                   <h1 className="centerH1">RECOMMENDED FOR YOU</h1>
                   <div className="recommenedDiv" id="RecommenedDiv"> <Recommended/></div>
                   <br></br>
                   <button className="btnView"><a href="#Product">View more</a></button>
                </div>
                <br></br>
                <br></br>
               <div className="grid2" id="product">  
                 <Products />
               </div>
               <div  id="Contact" >
                   <Contact />
               </div>
            </div>
        )
    }
}

export default Main
