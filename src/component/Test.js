import React, {useEffect, useState} from 'react';
import axios from "axios";

function Test(props) {

    const [lists, setLists] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                setLists(response.data)
            })
            .catch(error => {
                alert(error)
            })
    }, [])

    return (
        <div>
            <ul>
                {lists.map(item => {
                    return (<li key={item.id}>{item.title}</li>)
                })}
            </ul>
        </div>
    );
}

export default Test;