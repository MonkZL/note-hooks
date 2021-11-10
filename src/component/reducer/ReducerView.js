import React, {useReducer} from 'react';

const initialState = {
    count: 0,
    countTwo: 0
}

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        case 'reset':
            return {...state, count: initialState.count}
        case 'incrementTwo':
            return {...state, countTwo: state.countTwo + 1}
        case 'decrementTwo':
            return {...state, countTwo: state.countTwo - 1}
        case 'resetTwo':
            return {...state, countTwo: initialState.countTwo}
        default:
            return initialState
    }
}

function ReducerView(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {state.count}
            <div>
                <button type={'button'} onClick={() => dispatch('increment')}>increment</button>
                <button type={'button'} onClick={() => dispatch('decrement')}>decrement</button>
                <button type={'button'} onClick={() => dispatch('reset')}>reset</button>
            </div>
            {state.countTwo}
            <div>
                <button type={'button'} onClick={() => dispatch('incrementTwo')}>incrementTwo</button>
                <button type={'button'} onClick={() => dispatch('decrementTwo')}>decrementTwo</button>
                <button type={'button'} onClick={() => dispatch('resetTwo')}>resetTwo</button>
            </div>
        </div>
    );
}

export default ReducerView;
