import React from 'react';

function Title(props) {
    console.log('Title --- Update')
    return (
        <div>title</div>
    );
}

export default React.memo(Title);
