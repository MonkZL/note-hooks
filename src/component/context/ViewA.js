import React from 'react';
import ViewB from "./ViewB";

export const UserContext = React.createContext("defaultName");

function ViewA(props) {
    return (
        <div>
            <UserContext.Provider value={'zhang liang'}>
                <ViewB/>
            </UserContext.Provider>
        </div>
    );
}

export default ViewA;