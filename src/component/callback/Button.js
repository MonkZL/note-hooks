import React from 'react';

function Button({onclick, children}) {
    console.log(`Button --- ${children} --- upDate`)
    return (
        <div>
            <button type={'button'} onClick={onclick}>{children}</button>
        </div>
    );
}

export default React.memo(Button);
