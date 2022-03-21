import React from 'react';
import { devide, multiply } from '../utilities/calculates';

const Grocery = () => {
    const first = 10;
    const second = 2;
    const multiplyResult = multiply(first, second);
    const divideResult = devide(first, second);
    return (
        <div style={style}>
            <h3>Welcome to Grocery Shop calculate components</h3>
            <h4>First Number: {first}</h4>
            <h4>Second Number: {second}</h4>
            <h4>Grocery Shop Multiply Calculate: {multiplyResult}</h4>
            <h4>Grocery Shop Devide Calculate: {divideResult}</h4>
        </div>
    );
};
const style = {
    backgroundColor: 'darkgray',
    margin : '20px',
    padding: '20px',
    border: '2px solid darkblue',
    borderRadius: '20px',
    testShadow: '1px 2px 5px gray'
}
export default Grocery;