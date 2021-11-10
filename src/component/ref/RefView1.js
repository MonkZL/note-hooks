import React, {useEffect, useRef, useState} from 'react';

function RefView1(props) {

    const [count, setCount] = useState(0)

    const counterRef = useRef();

    useEffect(() => {
        //使用ref记录计时器ref
        counterRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000);
        return () => {
            clearInterval(counterRef.current)
        }
    }, [])

    return (
        <div>
            {count}
            <button type={'button'} onClick={() => clearInterval(counterRef.current)}>closeTimer</button>
        </div>
    );
}

export default RefView1;
