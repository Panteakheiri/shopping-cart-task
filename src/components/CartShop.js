import React from 'react';
import Cart from './Cart';
import {Link} from "react-router-dom"
import {clear , checkout} from "../redux/cart/cartAction"
import Styles from "./CartShop.module.css"
import { useDispatch, useSelector } from 'react-redux';

const CartShop = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.cartState)
    return (
        <div className={Styles.container}>
        <div className={Styles.cartcontainer}>
            {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
        </div>
        <div className={Styles.payment}>
            {
                state.itemsCounter > 0 && <div>
                <p><span>Total Items :</span>{state.itemsCounter}</p>
                <p><span>Total Payment :</span>{state.total} $</p>
                <div className={Styles.buttoncontainer}>
                    <button className={Styles.clear} onClick={() => dispatch(clear())}>CLEAR</button>
                    <button className={Styles.checkout} onClick={() => dispatch(checkout())}>Check Out</button>
                    
                </div>
                </div>

            }
            {
                state.checkOut && <div className={Styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }
            {  !state.checkOut && state.itemsCounter === 0 && <div className={Styles.complete}>
                    <h3>Want To Buy ?</h3>
                    <Link to="/products">Back To Shop</Link>
                </div>

            }

        </div>
        </div>
    );
};

export default CartShop;