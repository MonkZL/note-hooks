import React, {useState} from 'react';

function CounterOne(props) {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <h1>firstName:{name.firstName}</h1>
            <h1>lastName:{name.lastName}</h1>
            <input type={'text'} value={name.firstName}
                   onChange={event => setName({...name, firstName: event.target.value})}/>
            <input type={'text'} value={name.lastName}
                   onChange={event => setName({...name, lastName: event.target.value})}/>
        </div>
    );
}

export default CounterOne;