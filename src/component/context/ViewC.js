import React from 'react';
import {UserContext} from "./ViewA";

function ViewC(props) {
    return (
        <UserContext.Consumer>
            {
                user => {
                    return <div>C - userName:{user}</div>
                }
            }
        </UserContext.Consumer>
    );
}

export default ViewC;