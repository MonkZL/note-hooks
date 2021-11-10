import React, {useState} from 'react';

function Counter(props) {

    const [count, setCount] = useState(0)

    const plusCount = () => {
        for (let i = 0; i < 5; i++) {
            setCount(preCount => preCount + 1)
        }
    }

    return (
        <div>
            <h1>count is {count}</h1>
            <button type={'button'} onClick={plusCount}>plus count2</button>
        </div>
    );
}

export default Counter;