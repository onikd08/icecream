import React from 'react';
import classes from './Body.module.css';
//import Builder from '../Builder/Builder';
import IceCreamBuilder from '../../containers/IceCreamBuilder/IceCreamBuilder';

const Body = () => {
    return (
        <div className={classes.mainbody}>
            <IceCreamBuilder />
        </div>
    );
}

export default Body;