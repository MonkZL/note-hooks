import React, {useState} from 'react';
import UseCounter from "./UseCounter";

function UseCounterView(props) {
    const [count, increment, decrement, reset] = UseCounter();
    return (
        <div>
            {count}
            <button type={'button'} onClick={increment}>increment</button>
            <button type={'button'} onClick={decrement}>decrement</button>
            <button type={'button'} onClick={reset}>reset</button>
        </div>
    );
}

export default UseCounterView;
