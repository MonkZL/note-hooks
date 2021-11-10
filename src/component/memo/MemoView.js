import React, {useMemo, useState} from 'react';

function MemoView(props) {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)

    const increment1 = () => {
        setNum1(prevNum1 => prevNum1 + 1)
    }

    const increment2 = () => {
        setNum2(prevNum2 => prevNum2 + 1)
    }

    const isOdd = useMemo(() => {
        console.log('-----isOdd------')
        return num1 % 2 === 0
    }, [num1])

    return (
        <div>
            <div>
                {isOdd && 'num1 is odd'}
                <button type={'button'} onClick={increment1}>increment1</button>
            </div>
            <button type={'button'} onClick={increment2}>increment2</button>
        </div>
    );
}

export default MemoView;
