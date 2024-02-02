import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';

//icons
import shopIcon from "../assets/shop.svg";

import Styles from "./Navbar.module.css";
import { useSelector } from 'react-redux';
import authContext from "../context/authContext"

const Navbar = () => {

    const state = useSelector(state => state.cartState)
    const AuthContext = useContext(authContext)

    return (
        <div className={Styles.maincontainer}>
            <div className={Styles.container}>
             <Link className={Styles.product} to="/products">Products</Link>
             <div className={Styles.rightone} >
             <div className={Styles.iconcontainer} >
                <Link to="/cart"><img src={shopIcon} alt='shop'/></Link>
                <span>{state.itemsCounter}</span>
             </div>
             {AuthContext.isLoggedIn ? <p> {AuthContext.userName} </p>
             
             : <Link to='/login' className='link'>Login</Link>}
             
             </div>
            </div>
            
        </div>
    );
};

export default Navbar;