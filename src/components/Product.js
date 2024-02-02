import React  from 'react';
import { shorten , isInCart , quantityCount} from '../helper/functions';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import {addItem , removeItem , increase , decrease} from "../redux/cart/cartAction"

//icon
import trashIcon from "../assets/trash.svg"

import Styles from "./Product.module.css"

const Product = ({productData}) => {
   
     const dispatch = useDispatch()
     const state = useSelector(state => state.cartState)
    return (
        <div className={Styles.container}>
            <img className={Styles.cardimage} src={productData.image} alt="product" style={{width : "200px"}}/>
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price} $</p>
            <div className={Styles.linkcontainer}>
                <Link to={`/products/${productData.id}`}>details</Link>
                <div className={Styles.buttoncontainer}>
                    {quantityCount(state , productData.id) === 1 && 
                    <button className={Styles.smallbutton} onClick={() => dispatch(removeItem(productData))}><img src={trashIcon} alt='trash' style={{width :"15px"}}/></button>}
                    {quantityCount(state , productData.id) > 1 && 
                    <button className={Styles.smallbutton} onClick={() => dispatch(decrease(productData))}>-</button>}
                    {quantityCount(state , productData.id) > 0 && <span className={Styles.counter}>{quantityCount(state , productData.id)}</span>}
                    {
                    isInCart(state , productData.id) ? 
                    <button className={Styles.smallbutton} onClick={() => dispatch(increase(productData))}>+</button> :
                    <button onClick={() => dispatch(addItem(productData))}>Add to Cart</button>
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Product;