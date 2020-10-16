import React, { Component } from 'react'

import StepName from './StepName';
import StepLanguage from './StepLanguage';

type OwnProps = {
    step: number;
    nextStep: Function;
    close: Function;
}
type Props = OwnProps;

enum Steps {
    'NAME',
    'LANGUAGE',
};


const currentStep = (step: number, nextStep: Function, submit: Function) => {

    switch(step) {
        case Steps.NAME: 
        return (<StepName nextStep={() => nextStep} />);
        case Steps.LANGUAGE: 
        return (<StepLanguage nextStep={() => submit} />);
    }

}

function AddWidgetForm(props: Props) {


    const CurrentStep = currentStep(props.step, props.nextStep, props.close);


    return (
        <>
        {
            CurrentStep
        }
        </>
    )
}

export default AddWidgetForm;