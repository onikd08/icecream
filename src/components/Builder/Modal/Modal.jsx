import React from 'react';
import classes from './Modal.module.css';

const Modal = ({ scoops, price }) => {
    return (
        <div>

            <div className={classes.backdrop}></div>
            <div className={classes.modalBody}> {scoops} </div>
            <div className={classes.modalBody}> {price} </div>

        </div>
    );
}

export default Modal;