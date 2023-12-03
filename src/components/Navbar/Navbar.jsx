import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link } from "react-router-dom"
import "./Navbar.scss"
import {useState} from 'react'
import Cart from '../Cart/Cart';
import Products from '../../pages/Products/Products';
import {useSelector} from "react-redux";


const Navbar = () => {
const[open, setOpen] = useState(false)
const products = useSelector((state) => state.cart.products);

    return (
        <div className='navbar'>
            <div className="wrapper">
            <div className="left">
                <div className="item">
                    <img src="/img/eng2fr.png" alt="img "/>
                    <KeyboardArrowDownIcon />
                    
                </div>

                <div className="item">
                    <span>CAD</span>
                    <KeyboardArrowDownIcon/>
                </div>

                <div className="item">
                    <Link className ="link" to="/products/1">Women</Link >
                </div>


                <div className="item">
                    <Link className ="link" to="/products/2">Men</Link >
                </div>

                <div className="item">
                    <Link className ="link" to="/products/3">Children</Link >
                </div>

            </div>


            <div className="center">
                <Link className ="link" to="/">TEAM8 STORE</Link >
            </div>
            <div className="right">
            <div className="item">
                <Link className ="link" to="/">Homepage</Link >
            </div>

            <div className="item">
                <Link className ="link" to="/">About</Link >
            </div>

            <div className="item">
                <Link className ="link" to="/">Contact</Link >
            </div>

            <div className="item">
                <Link className ="link" to="/">Stores</Link >
            </div>

            <div className="icons">
                <SearchIcon/>
                <PersonOutlineIcon/>
                <FavoriteBorderOutlinedIcon/>

                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon/>
                    <span>{products.length}</span>
                </div>

            </div>
            </div>

            </div>
            
            {open && <Cart/>}
            
        </div>
    )
}

export default Navbar

