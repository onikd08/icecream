import React, { Component } from 'react';
import classes from './IceCreamBuilder.module.css';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/IceCream/IceCream';
import Modal from '../../components/Builder/Modal/Modal';

export default class IceCreamBuilder extends Component {
    state = {
        items: {},
        scoops: [],
        totalPrice: 0,
    };

    componentDidMount() {
        fetch('https://ice-creambuilder-default-rtdb.firebaseio.com/items.json')
            .then(response => response.json()
                .then((responseData) => {
                    // console.log(responseData);
                    this.setState({
                        items: responseData
                    })
                }));
    }

    addScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);

        this.setState((previousState) => {
            return {
                scoops: workingScoops,
                totalPrice: previousState.totalPrice + items[scoop],
            }
        });
    };
    removeScoop = (scoop) => {

        const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        //console.log(scoops);
        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);
        if (scoopIndex > -1) {
            workingScoops.splice(scoopIndex, 1)
            // console.log(workingScoops, scoopIndex);
            this.setState((prevState) => {
                //console.log(prevState)
                return {

                    scoops: workingScoops,
                    totalPrice: prevState.totalPrice - items[scoop],
                };
            });
        }

    };

    render() {

        return (
            <div className={['container', classes.container].join(' ')}>
                <IceCream scoops={this.state.scoops} />
                <Builder
                    items={this.state.items}
                    price={this.state.totalPrice}
                    add={this.addScoop}
                    remove={this.removeScoop}
                    scoops={this.state.scoops}

                />
                <Modal
                    scoops={this.state.scoops}
                    price={this.state.totalPrice}
                />


            </div>
        )
    }
}