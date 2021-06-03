import React from 'react';
import classes from './TotalPrice.module.css'

const TotalPrice = ({ price }) => {
    return (

        <div className={classes.total}>
            <div>Total Price</div>
            <div>{price} € </div>
        </div>


    )
}

export default TotalPrice;