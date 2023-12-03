import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
           <div className="top">
           <div className="item">
               <h1>Categories</h1>
               <span>Women</span>
               <span>Men</span>
               <span>Shoes</span>
               <span>Accessories</span>
           </div>
           <div className="item">
               <h1>Links</h1>
               <span>FAQ</span>
               <span>Pages</span>
               <span>Stores</span>
               <span>Compare</span>
               <span>Cookies</span>
           </div>
           <div className="item">
               <h1>About</h1>
               <span>Lorem Ipsum Text</span>
           </div>
           <div className="item">
               <h1>Contact</h1>
               <span>Lorem Ipsum Text</span>
           </div>
           </div>


           <div className="bottom">
               <div className="left">
                   <span className="logo">Team8 Ecommerce Store</span>
                   <span className="copyright">No rights reseverved.</span>
               </div>
               <div className="right">
                   <img src="/img/paymentsII.png" alt="" />
               </div>
           </div>
        </div>
    )
}

export default Footer
