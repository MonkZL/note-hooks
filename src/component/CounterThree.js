import React, {useEffect, useState} from 'react';

function CounterThree(props) {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `title is ${count}`
    },[count]);

    const plusCount = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <input type={'text'} value={name} onChange={event => setName(event.target.value)}/>
            <button type={'button'} onClick={plusCount}>plusCount {count}</button>
        </div>
    );
}

export default CounterThree;