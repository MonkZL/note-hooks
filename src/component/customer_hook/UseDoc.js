import React, {useEffect} from 'react';

function UseDoc(count) {
    useEffect(()=>{
        document.title = `title ${count}`
    },[count])
}

export default UseDoc;
