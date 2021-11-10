import React, {useEffect, useState} from 'react';

function Counter4(props) {
    const [disMiss, setDisMiss] = useState(false)
    return (
        <div>
            <button type={'button'} onClick={() => setDisMiss(!disMiss)}>toggle</button>
            {disMiss && <EscView/>}
        </div>
    );
}

function EscView(props) {
    useEffect(() => {
        console.log('useEffect - upDate')
        return () => {
            console.log('useEffect - esc')
        }
    })
    return (
        <div>showing</div>
    );
}

export default Counter4;