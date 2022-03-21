import React from 'react';
import { add, subtract } from '../utilities/calculates';

const Shoes = () => {
    const first = 10;
    const second = 2;
    const addTotal = add(first, second);
    const sub = subtract(first, second);
    return (
        <div style={style}>
            <h3>Welcome to Shoes calculate components</h3>
            <h4>First Number: {first}</h4>
            <h4>Second Number: {second}</h4>
            <h4>Shoes Add Calculate: {addTotal}</h4>
            <h4>Shoes Sub Calculate: {sub}</h4>
        </div>
    );
};
const style = {
    backgroundColor: 'darkorange',
    margin : '20px',
    padding: '20px',
    border: '2px solid darkblue',
    borderRadius: '20px',
    testShadow: '1px 2px 5px gray'
}

export default Shoes;