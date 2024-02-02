import React from 'react';


import { increase ,decrease , removeItem } from '../redux/cart/cartAction';
import trashIcon from "../assets/trash.svg";
import {shorten} from "../helper/functions"
import Styles from "./Cart.module.css"
import { useDispatch } from 'react-redux';

const Cart = (props) => {

    const dispatch = useDispatch()
    const {image , price , title , quantity} = props.data
    return (
        <div className={Styles.container}>
            <img className={Styles.image} src={image} alt="product"/>
            <div className={Styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price} $</p>
            </div>
            <div className={Styles.quantity}>
                {quantity}
            </div>
            <div className={Styles.buttoncontainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch(decrease(props.data))}>-</button> :
                    <button className={Styles.trash} onClick={() => dispatch(removeItem(props.data))}><img src={trashIcon} alt="trash"/></button>
                }
                <button onClick={() => dispatch(increase(props.data))}>+</button>
            </div>
            
        </div>
    );
};

export default Cart;