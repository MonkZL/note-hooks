import React, {useCallback, useState} from 'react';
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function CallbackView(props) {

    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1)
    }, [])

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1)
    }, [])

    return (
        <div>
            <Title/>
            <Count text={'age'} count={age}/>
            <Button onclick={incrementAge}>Increment Age</Button>
            <Count text={'salary'} count={salary}/>
            <Button onclick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}

export default CallbackView;
