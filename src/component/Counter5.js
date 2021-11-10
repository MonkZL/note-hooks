import React, {useEffect, useState} from 'react';

function Counter5(props) {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('useEffect = upDate')
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>{count}</div>
    );
}

export default Counter5;