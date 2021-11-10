import React from 'react';
import UseInput from "./UseInput";

function UseInputView(props) {
    const [value, bindInput, reset] = UseInput('');
    return (
        <div>
            <input {...bindInput} type={'text'}/>
            <button type={'button'} onClick={() => {
                alert(value)
                reset()
            }}>reset
            </button>
        </div>
    );
}

export default UseInputView;
