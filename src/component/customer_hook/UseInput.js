import React, {useState} from 'react';

function UseInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const bindInput = {
        value,
        onChange: e => setValue(e.target.value)
    }
    const reset = () => {
        setValue(initialValue)
    }
    return [value, bindInput, reset]
}

export default UseInput;
