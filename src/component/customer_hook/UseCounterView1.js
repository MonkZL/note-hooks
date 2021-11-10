import React, {useState} from 'react';
import UseCounter from "./UseCounter";

function UseCounterView1(props) {
    const [count, increment, decrement, reset] = UseCounter();
    return (
        <div>
            {count}
            <button type={'button'} onClick={increment}>increment1</button>
            <button type={'button'} onClick={decrement}>decrement1</button>
            <button type={'button'} onClick={reset}>reset1</button>
        </div>
    );
}

export default UseCounterView1;
