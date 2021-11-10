import React, {createContext, useContext, useReducer} from 'react';
import View2 from "./View2";

const initialState = {count: 0};

const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return {...state, count: state.count + 1}
        case 'decrement':
            return {...state, count: state.count - 1}
        case 'reset':
            return {...state, count: initialState.count}
        default:
            return initialState;
    }
}

export const countContext = createContext();

function View1(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {state.count}
            <div>
                <button type={'button'} onClick={() => dispatch('increment')}>increment</button>
                <button type={'button'} onClick={() => dispatch('decrement')}>decrement</button>
                <button type={'button'} onClick={() => dispatch('reset')}>reset</button>
            </div>
            <countContext.Provider value={{counterState: state, counterDispatch: dispatch}}>
                <View2/>
            </countContext.Provider>
        </div>
    );
}

export default View1;
