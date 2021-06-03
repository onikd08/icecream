import classes from './Builder.module.css';
import React from 'react';
import Items from './Items/Items';
import TotalPrice from './TotalPrice/TotalPrice';
import Modal from './Modal/Modal'

const Builder = ({ items, price, add, remove, scoops, final }) => {
    // console.log(scoops);

    return (
        <div>
            <div className={classes.builder}>
                <h3>Build your own Ice Cream</h3>

                <Items
                    items={items}
                    add={add}
                    remove={remove}
                    scoops={scoops}
                />

                <TotalPrice price={price} />

                <button type="button" className={['rounded', classes.order].join(' ')}>
                    Add to cart
                </button>
            </div>
            <Modal>
                Hello Modal
            </Modal>
        </div>
    );
};

export default Builder;