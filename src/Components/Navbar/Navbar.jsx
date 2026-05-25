// import React, { useContext, useState } from "react";
// import "./Navbar.css";
// import logo from "../../assets/logo.webp"
// import cart_icon from "../../assets/cart_icon.png"
// import { Link } from "react-router-dom";
// import { ShopContext } from "../../Context/ShopContext";
// import { useState } from "react";

// const Navbar = () =>{

//     const[menu, setMenu] = useState("Home");
//     const {getTotalCartItems} = useContext(ShopContext);
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <div className='navbar'>
//             <div className="nav-logo">
//              <img src={logo} alt="logo" height= "50px"/>
//              <p>Shopify</p>
//             </div>

//             <div className="nav-hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
//                 <img src="https://cdn-icons-png.flaticon.com/128/7710/7710488.png"/>
//             </div>
            
//             <ul className="nav-menu">
//                 <li onClick={()=> setMenu("home")}>
//                 <Link style = {{textDecoration: "none", color: "#626262"}} to ="/">Home</Link>
//                 {menu==="home" ? <hr/>:<></>} </li>

//                 <li onClick={()=> setMenu("mens")}>
//                 <Link style = {{textDecoration: "none", color: "#626262"}} to ="/mens">Mens</Link>
//                 {menu==="mens" ? <hr/>:<></>} </li>

//                 <li onClick={()=> setMenu("womens")}>
//                 <Link style = {{textDecoration: "none", color: "#626262"}} to ="/womens">Womens</Link>
//                 {menu==="womens" ? <hr/>:<></>} </li>

//                 <li onClick={()=> setMenu("kids")}>
//                 <Link style = {{textDecoration: "none", color: "#626262"}} to ="/kids">Kids</Link>
//                 {menu==="kids" ? <hr/>:<></>} </li>
//             </ul>
//             <div className="nav-login-cart">
//                 <Link to="/login"><button>Login</button></Link>
//                 <Link to="/cart"><img src={cart_icon} alt="cart" height= "40px"/></Link>
//                 <div className="nav-cart-count">{getTotalCartItems()}</div>
//             </div>
//         </div>
//     )
// }

// export default Navbar;
import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);

    const { getTotalCartItems } = useContext(ShopContext);

    return (
        <div className='navbar'>

            {/* Logo */}
            <div className="nav-logo">
                <img src={logo} alt="logo" height="50px" />
                <p>Shopify</p>
            </div>

            {/* Hamburger */}
            <div 
                className="nav-hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            {/* Menu */}
            <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>

                <li onClick={() => {
                    setMenu("home");
                    setMenuOpen(false);
                }}>
                    <Link
                        style={{ textDecoration: "none", color: "#626262" }}
                        to="/"
                    >
                        Home
                    </Link>

                    {menu === "home" ? <hr /> : <></>}
                </li>

                <li onClick={() => {
                    setMenu("mens");
                    setMenuOpen(false);
                }}>
                    <Link
                        style={{ textDecoration: "none", color: "#626262" }}
                        to="/mens"
                    >
                        Mens
                    </Link>

                    {menu === "mens" ? <hr /> : <></>}
                </li>

                <li onClick={() => {
                    setMenu("womens");
                    setMenuOpen(false);
                }}>
                    <Link
                        style={{ textDecoration: "none", color: "#626262" }}
                        to="/womens"
                    >
                        Womens
                    </Link>

                    {menu === "womens" ? <hr /> : <></>}
                </li>

                <li onClick={() => {
                    setMenu("kids");
                    setMenuOpen(false);
                }}>
                    <Link
                        style={{ textDecoration: "none", color: "#626262" }}
                        to="/kids"
                    >
                        Kids
                    </Link>

                    {menu === "kids" ? <hr /> : <></>}
                </li>
            </ul>

            {/* Login & Cart */}
            <div className="nav-login-cart">

                <Link to="/login">
                    <button>Login</button>
                </Link>

                <Link to="/cart">
                    <img src={cart_icon} alt="cart" height="40px" />
                </Link>

                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>

            </div>
        </div>
    );
}

export default Navbar;