import React, {useContext} from 'react';
import ViewC from "./ViewC";
import {UserContext} from "./ViewA";

function ViewB(props) {
    const user = useContext(UserContext);
    return (
        <div>
            {
                user
            }
            <ViewC/>
        </div>
    );
}

export default ViewB;