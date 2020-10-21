import React , {useState, SyntheticEvent, ChangeEvent, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import { Button } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from './StepLanguage.module.scss';


type Props = {
    nextStep: Function, 
}

export interface VALIDATION_ERROR {
    [key: string]: string
}
const requiredError  = (): VALIDATION_ERROR => ({required: 'Please select a language'});
const defaultErrors: VALIDATION_ERROR = {};


const LANGUAGES = ['en', 'es'];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


const Languages = () => {
    return (LANGUAGES.map((lang, idx) => (<option key={idx} value={lang}>{lang}</option>)))
}

const StepLanguage = (props: Props) => {

    const classes = useStyles();
    const [errors, setErrors] = useState(defaultErrors);
    const [language, setLanguage] = useState('');


    function handleLanguageChange(evt: any) {
        setLanguage(evt.target.value);
        validate(evt.target.value);
    }
    
    function validate(language: string): boolean {

        if (language && language !== '') {
            setErrors({});
            return true;
        } 

        setErrors({...requiredError()}); 
        return false;
    }

    function submit(evt: SyntheticEvent) {

        evt.preventDefault();

        if (validate(language)) {
            props.nextStep(language);
        }
    }

    return <>

         
        <form onSubmit={submit} className={classes.root}>

            <Typography variant="h6">
                Widget's Language
            </Typography>

            <FormControl className={classes.formControl}>
                <Select native onChange={handleLanguageChange} value={language}>
                    {Languages()}
                </Select>
                <FormHelperText>Please choose a language</FormHelperText>
            </FormControl>
            {
                errors.required?
                <p className={styles.error}>{errors.required}</p>
                : null
            }
            
            <Button type='submit' color='primary'>Next</Button>
        </form>
    </>
}
export default StepLanguage;