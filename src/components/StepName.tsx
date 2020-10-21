import React, {SyntheticEvent, useState} from 'react';
import { Button, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import styles from './StepName.module.scss';

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
  }));

type Props = {
    nextStep: Function, 
}

export interface VALIDATION_ERROR {
    [key: string]: string
}
const requiredError  = (): VALIDATION_ERROR => ({required: 'Please enter a name'});

const StepName = (props: Props) => {

    const classes = useStyles();
    const [name, setName] = useState('');

    const defaultErrors: VALIDATION_ERROR = {};
    const [errors, setErrors] = useState(defaultErrors);


    function handleNameChange(evt: React.ChangeEvent<HTMLInputElement>) {
        setName(evt.target.value);
        validate(evt.target.value);
    }

    function validate(name: string): boolean {
        if (name && name !== '') {
            setErrors({});
            return true;
        }

        setErrors({...requiredError()}); 
        return false;
    }


    function submit(evt: SyntheticEvent) {


        evt.preventDefault();

        if (validate(name)) {
            props.nextStep(name);
        }
    }

    return <>
    <form onSubmit={submit} className={classes.root}>

        <Typography variant="h6">
            Widget's Name
        </Typography>

        <FormControl className={classes.formControl}>
            <TextField id="name" value={name}  onChange={handleNameChange} placeholder={`widget's name`} />
                <FormHelperText>Please choose a language</FormHelperText>
            </FormControl>
        
        {
            errors.required?
            <p className={styles.error}>{errors.required}</p>
            : null
        }
        <Button type='submit' color='primary'>Submit</Button>
    </form>

</>
} 

export default StepName;