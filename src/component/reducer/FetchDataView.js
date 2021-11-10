import React, {useEffect, useReducer} from 'react';
import axios from "axios";

const initialState = {
    loading: false,
    lists: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'loading':
            return {...state, loading: true}
        case 'loaded':
            return {...state, loading: false, lists: action.lists}
        default:
            return initialState
    }
}

function FetchDataView(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({type: 'loading'})
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                dispatch({type: 'loaded', lists: response.data})
            })
    }, [])

    return (
        <div>
            {state.loading && 'loading'}
            <ul>
                {
                    state.lists.map(item => {
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default FetchDataView;
