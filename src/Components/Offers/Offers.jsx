import React from "react";
import "./Offers.css"
import exclusive from "../../assets/exclusive.jpg"

const Offers = () =>{
    return (
        <div className="Offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>Best Offers for you</p>
            <p>Only on Best Sellers Products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="img"/>
        </div>
        </div>
    )
}

export default Offers;