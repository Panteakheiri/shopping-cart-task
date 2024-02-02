import React, { useEffect} from 'react';
import {useSelector , useDispatch} from "react-redux"
//redux
import {fetchProducts} from '../redux/products/productsAction'
//components
import Product from './Product';
import Styles from "./Store.module.css"

const ProductList = () => {

    const dispatch = useDispatch()
    const productsState = useSelector(state => state.productsState)

    useEffect(() => {
        dispatch(fetchProducts())
    },[])

    return (
        <div className={Styles.container}>
            {
                productsState.loading ? <p>loading ...</p> :
                productsState.error ? <p>{productsState.error}</p> :
                productsState.products.map(product => 
                <Product productData={product}
                key={product.id}/>)
            }
        </div>
    );
};

export default ProductList;