import React , {useState} from 'react';

type Props = {
    nextStep: Function, 
}

const StepLanguage = (props: Props) => {

    const [language, setLanguage] = useState('');


    function handleLanguageChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setLanguage(evt.target.value)
    }

    return <>
    <form onSubmit={props.nextStep({language})}>
            <input type='text' value={language} onChange={handleLanguageChange} placeholder={`widget's lang name`} />
        </form>
    </>
}
export default StepLanguage;