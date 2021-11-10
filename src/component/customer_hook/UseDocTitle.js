import React, {useState} from 'react';
import UseDoc from "./UseDoc";

function UseDocTitle(props) {

    const [count, setCount] = useState(0)

    UseDoc(count);

    return (
        <div>
            <button type={'button'} onClick={() => setCount(count + 1)}>plus count</button>
        </div>
    );
}

export default UseDocTitle;
