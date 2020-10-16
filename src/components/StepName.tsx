import React, {useState} from 'react';

type Props = {
    nextStep: Function, 
}
const StepName = (props: Props) => {


    const [name, setName] = useState('');


    function handleNameChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setName(evt.target.value)
    }
    return <>
    <form onSubmit={props.nextStep({name})}>
        <input type='text' value={name} onChange={handleNameChange} placeholder={`widget's name`} />
    </form>
</>
} 

export default StepName;