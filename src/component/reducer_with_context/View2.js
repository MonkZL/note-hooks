import React, {useContext} from 'react';
import {countContext} from "./View1";

function View2(props) {
    const counterContext = useContext(countContext);
    return (
        <div>
            {counterContext.counterState.count}
            <div>
                <button type={'button'} onClick={() => counterContext.counterDispatch('increment')}>increment</button>
                <button type={'button'} onClick={() => counterContext.counterDispatch('decrement')}>decrement</button>
                <button type={'button'} onClick={() => counterContext.counterDispatch('reset')}>reset</button>
            </div>
        </div>
    );
}

export default View2;
