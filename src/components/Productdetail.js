import React , { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link , useParams} from 'react-router-dom';
import Styles from "./Productdetail.module.css"


const Productdetail = () => {
    const params = useParams()
    const id = params.id
    const data = useSelector(state => state.productsState.products) 
    const product = data[ id - 1 ]  
    const {image , title , price , description , category} = product

    return (
        
        <div className={Styles.container}>
            <img className={Styles.image} src={image} alt='product'/>
            <div className={Styles.textcontainer}>
              <h3>{title}</h3>
              <p className={Styles.description}>{description}</p>
              <p className={Styles.category}><span>category :</span> {category}</p>
              <div className={Styles.button}>
                 <p className={Styles.price}>{price} $</p>
                 <Link to='/products'>back to shop</Link>
              </div>
            </div>
            
        </div>
    
    );
};

export default memo(Productdetail);