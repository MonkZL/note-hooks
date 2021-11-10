import React, {useState} from 'react';

function CounterTwo(props) {
    const [lists, setLists] = useState([])

    return (
        <div>
            <button type={'button'} onClick={() => setLists([...lists, {key: lists.length, value: lists.length}])}>
                add item
            </button>
            <ul>
                {
                    lists.map(item => {
                        return <li key={item.id}>{item.value}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default CounterTwo;